import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Bookings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#38466C"
      d="M11.707 2.293A.996.996 0 0 0 11 2H6a.996.996 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.998.998 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414l-10-10ZM8.353 10a1.647 1.647 0 1 1-.082-3.292A1.647 1.647 0 0 1 8.353 10Z"
    />
  </Svg>
)
export default Bookings;
