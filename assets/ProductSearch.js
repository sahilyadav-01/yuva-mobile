import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const ProductSearch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Circle
      cx={10.625}
      cy={10.937}
      r={8.019}
      stroke="#878787"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
    />
    <Path
      stroke="#878787"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
      d="m16.202 16.93 3.144 3.136"
    />
  </Svg>
)
export default ProductSearch;
