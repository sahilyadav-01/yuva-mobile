import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PharmacyIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={42}
    fill="none"
    viewBox="0 0 24 26"
    {...props}
  >
    <Path
      fill="#E68D36"
      fillRule="evenodd"
      d="M17.333 17.333H24V6.667h-6.667V0H6.667v6.667H0v10.666h6.667V24h10.666v-6.667ZM16 22.667V16h6.667V8H16V1.333H8V8H1.333v8H8v6.667h8Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PharmacyIcon