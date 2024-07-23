import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11 5H9v4H5v2h4v4h2v-4h4V9h-4V5Zm-1-5C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
      fill={props?.color ?? '#fff'}
    />
  </Svg>
);

export default PlusIcon;
