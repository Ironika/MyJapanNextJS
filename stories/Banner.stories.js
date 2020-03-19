import React from 'react';
import Banner from '../components/Banner';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax'

export default {
  component: Banner,
  title: 'Banner',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Default = () =>
    <ParallaxProvider>
        <Banner title={object('title', 'lorem ipsum sit dolor')}/>
    </ParallaxProvider>