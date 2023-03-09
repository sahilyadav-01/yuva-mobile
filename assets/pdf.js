import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Pdf = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18 0H6C4.9 0 4 .9 4 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 14H6V2h12v12ZM2 4H0v14c0 1.1.9 2 2 2h14v-2H2V4Zm12 6V7c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1Zm-2-3h1v3h-1V7Zm4 2h1V8h-1V7h1V6h-2v5h1V9ZM8 9h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7v5h1V9Zm0-2h1v1H8V7Z"
      fill="#44576A"
    />
  </Svg>
);

export default Pdf;
