import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Subscriptions = (props) => (
  <Svg
    width={16}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.405 6.252 8.75 3.597l1.057-1.058 1.59 1.59 3.18-3.18 1.058 1.058-4.23 4.245Zm-4.155-3H.5v1.5h6.75v-1.5Zm7.5 4.807-1.057-1.057-1.943 1.942-1.943-1.942L8.75 8.059l1.943 1.943-1.943 1.942 1.057 1.058 1.943-1.943 1.943 1.943 1.057-1.058-1.943-1.942 1.943-1.943Zm-7.5 1.193H.5v1.5h6.75v-1.5Z"
      fill="#7180AD"
    />
  </Svg>
)

export default Subscriptions;