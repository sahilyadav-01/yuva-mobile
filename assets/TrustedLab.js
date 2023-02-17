import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TrustedLab = props => (
  <Svg
    width={48}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M24 .668 0 11.335v16c0 14.8 10.24 28.64 24 32 13.76-3.36 24-17.2 24-32v-16L24 .668Zm18.667 26.667c0 12.053-7.947 23.173-18.667 26.48-10.72-3.307-18.667-14.427-18.667-26.48V14.8L24 6.508l18.667 8.293v12.534ZM11.76 28.908 8 32.668l10.667 10.667L40 22l-3.76-3.786-17.573 17.573-6.907-6.88Z"
      fill="#44576A"
    />
  </Svg>
);

export default TrustedLab;
