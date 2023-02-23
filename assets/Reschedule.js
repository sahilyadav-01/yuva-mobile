import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Reschedule = props => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.994.336a6.663 6.663 0 0 0-6.66 6.667c0 3.68 2.98 6.666 6.66 6.666a6.67 6.67 0 0 0 6.673-6.666A6.67 6.67 0 0 0 6.994.336Zm.006 12a5.332 5.332 0 0 1-5.333-5.333A5.332 5.332 0 0 1 7 1.669a5.332 5.332 0 0 1 5.334 5.334A5.332 5.332 0 0 1 7 12.336Zm.333-8.667h-1v4l3.5 2.1.5-.82-3-1.78v-3.5Z"
      fill="#44576A"
    />
  </Svg>
);

export default Reschedule;
