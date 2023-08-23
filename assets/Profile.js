import React from "react"
import Svg, { Path } from "react-native-svg"
const Profile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="#38466C"
      strokeLinejoin="round"
      d="M1 14.417a4.167 4.167 0 0 1 4.167-4.167H13.5a4.167 4.167 0 0 1 4.167 4.167 2.083 2.083 0 0 1-2.084 2.083h-12.5A2.083 2.083 0 0 1 1 14.417Z"
    />
    <Path
      stroke="#38466C"
      d="M9.334 7.25a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
    />
  </Svg>
)
export default Profile;
