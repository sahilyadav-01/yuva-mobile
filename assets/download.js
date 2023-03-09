import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Download = props => (
  <Svg
    width={10}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.667 4H7V0H3v4H.333L5 8.667 9.667 4ZM.333 10v1.333h9.334V10H.333Z"
      fill="#44576A"
    />
  </Svg>
);

export default Download;
