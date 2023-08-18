import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const CorporateProgram = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#38466C"
        strokeWidth={2}
        d="M18.75 4.167V0M7.29 18.75H5.208m14.583 0H9.374m-2.083-4.167H5.208m14.583 0H9.374M6.25 4.167V0M1.041 9.375h22.917M1.04 23.958h22.917V4.167H1.04v19.791Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CorporateProgram;
