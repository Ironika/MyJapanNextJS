// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from '../components/Header';
import '../index.css';

export default {
  component: Header,
  title: 'Header',
  excludeStories: /.*Data$/
};

export const Default = () => <div style={{height: '1000px'}}><Header /></div>