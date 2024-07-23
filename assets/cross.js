import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Cross = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15 15 3 3m12 0L3 15"
      stroke={props?.color ?? '#BE3E3E'}
      strokeWidth={4.402}
      strokeLinecap="round"
    />
  </Svg>
);

export default Cross;
