import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProductAdd = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      stroke="#292526"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M6.667 12.933h12.8M13.066 19.333v-12.8"
    />
  </Svg>
)
export default ProductAdd;
