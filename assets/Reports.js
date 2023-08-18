import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Reports = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#38466C"
      d="M7.813 14.063h6.25v1.562h-6.25v-1.563Zm0-3.907h9.375v1.563H7.813v-1.563Zm0 7.813h3.906v1.562H7.813V17.97Z"
    />
    <Path
      fill="#38466C"
      d="M19.531 3.906h-2.343v-.781a1.563 1.563 0 0 0-1.563-1.563h-6.25a1.562 1.562 0 0 0-1.563 1.563v.781H5.47A1.562 1.562 0 0 0 3.906 5.47v16.406a1.563 1.563 0 0 0 1.563 1.563H19.53a1.562 1.562 0 0 0 1.563-1.563V5.469a1.563 1.563 0 0 0-1.563-1.563ZM9.375 3.125h6.25V6.25h-6.25V3.125Zm10.156 18.75H5.47V5.469h2.343v2.343h9.375V5.47h2.344v16.406Z"
    />
  </Svg>
)
export default Reports;
