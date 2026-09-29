import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const HealthCheck = props => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path fill="url(#a)" d="M0 0h40v40H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.01111)" />
      </Pattern>
      <Image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default HealthCheck;
