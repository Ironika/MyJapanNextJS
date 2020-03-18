import React from 'react';
import { action } from '@storybook/addon-actions';

import Tags from '../components/Tags';
import {SkeletonItem} from '../components/SkeletonItem';

import '../index.css';

export default {
  component: Tags,
  title: 'Tags',
  excludeStories: /.*Data$/
};

export const TagsData = () => {
    let datas = [{value: 'All', active: true}]
    for(let i = 1; i <= 10; i++) {
        const item = {
            value: `tag${i}`,
            active: false
        }
        datas = [...datas, item]
    }
    return datas
}

export const TagsMultiData = () => {
  let datas = [{value: 'All', active: true}]
  for(let i = 1; i <= 10; i++) {
      const item = {
          value: `tag${i}`,
          active: i % 2 === 0 ? true : false
      }
      datas = [...datas, item]
  }
  return datas
}

export const actionsData = {
  onClick: action('clicked'),
};

export const Default = () => <Tags tags={TagsData()} {...actionsData} />
export const WithTags = () => <Tags tags={TagsMultiData()} {...actionsData} />
export const Loading = () => <SkeletonItem className="tag-skeleton" />