// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Footer from '../components/Footer';
import '../index.css';

export default {
  component: Footer,
  title: 'Footer',
  excludeStories: /.*Data$/
};

export const Default = () => <Footer />