import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddNewAdress = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.667 3.665H6.334v2.667H3.667v1.333h2.667v2.667h1.333V7.665h2.667V6.332H7.667V3.665ZM7 .332A6.67 6.67 0 0 0 .333 6.999 6.67 6.67 0 0 0 7 13.665 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .332Zm0 12a5.34 5.34 0 0 1-5.333-5.333A5.34 5.34 0 0 1 7 1.665 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.332Z"
      fill="#44576A"
    />
  </Svg>
)

export default AddNewAdress;
