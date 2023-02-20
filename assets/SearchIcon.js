import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M11.625 10.5h-.592l-.21-.203A4.853 4.853 0 0 0 12 7.125 4.875 4.875 0 1 0 7.125 12a4.853 4.853 0 0 0 3.172-1.178l.203.21v.593l3.75 3.742 1.117-1.117-3.742-3.75Zm-4.5 0A3.37 3.37 0 0 1 3.75 7.125 3.37 3.37 0 0 1 7.125 3.75 3.37 3.37 0 0 1 10.5 7.125 3.37 3.37 0 0 1 7.125 10.5Z"
        fill="#80450C"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SearchIcon;
