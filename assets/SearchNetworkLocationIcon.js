import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchNetworkLocationIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1C71E1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.944 24c4.473-4.6 8.945-8.719 8.945-13.8 0-5.081-4.005-9.2-8.945-9.2S1 5.119 1 10.2c0 5.081 4.472 9.2 8.944 13.8Z"
    />
    <Path
      stroke="#1C71E1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.944 12.5a2.555 2.555 0 1 0 0-5.11 2.555 2.555 0 0 0 0 5.11Z"
    />
  </Svg>
)
export default SearchNetworkLocationIcon;
