import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DeleteItem = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.962}
      d="M3.972 4.633v2.886M5.896 4.633v2.886M1.086 2.709h7.697M2.048 2.709h5.773V8c0 .797-.646 1.443-1.444 1.443H3.491A1.443 1.443 0 0 1 2.048 8V2.709ZM3.491 1.747c0-.532.431-.962.962-.962h.963c.53 0 .962.43.962.962v.962H3.49v-.962Z"
    />
  </Svg>
);
export default DeleteItem;
