import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const Scientist = props => (
  <Svg
    width={44}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path fill="url(#a)" d="M0 0h44v47H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="matrix(.01068 0 0 .01 -.034 0)" />
      </Pattern>
      <Image
        id="b"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default Scientist;
