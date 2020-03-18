// src/components/Task.stories.js

import React from 'react';

import {List} from '../pages/dev';
import '../index.css';

export default {
  component: List,
  title: 'ListCardNewsDev',
  excludeStories: /.*Data$/
};

export const listCardNewsDevData = () => {
    let datas = []
    for(let i = 1; i <= 10; i++) {
        const item = {
            title: `Card ${i}`,
            link: 'http://google.com',
            site: 'google'
        }
        datas = [...datas, item]
    }
    return datas
}

export const Default = () =>
    <div className="NewsDev">
        <List datas={listCardNewsDevData()}/>
    </div>

export const EmptyDatas = () =>
    <div className="NewsDev">
        <List datas={[]}/>
    </div>