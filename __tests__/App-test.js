/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', async () => {
  let tree;
  await renderer.act(async () => {
    tree = renderer.create(<App />);
    await Promise.resolve();
  });
  await renderer.act(async () => {
    tree.unmount();
  });
});
