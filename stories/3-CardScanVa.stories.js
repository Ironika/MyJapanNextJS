// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import CardScanVa from '../components/CardScanVa';
import {CardScansVaSkeleton} from '../components/SkeletonItem';
import IMG from '../public/img/homescreen3.jpg';
import '../index.css';

export default {
  component: CardScanVa,
  title: 'CardScanVa',
  excludeStories: /.*Data$/
};

export const cardScanVaData = {
    title: `Card 1`,
    link: 'http://google.com',
    img: IMG,
    lang: 'va',
    pubDate: '2 hours ago'
};

export const actionsData = {
  onClick: action('clicked'),
};

export const Default = () => <CardScanVa data={{ ...cardScanVaData }} {...actionsData} />;
export const Loading = () => <CardScansVaSkeleton />;