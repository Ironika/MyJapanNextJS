// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import {List} from '../pages/scans';
import IMG from '../public/img/banner.jpg';
import '../index.css';

export default {
  component: List,
  title: 'ListScan',
  excludeStories: /.*Data$/
};

export const listScanData = () => {
    let datas = []
    for(let i = 1; i <= 10; i++) {
        const item = {
            title: `Card ${i}`,
            link: 'http://google.com',
            img: IMG,
            lang: 'va',
            pubDate: new Date()
        }
        datas = [...datas, item]
    }
    return datas
}

export const Default = () =>
    <div className="Scans">
        <div className="container">
            <div className="left">
                <List datas={listScanData()} title={'Webtoons or VF'} />
            </div>
            <div className="right">

            </div>
        </div>
    </div>

export const EmptyDatas = () =>
    <div className="Scans">
        <div className="container">
            <div className="left">
                <List datas={[]} title={'Webtoons or VF'} />
            </div>
            <div className="right">

            </div>
        </div>
    </div>