import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SearchNetworkLocationIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G fill="#AD343E" clipPath="url(#a)">
      <Path d="M9 1.5a5.246 5.246 0 0 0-5.25 5.25C3.75 10.688 9 16.5 9 16.5s5.25-5.813 5.25-9.75A5.246 5.246 0 0 0 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3c2.07 0 3.75 1.68 3.75 3.75 0 2.16-2.16 5.393-3.75 7.41-1.56-2.002-3.75-5.273-3.75-7.41Z" />
      <Path d="M9 8.625a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SearchNetworkLocationIcon