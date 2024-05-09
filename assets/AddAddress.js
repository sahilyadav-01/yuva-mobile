import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddAddress = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.074}
      d="M8.399 6.834h-1.79m0 0H4.82m1.79 0v-1.79m0 1.79v1.79m2.983 3.58H3.626A2.386 2.386 0 0 1 1.24 9.816V3.85a2.386 2.386 0 0 1 2.386-2.386h5.966a2.386 2.386 0 0 1 2.386 2.386v5.966a2.386 2.386 0 0 1-2.386 2.386Z"
    />
  </Svg>
)
export default AddAddress
