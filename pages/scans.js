import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getApiDatas } from "../helpers";
import { ListPaginate, CardScan, CardScansSkeleton } from "../components";
import jsHttpCookie from "cookie";

export const List = (props) => {
  const itemToDisplay = 20;
  const [loader, setLoader] = useState(props.datas ? false : true);
  const [datas, setDatas] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchDatas = async () => {
      let _datas = props.datas;
      if (!props.datas) _datas = await getApiDatas("scans");
      setDatas(_datas.slice(0, itemToDisplay));
      setLoader(false);
    };
    fetchDatas();
  }, []);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const fakeArray = Array(itemToDisplay).fill(itemToDisplay);

  return (
    <>
      <h2 onClick={handleClickOpen}>
        {props.title}
        <i
          className={isOpen ? "fa fa-chevron-down" : "fa fa-chevron-right"}
        ></i>
      </h2>
      <div className={isOpen ? "card-container open" : "card-container"}>
        {loader ? (
          fakeArray.map((item, index) => <CardScansSkeleton key={index} />)
        ) : datas.length > 0 ? (
          datas.map((item, index) => <CardScan key={index} data={item} />)
        ) : (
          <div style={{ width: "100%", textAlign: "center" }}>
            No Scans Found
          </div>
        )}
      </div>
    </>
  );
};

const Scans = (props) => {
  return (
    <div className="Scans">
      <div className="container">
        <div className="left">
          <List datas={props.scans} title={"JapScans"} type={"scans"} />
        </div>
        <div className="right">
          <ListPaginate
            datas={props.scansVa}
            title={"MangaKakalot"}
            type={"scansva"}
            search={true}
          />
        </div>
      </div>
    </div>
  );
};

Scans.getInitialProps = async ({ req }) => {
  if (req) {
    const scans = await getApiDatas("scans");
    // const scansVa = await getApiDatas('scansva', 4)
    const cookiesJSON = jsHttpCookie.parse(req.headers.cookie);
    const _user = cookiesJSON.user ? JSON.parse(cookiesJSON.user) : null;
    const uid = _user ? _user.id : null;
    const scansVa = await getApiDatas("scansva", 1, null, uid);
    return { scans, scansVa };
  }
  return {};
};

Scans.propTypes = {
  scans: PropTypes.array,
  scansVa: PropTypes.array,
};

List.propTypes = {
  datas: PropTypes.array,
};

export default Scans;
