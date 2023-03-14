import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Check = (props) => (
  <Svg
    width={19}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m2 7.625 5.625 5.625L17 2"
      stroke="#73D38B"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Check;
