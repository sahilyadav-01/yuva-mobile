import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {MARINER} from '../src/styles/colors';

const ExpandArrow = props => (
  <Svg
    width={8}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform={[{rotate: props?.expanded ? '0deg' : '180deg'}]}
    {...props}>
    <Path d="M7.06 5 4 1.947.94 5 0 4.06l4-4 4 4-.94.94Z" fill={MARINER} />
  </Svg>
);

export default ExpandArrow;
