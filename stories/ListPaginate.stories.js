// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import ListPaginate from '../components/ListPaginate';
import IMG from '../public/img/homescreen2.jpg';
import IMG2 from '../public/img/homescreen3.jpg';
import '../index.css';

export default {
  component: ListPaginate,
  title: 'ListPaginate',
  excludeStories: /.*Data$/
};

export const listPaginateAnimesData = () => {
    let datas = []
    for(let i = 1; i <= 10; i++) {
        const item = {
            title: `Card ${i}`,
            link: 'http://google.com',
            img: IMG,
            site: 'google'
        }
        datas = [...datas, item]
    }
    return datas
}

export const listPaginateScansData = () => {
    let datas = []
    for(let i = 1; i <= 10; i++) {
        const item = {
            title: `Card ${i}`,
            link: 'http://google.com',
            img: IMG2,
            lang: 'va',
            pubDate: '2 hours ago'
        }
        datas = [...datas, item]
    }
    return datas
}

export const Animes = () =>
    <div className="Animes">
        <ListPaginate datas={listPaginateAnimesData()} type={'animes'} />
    </div>

export const ScansVa = () =>
    <div className="Scans">
        <div className="container">
            <div className="left">

            </div>
            <div className="right">
                <ListPaginate datas={listPaginateScansData()} type={'scansva'} title={'MangaFox'}/>
            </div>
        </div>
    </div>

export const EmptyDatas = () =>
    <div className="Animes">
        <ListPaginate datas={[]} type={'animes'} />
    </div>