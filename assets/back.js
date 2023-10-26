import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Back = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={6}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M.592 2.717a.4.4 0 0 0 0 .566l2.546 2.545a.4.4 0 0 0 .565-.565L1.441 3 3.703.737a.4.4 0 1 0-.565-.565L.592 2.717ZM13.125 2.6H.875v.8h12.25v-.8Z"
    />
  </Svg>
)
export default Back;