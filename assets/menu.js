import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const MenuIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" fill="#44576A" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MenuIcon;
