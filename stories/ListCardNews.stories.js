// src/components/Task.stories.js

import React from 'react';

import {List} from '../pages/news';
import IMG from '../public/img/homescreen.jpg';
import '../index.css';

export default {
  component: List,
  title: 'ListCardNews',
  excludeStories: /.*Data$/
};

export const listCardNewsData = () => {
    let datas = []
    for(let i = 1; i <= 10; i++) {
        const item = {
            title: `Card ${i}`,
            link: 'http://google.com',
            img: IMG,
            site: 'google',
            desc: 'lorem ipsum sit dolor commem',
            tag: 'tag 1',
            pubDate: new Date()
        }
        datas = [...datas, item]
    }
    return datas
}

export const Default = () =>
    <div className="News">
        <List datas={listCardNewsData()} hasMore={true}/>
    </div>

export const NoMoreDatas = () =>
    <div className="News">
        <List datas={listCardNewsData()} hasMore={false}/>
    </div>

export const EmptyDatas = () =>
    <div className="News">
        <List datas={[]}/>
    </div>