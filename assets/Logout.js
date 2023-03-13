import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Logout = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.75.25h-1.5v7.5h1.5V.25Zm3.623 1.627-1.066 1.065A5.19 5.19 0 0 1 12.25 7 5.246 5.246 0 0 1 7 12.25a5.246 5.246 0 0 1-3.315-9.315L2.627 1.877A6.7 6.7 0 0 0 .25 7a6.75 6.75 0 0 0 13.5 0 6.7 6.7 0 0 0-2.377-5.123Z"
      fill="#7180AD"
    />
  </Svg>
)

export default Logout;
