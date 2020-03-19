import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import CardNews from '../components/CardNews';
import News, { List as ListCard } from '../pages/news';
import { CardNewsSkeleton } from '../components/SkeletonItem';
import IMG from '../public/img/homescreen.jpg';
import '../index.css';

export default {
  component: CardNews,
  title: 'CardNews',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Data = {
  title: 'Title - lorem ipsum sit dolor',
  link: 'http://google.com',
  img: IMG,
  site: 'google',
  desc: 'lorem ipsum sit dolor commemLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi felis, porttitor et risus eu, ultrices consequat nulla. Nam semper dictum molestie. Nulla et odio at lacus vestibulum luctus. Donec venenatis quam non lorem gravida commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  tag: 'Tag - lorem',
  pubDate: new Date()
};

export const listData = () => {
  let datas = []
  for(let i = 1; i <= 20; i++) {
      const item = {
          title: `Title ${i} - lorem ipsum sit dolor`,
          link: i % 2 === 0 ? 'http://google.com': 'http://firefox.com',
          img: IMG,
          site: i % 2 === 0 ? 'google' : 'firefox',
          desc: 'lorem ipsum sit dolor commemLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi felis, porttitor et risus eu, ultrices consequat nulla. Nam semper dictum molestie. Nulla et odio at lacus vestibulum luctus. Donec venenatis quam non lorem gravida commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          tag: 'Tag - lorem',
          pubDate: new Date()
      }
      datas = [...datas, item]
  }
  return datas
}

export const Default = () => <CardNews data={object('data', { ...Data })} />

export const Loading = () => <CardNewsSkeleton />

export const List = () =>
    <div className="News">
        <ListCard hasMore={object('hasMore', true)} datas={object('data', [ ...listData() ])}/>
    </div>

export const ListFilteredByTags = () => <News news={object('news', [ ...listData() ])} />

export const EmptyDatas = () =>
    <div className="News">
        <List datas={object('data', [])}/>
    </div>