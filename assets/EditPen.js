import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EditPen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M18.414 2a.995.995 0 0 0-.707.293L16 4l4 4 1.707-1.707a.999.999 0 0 0 0-1.414l-2.586-2.586A.996.996 0 0 0 18.414 2zM14.5 5.5 3 17v4h4L18.5 9.5z"
      transform="scale(10.66667)"
      fill="#3f3f5e"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    />
  </Svg>
)

export default EditPen;
