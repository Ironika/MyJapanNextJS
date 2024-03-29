import React from "react";
import Link from "next/link.js";
import { Text } from "../components";
import { ParallaxBanner } from "react-scroll-parallax";

import banner from "../public/img/banner.jpg";
import homescreen from "../public/img/homescreen.jpg";
import homescreen2 from "../public/img/homescreen2.jpg";
import homescreen3 from "../public/img/homescreen3.jpg";

const scrappedSites = [
  { title: "MangaKakalot", type: "scans" },
  { title: "Scantrad", type: "scans" },
  { title: "Vostfree", type: "animes" },
];

export const CardSite = (props) => {
  return (
    <Link href={`/${props.data.type}?tag=${props.data.title}`}>
      <a className="card-news-home">
        <img src={banner} alt={props.data.title} />
        <div className="card-news-home-content">
          <span>{props.data.title}</span>
        </div>
      </a>
    </Link>
  );
};

export const List = (props) => {
  return (
    <div className="news">
      <h2>{props.title}</h2>
      <div className="card-container">
        {props.datas.map((data, index) => (
          <CardSite key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

const Index = (props) => {
  const layers1 = [{ image: homescreen2, amount: 0.5 }];
  const layers2 = [{ image: homescreen3, amount: 0.5 }];
  const layers3 = [{ image: homescreen, amount: 0.5 }];
  const dataText = {
    title: "Welcome",
    content:
      "I will share with you through this site, various news, photos, musics, mangas or animes.<br />In addition, this site will allow me to experiment some web technologies.<br />I hope that the experience will please you, and wish you a pleasant visit.<br />You can <a href='mailto:kevin.hoquet@gmail.com?subject=CONTACT IronikaSpace'>contact me</a> if you need.",
    citationJap: "猿も木から落ちる",
    citationTrad: "Even the monkey falls from the tree",
  };

  const dataText2 = {
    title: "My Bad !",
    content:
      "Some pages may be long to load during the visit.<br />IronikaSpace is a datas scrapper, so it get datas on other websites and lists them, the process can be long.<br />This website is Serverless and work with a React & NextJs",
    citationJap: "堪忍は一生の宝",
    citationTrad: "Patience is a treasure of life",
  };

  return (
    <div className="Home">
      <Text data={dataText} />
      <ParallaxBanner className="homescreen" layers={layers1}></ParallaxBanner>
      <Text data={dataText2} />
      <ParallaxBanner className="homescreen" layers={layers2}></ParallaxBanner>
      <List datas={scrappedSites} title={"Scrapped sites"} />
      <ParallaxBanner className="homescreen" layers={layers3}></ParallaxBanner>
    </div>
  );
};

export default Index;
