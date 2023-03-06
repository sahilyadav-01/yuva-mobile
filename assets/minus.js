import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Minus = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.667 6.332v1.333h6.667V6.332H3.667ZM7 .332A6.67 6.67 0 0 0 .333 6.999 6.67 6.67 0 0 0 7 13.665 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .332Zm0 12a5.34 5.34 0 0 1-5.333-5.333A5.34 5.34 0 0 1 7 1.665 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.332Z"
      fill={props?.color ?? "#D10000"}
    />
  </Svg>
)

export default Minus