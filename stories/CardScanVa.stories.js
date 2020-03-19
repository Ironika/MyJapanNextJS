import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import CardScanVa from '../components/CardScanVa';
import ListPaginate from '../components/ListPaginate';
import { CardScansVaSkeleton } from '../components/SkeletonItem';
import IMG from '../public/img/homescreen3.jpg';
import '../index.css';

export default {
  component: CardScanVa,
  title: 'CardScanVa',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Data = {
  title: `Title - lorem ipsum sit dolor`,
  link: 'http://google.com',
  img: IMG,
  lang: 'va',
  pubDate: '2 hours ago'
};

export const listData = () => {
  let datas = []
  for (let i = 1; i <= 10; i++) {
    const item = {
      title: `Title ${i} - lorem ipsum sit dolo`,
      link: 'http://google.com',
      img: IMG,
      lang: 'va',
      pubDate: '2 hours ago'
    }
    datas = [...datas, item]
  }
  return datas
}

export const Default = () => <CardScanVa data={object('data', { ...Data })} />

export const Loading = () => <CardScansVaSkeleton />

export const List = () =>
  <div className="Scans">
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <ListPaginate title={object('title', 'Title - Lorem Ipsum')} datas={object('datas', [...listData()])} type={'scansva'} />
      </div>
    </div>
  </div>

export const ListEmptyDatas = () =>
  <div className="Scans">
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <ListPaginate datas={object('datas', [])} type={'scansva'} />
      </div>
    </div>
  </div>