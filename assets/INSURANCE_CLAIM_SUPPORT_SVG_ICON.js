import * as React from "react"
import Svg, { Path } from "react-native-svg"
const INSURANCE_CLAIM_SUPPORT_SVG_ICON = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#38466C"
      d="M14.956 3.15 8.02.068a.77.77 0 0 0-.632 0L.455 3.15A.77.77 0 0 0 0 3.85v6.596a6.696 6.696 0 0 0 2.242 4.962l4.955 4.4a.77.77 0 0 0 1.017 0l4.954-4.4a6.696 6.696 0 0 0 2.242-4.962V3.85a.77.77 0 0 0-.454-.701Zm-1.087 7.297a5.139 5.139 0 0 1-1.726 3.852l-4.438 3.93-4.438-3.945a5.14 5.14 0 0 1-1.726-3.853v-6.08L7.705 1.61l6.164 2.743v6.095Z"
    />
    <Path
      fill="#38466C"
      d="M5.393 8.698a.774.774 0 0 0-1.094 1.095l1.926 1.926a.77.77 0 0 0 1.094 0l3.853-3.853a.796.796 0 0 0-1.156-1.094l-3.305 3.313-1.318-1.387Z"
    />
  </Svg>
)
export default INSURANCE_CLAIM_SUPPORT_SVG_ICON;
