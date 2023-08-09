import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      fill="#38466C"
      d="M21.936 20.098h-1.13l-.4-.386a9.25 9.25 0 0 0 2.244-6.046 9.29 9.29 0 0 0-9.29-9.291 9.29 9.29 0 0 0-9.292 9.291 9.29 9.29 0 0 0 9.291 9.291 9.25 9.25 0 0 0 6.047-2.244l.386.4v1.13l7.147 7.132 2.13-2.13-7.133-7.147Zm-8.577 0a6.424 6.424 0 0 1-6.432-6.432 6.424 6.424 0 0 1 6.432-6.432 6.424 6.424 0 0 1 6.433 6.432 6.424 6.424 0 0 1-6.433 6.432Z"
    />
  </Svg>
)
export default SearchIcon