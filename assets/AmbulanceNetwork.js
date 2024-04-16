import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AmbulanceNetwork = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C71E1"
      d="M11.748 1.667H10.07V0h1.678v1.667Zm7.468 2.096-1.187-1.18-1.186 1.179 1.186 1.178 1.187-1.178Zm-14.24 0-1.187-1.18-1.187 1.18L3.79 4.94l1.186-1.178ZM19.3 18.332h2.517V20H0v-1.667h2.517v-7.5c0-4.602 3.824-8.333 8.392-8.333s8.392 3.73 8.392 8.333v7.5Zm-1.679-7.5c0-3.676-3.011-6.666-6.713-6.666-3.701 0-6.713 2.99-6.713 6.666v7.5h13.426v-7.5ZM1.678 10H0v1.667h1.678V10Zm18.462 0v1.667h1.678V10H20.14Zm-14.266.833v5.834h1.678v-5.834c0-1.84 1.503-3.333 3.357-3.333V5.833c-2.78 0-5.035 2.239-5.035 5Z"
    />
  </Svg>
)
export default AmbulanceNetwork;
