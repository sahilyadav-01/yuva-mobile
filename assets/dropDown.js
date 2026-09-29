import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const dropDown = props => (
  <Svg
    width={12}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M1.41.59 6 5.17 10.59.59 12 2 6 8 0 2 1.41.59Z" fill="#fff" />
  </Svg>
);

export default dropDown;
