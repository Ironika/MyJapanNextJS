// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import CardNews from '../components/CardNews';
import {CardNewsSkeleton} from '../components/SkeletonItem';
import IMG from '../public/img/homescreen.jpg';
import '../index.css';

export default {
  component: CardNews,
  title: 'CardNews',
  excludeStories: /.*Data$/
};

export const cardNewsData = {
  title: 'Card 1',
  link: 'http://google.com',
  img: IMG,
  site: 'google',
  desc: 'lorem ipsum sit dolor commem',
  tag: 'tag 1',
  pubDate: new Date()
};

export const actionsData = {
  onClick: action('clicked'),
};

export const Default = () => <CardNews data={{ ...cardNewsData }} {...actionsData} />;
export const Loading = () => <CardNewsSkeleton />;