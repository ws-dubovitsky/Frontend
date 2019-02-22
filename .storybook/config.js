import { configure } from '@storybook/react';

const loadStories = () => {
  const requireContext = require.context('../src', true, /\.stories\.jsx$/);
  requireContext.keys().forEach(filename => requireContext(filename));
};

configure(loadStories, module);
