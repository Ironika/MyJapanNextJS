// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import CardNewsDev from '../components/CardNewsDev';
import {CardNewsDevSkeleton} from '../components/SkeletonItem';
import '../index.css';

export default {
  component: CardNewsDev,
  title: 'CardNewsDev',
  excludeStories: /.*Data$/
};

export const cardNewsData = {
  title: 'Card 1',
  link: 'http://google.com',
  site: 'google'
};

export const actionsData = {
  onClick: action('clicked'),
};

export const Default = () =>
    <div className="NewsDev">
        <section className="timeline">
            <ul>
                <CardNewsDev data={{ ...cardNewsData }} {...actionsData} />
            </ul>
        </section>
    </div>

export const Loading = () =>
    <div className="NewsDev">
        <section className="timeline">
            <ul>
                <CardNewsDevSkeleton />
            </ul>
        </section>
    </div>