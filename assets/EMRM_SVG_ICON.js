import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EMRM_SVG_ICON = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#38466C"
      strokeWidth={2}
      d="M1 5a4 4 0 0 1 4-4h6.923a4 4 0 0 1 4 4v14H5a4 4 0 0 1-4-4V5Z"
    />
    <Path
      stroke="#38466C"
      strokeWidth={2}
      d="M16.153 9.23h3.616a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3h-4.693"
    />
    <Path
      stroke="#38466C"
      strokeLinecap="round"
      strokeWidth={2}
      d="M4.846 4.383h6.461M4.846 8.23h6.461M4.846 12.078H8.23"
    />
  </Svg>
)
export default EMRM_SVG_ICON;
