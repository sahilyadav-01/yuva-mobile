import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EditIcon = (props) => (
  <Svg
    width={13}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m7.373 4.013.614.614-6.04 6.04h-.614v-.614l6.04-6.04ZM9.773 0a.667.667 0 0 0-.466.193l-1.22 1.22 2.5 2.5 1.22-1.22c.26-.26.26-.68 0-.94l-1.56-1.56A.655.655 0 0 0 9.773 0Zm-2.4 2.127L0 9.5V12h2.5l7.373-7.373-2.5-2.5Z"
      fill={props.color}
    />
  </Svg>
)

export default EditIcon