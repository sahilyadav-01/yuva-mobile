import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CorporateProgram = (props) => (
  <Svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill="#44576A"
      d="M14 .5H2C1.167.5.5 1.167.5 2v8.25c0 .832.667 1.5 1.5 1.5h3v3.75L8 14l3 1.5v-3.75h3c.832 0 1.5-.668 1.5-1.5V2c0-.833-.668-1.5-1.5-1.5Zm0 9.75H2v-1.5h12v1.5Zm0-3.75H2V2h12v4.5Z"
    />
  </Svg>
)
export default CorporateProgram