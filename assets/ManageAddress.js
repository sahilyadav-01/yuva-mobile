import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const ManageAddress = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G fill="#38466C" clipPath="url(#a)">
      <Path d="M23.41 12.007 12.991 1.591a.694.694 0 0 0-.979 0L1.597 12.007a.694.694 0 0 0 .979.98l9.923-9.924 9.924 9.93a.694.694 0 0 0 .98-.979l.006-.007Z" />
      <Path d="M19.444 22.223h-3.472v-6.945H9.027v6.945H5.555V12.5L4.166 13.89v8.333a1.389 1.389 0 0 0 1.389 1.389h4.861v-6.945h4.167v6.945h4.86a1.39 1.39 0 0 0 1.39-1.39v-8.5l-1.39-1.388v9.889Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ManageAddress
