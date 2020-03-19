import React from 'react';
import Header from '../components/Header';
import '../index.css';

export default {
  component: Header,
  title: 'Header',
  excludeStories: /.*Data$/
};

export const Default = () => <div style={{height: '1000px'}}><Header /></div>