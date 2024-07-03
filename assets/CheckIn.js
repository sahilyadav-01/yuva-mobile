import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIn = props => (
  <Svg
    width={13}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.5 4.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2ZM3.8 7.9 1 22h2.1l1.8-8L7 16v6h2v-7.5l-2.1-2 .6-3C8.8 11 10.8 12 13 12v-2c-1.9 0-3.5-1-4.3-2.4L7.7 6a2.145 2.145 0 0 0-2.65-.84L0 7.3V12h2V8.6l1.8-.7Z"
      fill={props?.color ?? '#FFFFFF'}
    />
  </Svg>
);

export default CheckIn;
