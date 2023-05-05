import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Calender = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill={props?.color ?? "#1882EB"}
      d="M18 2h-1V0h-2v2H5V0H3v2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 18H2V9h16v11Zm0-13H2V4h16v3Z"
    />
  </Svg>
)
export default Calender;
