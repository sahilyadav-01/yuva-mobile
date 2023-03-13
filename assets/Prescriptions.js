import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Prescriptions = (props) => (
  <Svg
    width={15}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 .75H2c-.825 0-1.5.675-1.5 1.5v10.5H2V2.25h9V.75Zm-.75 3H5c-.825 0-1.493.675-1.493 1.5L3.5 15.75c0 .825.668 1.5 1.492 1.5h8.258c.825 0 1.5-.675 1.5-1.5v-7.5l-4.5-4.5ZM5 15.75V5.25h4.5V9h3.75v6.75H5Z"
      fill="#44576A"
    />
  </Svg>
)

export default Prescriptions