import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CallSupport = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1C71E1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 11h-2.222a2.222 2.222 0 0 0-2.222 2.222v2.222a2.222 2.222 0 1 0 4.444 0V11Zm0 0c0-5.523-4.477-10-10-10S1 5.477 1 11m0 0v4.444a2.222 2.222 0 1 0 4.444 0v-2.222A2.222 2.222 0 0 0 3.222 11H1Z"
    />
    <Path
      stroke="#1C71E1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.222v4.445C21 19.889 20.26 21 18.778 21h-5.555"
    />
  </Svg>
)
export default CallSupport
