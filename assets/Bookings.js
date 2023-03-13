import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Bookings = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 3.5H.5V14c0 .825.675 1.5 1.5 1.5h10.5V14H2V3.5Zm12-3H5c-.825 0-1.5.675-1.5 1.5v9c0 .825.675 1.5 1.5 1.5h9c.825 0 1.5-.675 1.5-1.5V2c0-.825-.675-1.5-1.5-1.5ZM14 11H5V2h9v9ZM6.5 5.75h6v1.5h-6v-1.5ZM6.5 8h3v1.5h-3V8Zm0-4.5h6V5h-6V3.5Z"
      fill="#44576A"
    />
  </Svg>
)

export default Bookings