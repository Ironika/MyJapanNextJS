import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import Tags, { Tag } from '../components/Tags';
import { SkeletonItem } from '../components/SkeletonItem';
import '../index.css';

export default {
  component: Tags,
  title: 'Tags',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Data = {
    active: false,
    value: 'Tag'
}

export const TagsData = () => {
    let datas = [{value: 'All', active: true}]
    for(let i = 1; i <= 6; i++) {
        const item = {
            value: `lorem ${i}`,
            active: false
        }
        datas = [...datas, item]
    }
    return datas
}

export const actionsData = {
    setActive: action('clicked'),
  };

export const Default = () => <div className="tag-container"><Tag data={object('data', { ...Data })} {...actionsData} /></div>

export const List = () => <Tags tags={object('tags', [ ...TagsData() ])} />

export const Loading = () => <SkeletonItem className="tag-skeleton" />