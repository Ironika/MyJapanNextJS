import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import CardScan from '../components/CardScan';
import { List as ListCard } from '../pages/scans';
import { CardScansSkeleton } from '../components/SkeletonItem';
import IMG from '../public/img/banner.jpg';
import '../index.css';

export default {
  component: CardScan,
  title: 'CardScan',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Data = {
    title: `Title - lorem ipsum sit dolor`,
    link: 'http://google.com',
    img: IMG,
    lang: 'vf',
    pubDate: new Date()
};

export const listData = () => {
  let datas = []
  for(let i = 1; i <= 10; i++) {
      const item = {
          title: `Title ${i} - lorem ipsum sit dolor`,
          link: 'http://google.com',
          img: IMG,
          lang: 'va',
          pubDate: new Date()
      }
      datas = [...datas, item]
  }
  return datas
}

export const Default = () => <CardScan data={object('data', { ...Data })} />

export const Loading = () => <CardScansSkeleton />

export const List = () =>
    <div className="Scans">
        <div className="container">
            <div className="left">
                <ListCard title={object('title', 'Lorem ipsum sit dolor')} datas={object('datas', [ ...listData() ])} />
            </div>
            <div className="right"></div>
        </div>
    </div>

export const EmptyDatas = () =>
    <div className="Scans">
        <div className="container">
            <div className="left">
                <ListCard title={object('title', 'Lorem ipsum sit dolor')} datas={object('datas', [])} />
            </div>
            <div className="right"></div>
        </div>
    </div>