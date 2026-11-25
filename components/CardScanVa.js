import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-tilt";
import PropTypes from "prop-types";
import { useUser } from "../hooks";
import { postApiDatas, putApiDatas, getScanReader } from "../helpers";
import { lookupScanMetadata, readScanMetadata } from "../helpers/scanMetadata";
import Modal from "react-modal";
import LazyLoad from "react-lazyload";
import Select from "react-select";
import { Loader } from "../components";

const CardScanVa = (props) => {
  const [data, setData] = useState({ ...props.data });
  const [isBookmarked, setIsBookmarked] = useState(
    data.isBookmarked ? data.isBookmarked : false,
  );
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [reader, setReader] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState({
    label: data.chapt || "",
    value: data.link,
  });
  const [options, setOptions] = useState([]);
  const [loader, setLoader] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const [readerError, setReaderError] = useState("");
  const [bookmarkError, setBookmarkError] = useState("");
  const [metadataError, setMetadataError] = useState(false);
  const [currentLink, setCurrentLink] = useState(data.link);
  const [cover, setCover] = useState(props.isInProfile ? "" : data.img);
  const cardRef = useRef(null);
  const readerChapter = useRef(false);
  const isMangaKakalot = data.site === "MangaKakalot" ||
    (!data.site && /^https?:\/\/(?:manganato\.xyz|chapmanganato\.to|readmanganato\.com|(?:www\.)?mangakakalot\.com)\//i.test(data.link || ""));

  useEffect(() => {
    if (!props.isInProfile) return;

    let active = true;
    let observer;
    const applyMetadata = (metadata) => {
      if (!active || !metadata) return;
      if (isMangaKakalot && metadata.chaptMax && !readerChapter.current) {
        setData((scan) => ({ ...scan, chaptMax: metadata.chaptMax }));
      }
    };
    const loadMetadata = async () => {
      const imageLoads = (src) => new Promise((resolve) => {
        if (!src) return resolve(false);
        const image = new Image();
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
        image.src = src;
      });

      const originalImage = imageLoads(data.img);
      originalImage.then((loaded) => {
        if (loaded && active) setCover(data.img);
      });
      const cached = readScanMetadata(data.title);
      applyMetadata(cached?.data);

      try {
        if (!isMangaKakalot && await originalImage) return;
        const metadata = await lookupScanMetadata(data.title, () => active);
        if (!active) return;
        applyMetadata(metadata);
        setMetadataError(false);
        if (!(await originalImage) && metadata?.img) {
          if (await imageLoads(metadata.img)) {
            if (active) setCover(metadata.img);
          } else {
            console.error("Unable to load scan cover: image failed to load");
          }
        }
      } catch (error) {
        console.error("Unable to load scan metadata:", error.message);
        if (active) setMetadataError(true);
      }
    };

    const cached = readScanMetadata(data.title);
    applyMetadata(cached?.data);
    if (cached?.data?.img) setCover(cached.data.img);

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          loadMetadata();
        }
      }, { rootMargin: "200px" });
      observer.observe(cardRef.current);
    } else {
      loadMetadata();
    }
    return () => {
      active = false;
      if (observer) observer.disconnect();
    };
  }, [props.isInProfile, data.img, data.title, isMangaKakalot]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      textAlign: "center",
      height: "100%",
    },
    overlay: {
      zIndex: "100",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };
  Modal.setAppElement("#__next");

  const handleClick = async (e) => {
    e.preventDefault();
    setIsOpen(true);
    setLoader(true);
    setReaderError("");
    setAccessDenied(false);
    setCurrentLink(data.link);
    try {
      const reader = await getScanReader(data.link, data.title, data.chapt);
      const openedLink = reader.resolvedLink || data.link;
      setCurrentLink(openedLink);
      setReader(reader.scans);
      setOptions(reader.options);
      readerChapter.current = true;
      setData((scan) => ({ ...scan, chaptMax: reader.options[0]?.label }));
      setSelectedChapter(
        reader.options.find((option) => option.value === openedLink) ||
          { label: data.chapt || "", value: openedLink },
      );
    } catch (error) {
      console.error("Unable to open chapter:", error.message);
      setReaderError("This chapter is unavailable from its source.");
    } finally {
      setLoader(false);
    }
  };

  const handleClickBookmark = async (e, scan) => {
    e.preventDefault();
    e.stopPropagation();

    setBookmarkError("");
    const datas = {
      datas: { ...scan, isBookmarked: true, updatedAt: new Date() },
      type: "scans",
    };

    const result = isBookmarked
      ? await putApiDatas(`users/${user.id}`, datas)
      : await postApiDatas(`users/${user.id}`, datas);
    if (result.status === 200) setIsBookmarked(!isBookmarked);
    else {
      console.error("Unable to update bookmark:", result.err);
      setBookmarkError(result.err || "Unable to update bookmark.");
    }
  };

  const handleClickBookmarkModal = async () => {
    let newScan = { ...data };
    newScan.chapt = selectedChapter.label;
    newScan.link = currentLink;
    newScan.isBookmarked = true;
    newScan.updatedAt = new Date();
    const datas = { datas: newScan, type: "scans" };
    const result = await postApiDatas(`users/${user.id}`, datas);
    if (result.status === 200) {
      setIsBookmarked(true);
      setBookmarkError("");
      setData(newScan);
    } else {
      console.error("Unable to save bookmark:", result.err);
      setBookmarkError(result.err || "Unable to save bookmark.");
    }
  };

  const handleChangeOptions = async (selectedOpt) => {
    setLoader(true);
    const newLink = selectedOpt.value;
    setReaderError("");
    try {
      const reader = await getScanReader(newLink);
      setSelectedChapter(selectedOpt);
      setCurrentLink(newLink);
      setReader(reader.scans);
      setAccessDenied(false);
    } catch (error) {
      console.error("Unable to change chapter:", error.message);
      setReaderError("This chapter is unavailable from its source.");
    } finally {
      setLoader(false);
    }
  };

  const handleAccessDeniedImg = () => {
    setAccessDenied(true);
  };

  const style = cover ? { backgroundImage: `url("${cover}")` } : {};

  return (
    <>
      <Tilt
        className={
          props.isInProfile ? "tilt tilt-va card-profile" : "tilt tilt-va"
        }
      >
        <div ref={cardRef} className="card-scans-va" style={style} onClick={handleClick}>
          {user && (
            <i
              title="Click to bookmark"
              className={isBookmarked ? "fa fa-star" : "fa fa-star-o"}
              onClick={(e) => handleClickBookmark(e, data)}
            ></i>
          )}
          <a
            href={data.link}
            className="card-scans-va-content"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="date" title={metadataError ? "Unable to refresh the latest chapter." : undefined}>
              {props.isInProfile && data.chaptMax
                ? `${data.chapt} / ${data.chaptMax}`
                : data.chapt}
            </p>
            <h3>{data.title}</h3>
            <button>{data.lang}</button>
          </a>
        </div>
      </Tilt>
      {bookmarkError && <p role="alert">{bookmarkError}</p>}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <span className="close" onClick={() => setIsOpen(false)}>
            Close<i className="fa fa-remove"></i>
          </span>
          <div className="nav-modal">
            <div className="select-container">
              <Select
                value={selectedChapter}
                options={options}
                onChange={handleChangeOptions}
                classNamePrefix="custom-select"
              />
            </div>
            {user && (
              <button
                onClick={handleClickBookmarkModal}
                className="addBookmark"
                disabled={
                  isBookmarked &&
                  data.link === selectedChapter.value
                    ? true
                    : false
                }
              >
                <i
                  className={
                    isBookmarked &&
                    data.link === selectedChapter.value
                      ? "fa fa-star"
                      : "fa fa-star-o"
                  }
                ></i>
                <span>Add to Bookmark</span>
              </button>
            )}
          </div>
          {loader ? (
            <Loader />
          ) : readerError || accessDenied ? (
            <div>
              {readerError || "The chapter images could not be loaded."}{" "}
              <a href={currentLink} target="_blank" rel="noopener noreferrer">
                Open original link
              </a>
              {" · "}
              <a
                href={`https://manganato.xyz/search?q=${encodeURIComponent(data.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Search for this manga
              </a>
            </div>
          ) : (
            <div className="reader">
              {reader?.map((img, i) => (
                <LazyLoad key={i}>
                  <img src={img} alt="scans" onError={handleAccessDeniedImg} />
                </LazyLoad>
              ))}
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

CardScanVa.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardScanVa;
