import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const LocationOn = props => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill="#1D2334">
      <Path d="M7 1.164a4.08 4.08 0 0 0-4.083 4.083C2.917 8.31 7 12.831 7 12.831s4.083-4.521 4.083-7.584A4.08 4.08 0 0 0 7 1.164ZM4.083 5.247a2.918 2.918 0 0 1 5.833 0c0 1.68-1.68 4.195-2.916 5.764C5.787 9.453 4.083 6.91 4.083 5.247Z" />
      <Path d="M7 6.706a1.458 1.458 0 1 0 0-2.917 1.458 1.458 0 0 0 0 2.917Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LocationOn;
