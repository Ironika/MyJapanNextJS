import React from 'react';
import Footer from '../components/Footer';
import '../index.css';

export default {
  component: Footer,
  title: 'Footer',
  excludeStories: /.*Data$/
};

export const Default = () => <Footer />