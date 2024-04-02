import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HeaderSearch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.5 2.8a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 9.3a8.5 8.5 0 1 1 15.17 5.27l4.536 4.523a1 1 0 1 1-1.412 1.416l-4.54-4.526A8.5 8.5 0 0 1 0 9.3Z"
      clipRule="evenodd"
      opacity={0.5}
    />
  </Svg>
)
export default HeaderSearch;
