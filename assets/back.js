import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Back = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M13.333 7.334H5.22l3.727-3.727L8 2.667 2.667 8 8 13.334l.94-.94-3.72-3.727h8.113V7.334Z"
        fill="#44576A"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#44576A" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Back
