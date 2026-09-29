import * as React from 'react';
import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';

const Gift = props => (
  <Svg
    width={98}
    height={73}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Rect x={2} y={2} width={94} height={69} rx={12} fill="#fff" />
    </G>
    <G clipPath="url(#b)">
      <Path
        d="M65 25h-4.36c.22-.62.36-1.3.36-2 0-3.32-2.68-6-6-6-2.1 0-3.92 1.08-5 2.7l-1 1.34-1-1.36c-1.08-1.6-2.9-2.68-5-2.68-3.32 0-6 2.68-6 6 0 .7.14 1.38.36 2H33c-2.22 0-3.98 1.78-3.98 4L29 51c0 2.22 1.78 4 4 4h32c2.22 0 4-1.78 4-4V29c0-2.22-1.78-4-4-4Zm-10-4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm22 30H33v-4h32v4Zm0-10H33V29h10.16L39 34.66 42.24 37 49 27.8l6.76 9.2L59 34.66 54.84 29H65v12Z"
        fill="#44576A"
      />
    </G>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" transform="translate(25 13)" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Gift;
