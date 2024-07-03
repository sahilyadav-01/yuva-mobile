import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C71E1"
      d="M9.238.327a1.113 1.113 0 0 0-1.576 0L.26 7.728a.887.887 0 0 0 0 1.256l7.402 7.401c.436.436 1.14.436 1.576 0a1.113 1.113 0 0 0 0-1.576L2.79 8.352l6.457-6.457A1.11 1.11 0 0 0 9.238.327Z"
    />
  </Svg>
)
export default BackButton;
