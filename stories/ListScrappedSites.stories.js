import React from 'react';

import {List} from '../pages/index';
import '../index.css';

export default {
  component: List,
  title: 'ListScrappedSites',
  excludeStories: /.*Data$/
};

export const Default = () =>
    <div className="Home">
        <List />
    </div>