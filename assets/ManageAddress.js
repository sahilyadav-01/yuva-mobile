import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ManageAddress = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.737 18.807v-7.383a4.386 4.386 0 0 0-1.365-3.18l-6.993-6.64a2.193 2.193 0 0 0-3.02 0l-6.994 6.64A4.386 4.386 0 0 0 1 11.425v7.383A2.193 2.193 0 0 0 3.193 21h15.35a2.193 2.193 0 0 0 2.194-2.193Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.578 14.42a2.193 2.193 0 0 1 2.193-2.193h2.193a2.193 2.193 0 0 1 2.193 2.192V21H7.578v-6.58Z"
    />
  </Svg>
)
export default ManageAddress;
