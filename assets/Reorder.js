import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Reorder(props) {
  return (
    <Svg
      width={14}
      height={12}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.333 6c0-.733-.6-1.333-1.333-1.333S6.667 5.267 6.667 6 7.267 7.333 8 7.333 9.333 6.733 9.333 6zM8 0a6 6 0 00-6 6H0l2.667 2.667L5.333 6h-2A4.663 4.663 0 018 1.333 4.663 4.663 0 0112.667 6a4.663 4.663 0 01-7.374 3.8l-.946.96A6 6 0 108 0z"
        fill="#44576A"
      />
    </Svg>
  )
}

export default Reorder;
