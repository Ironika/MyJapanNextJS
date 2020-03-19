import React from 'react';
import Loader from '../components/Loader';
import '../index.css';

export default {
  component: Loader,
  title: 'Loader',
  excludeStories: /.*Data$/
};

export const Default = () => <Loader />;