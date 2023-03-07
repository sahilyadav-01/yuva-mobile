import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddButton = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm5 11h-4v4H9v-4H5V9h4V5h2v4h4v2Z"
      fill="#fff"
    />
  </Svg>
);

export default AddButton;
