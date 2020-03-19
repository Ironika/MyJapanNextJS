import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import CardAnime from '../components/CardAnime';
import ListPaginate from '../components/ListPaginate';
import { CardAnimesSkeleton } from '../components/SkeletonItem';
import IMG from '../public/img/homescreen2.jpg';
import '../index.css';

export default {
  component: CardAnime,
  title: 'CardAnime',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Data = {
  title: 'Title - lorem ipsum sit dolor',
  link: 'http://google.com',
  img: IMG,
  site: 'google'
};

export const listData = () => {
  let datas = []
  for(let i = 1; i <= 10; i++) {
      const item = {
          title: `Title ${i} - lorem ipsum sit dolor`,
          link: 'http://google.com',
          img: IMG,
          site: 'google'
      }
      datas = [...datas, item]
  }
  return datas
}

export const Default = () => <CardAnime data={object('data', { ...Data })} />

export const Loading = () => <CardAnimesSkeleton />

export const List = () =>
    <div className="Animes">
        <ListPaginate datas={object('datas', [ ...listData() ])} type={'animes'} />
    </div>

export const ListEmptyDatas = () =>
    <div className="Animes">
        <ListPaginate datas={object('datas', [])} type={'animes'} />
    </div>