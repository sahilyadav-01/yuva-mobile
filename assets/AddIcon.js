import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <Path fill="#D9D9D9" d="M4.5 0h2v11h-2z" />
    <Path fill="#D9D9D9" d="M0 6.5v-2h11v2z" />
  </Svg>
)
export default AddIcon;
