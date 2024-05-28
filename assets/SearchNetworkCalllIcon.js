import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { MARINER } from "../src/styles/colors"
const SearchNetworkCalllIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={MARINER}
        d="M4.905 3.75c.045.668.157 1.32.337 1.942l-.9.9a11.12 11.12 0 0 1-.57-2.842h1.133Zm7.395 9.015c.637.18 1.29.292 1.95.337v1.118a11.57 11.57 0 0 1-2.85-.563l.9-.892ZM5.625 2.25H3a.752.752 0 0 0-.75.75c0 7.043 5.707 12.75 12.75 12.75.412 0 .75-.338.75-.75v-2.617a.752.752 0 0 0-.75-.75c-.93 0-1.838-.15-2.678-.428a.768.768 0 0 0-.765.18l-1.65 1.65a11.361 11.361 0 0 1-4.942-4.943l1.65-1.65c.21-.21.27-.502.188-.764A8.52 8.52 0 0 1 6.375 3a.752.752 0 0 0-.75-.75Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SearchNetworkCalllIcon