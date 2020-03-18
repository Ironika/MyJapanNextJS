// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import CardAnime from '../components/CardAnime';
import {CardAnimesSkeleton} from '../components/SkeletonItem';
import IMG from '../public/img/homescreen2.jpg';
import '../index.css';

export default {
  component: CardAnime,
  title: 'CardAnime',
  excludeStories: /.*Data$/
};

export const cardAnimeData = {
  title: 'Card 1',
  link: 'http://google.com',
  img: IMG,
  site: 'google'
};

export const actionsData = {
  onClick: action('clicked'),
};

export const Default = () => <CardAnime data={{ ...cardAnimeData }} {...actionsData} />;
export const Loading = () => <CardAnimesSkeleton />;