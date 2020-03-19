import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { List as ListCard, CardSite } from '../pages/index';
import '../index.css';

export default {
  component: CardSite,
  title: 'CardSite',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Data = {
  title: 'Site 1',
  type: 'news'
}

export const listData = () => {
  let datas = []
  for(let i = 0; i < 13; i++) {
      const item = {
          title: `Site ${i}`,
          type: 'news'
      }
      datas = [...datas, item]
  }
  return datas
}

export const Default = () =>
    <div className="Home">
      <div className="news">
        <div className="card-container">
          <CardSite data={object('data', { ...Data })}/>
        </div>
      </div>
    </div>

export const List = () =>
    <div className="Home">
        <ListCard title={object('title', 'Title - lorem ipsum sit dolor')} datas={object('datas', [ ...listData() ])}/>
    </div>