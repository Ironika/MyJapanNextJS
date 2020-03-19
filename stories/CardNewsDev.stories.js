import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import CardNewsDev from '../components/CardNewsDev';
import NewsDev, { List as ListCard } from '../pages/dev';
import { CardNewsDevSkeleton } from '../components/SkeletonItem';
import '../index.css';

export default {
  component: CardNewsDev,
  title: 'CardNewsDev',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Data = {
  title: 'Title - lorem ipsum sit dolor',
  link: 'http://google.com',
  site: 'google'
};

export const listData = () => {
    let datas = []
    for(let i = 0; i < 20; i++) {
        const item = {
            title: `Title ${i} - lorem ipsum sit dolor`,
            link: i % 2 === 0 ? 'http://google.com' : 'http://firefox.com',
            site: i % 2 === 0 ? 'google' : 'firefox'
        }
        datas = [...datas, item]
    }
    return datas
}

export const Default = () =>
    <div className="NewsDev">
        <section className="timeline">
            <ul>
                <CardNewsDev data={object('data', { ...Data })} />
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

export const List = () =>
    <div className="NewsDev">
        <ListCard datas={object('datas', [ ...listData() ])}/>
    </div>

export const ListFilteredByTags = () => <NewsDev newsDev={object('newsDev', [ ...listData() ])} />

export const EmptyDatas = () =>
    <div className="NewsDev">
        <ListCard datas={object('datas', [])}/>
    </div>