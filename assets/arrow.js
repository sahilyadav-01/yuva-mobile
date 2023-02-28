import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Arrow = props => (
  <Svg
    width={16}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M12.01 3H0v2h12.01v3L16 4l-3.99-4v3Z" fill="#fff" />
  </Svg>
);

export default Arrow;
