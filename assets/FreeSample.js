import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const FreeSample = props => (
  <Svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill="#44576A">
      <Path d="M45.333 40.001h5.334v5.334h-5.334V40Zm0-10.666h5.334v5.333h-5.334v-5.333Zm0-10.667h5.334v5.333h-5.334v-5.333Zm-8.693 0 3.36 2.24v-2.24h-3.36Z" />
      <Path d="M26.667 8v4.027L32 15.573v-2.24h24v37.334H45.333V56h16V8H26.667Z" />
      <Path d="M21.787 15.2 40 27.332v28.666H2.667V27.946l19.12-12.747Zm4.88 35.466h8V29.759l-12.88-8.186L8 30.346v20.32h8v-16h10.667v16Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h64v64H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FreeSample;
