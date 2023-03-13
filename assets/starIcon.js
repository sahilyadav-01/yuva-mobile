import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StarIcon = (props) => (
  <Svg
    width={14}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m7 3.752.647 1.527.313.74.8.066 1.647.14-1.254 1.087-.606.527.18.786.373 1.607-1.413-.853L7 8.952l-.686.413-1.414.854.373-1.607.18-.787-.606-.526-1.254-1.087 1.647-.14.8-.067.314-.74L7 3.752Zm0-3.42-1.873 4.42-4.794.407 3.64 3.153-1.093 4.687L7 10.512l4.12 2.487-1.093-4.687 3.64-3.153-4.793-.407L7 .332Z"
      fill="#44576A"
    />
  </Svg>
)

export default StarIcon
