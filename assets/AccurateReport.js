import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const AccurateReport = props => (
  <Svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill="#44576A">
      <Path d="M40 24H24a2.674 2.674 0 0 0-2.667 2.667v32c0 1.466 1.2 2.666 2.667 2.666h16c1.467 0 2.667-1.2 2.667-2.666v-32C42.667 25.2 41.467 24 40 24Zm-2.667 32H26.667V29.333h10.666V56Z" />
      <Path d="M32 37.333A2.667 2.667 0 1 0 32 32a2.667 2.667 0 0 0 0 5.333ZM18.8 16.133l3.76 3.76a13.391 13.391 0 0 1 18.88 0l3.76-3.76A18.603 18.603 0 0 0 32 10.667c-5.147 0-9.813 2.08-13.2 5.466ZM32 0c-8.107 0-15.44 3.28-20.747 8.587l3.76 3.76C19.36 8.027 25.36 5.333 32 5.333c6.64 0 12.64 2.694 16.96 7.04l3.76-3.76C47.44 3.28 40.107 0 32 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h64v64H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AccurateReport;
