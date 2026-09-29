import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Logout = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11 21C5.477 21 1 16.523 1 11S5.477 1 11 1"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 11H21m0 0-3.75-3.75M21 11l-3.75 3.75"
    />
  </Svg>
);
export default Logout;
