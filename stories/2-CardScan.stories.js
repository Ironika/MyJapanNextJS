// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import CardScan from '../components/CardScan';
import {CardScansSkeleton} from '../components/SkeletonItem';
import IMG from '../public/img/banner.jpg';
import '../index.css';

export default {
  component: CardScan,
  title: 'CardScan',
  excludeStories: /.*Data$/
};

export const cardScanData = {
    title: `Card 1`,
    link: 'http://google.com',
    img: IMG,
    lang: 'vf',
    pubDate: new Date()
};

export const actionsData = {
  onClick: action('clicked'),
};

export const Default = () => <CardScan data={{ ...cardScanData }} {...actionsData} />;
export const Loading = () => <CardScansSkeleton />;