import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ManageNotifications = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.302 13.644A2.354 2.354 0 0 1 19 15.311a2.34 2.34 0 0 1-.699 1.666 2.4 2.4 0 0 1-1.686.69H3.385a2.4 2.4 0 0 1-1.686-.69 2.34 2.34 0 0 1-.002-3.333l1.553-1.533V7.667c0-1.768.711-3.464 1.977-4.714A6.793 6.793 0 0 1 10 1c1.79 0 3.507.702 4.773 1.953a6.625 6.625 0 0 1 1.977 4.714v4.444l1.552 1.533Zm-4.927 4.023h-6.75c0 .884.356 1.732.989 2.357A3.397 3.397 0 0 0 10 21c.895 0 1.754-.351 2.386-.976a3.313 3.313 0 0 0 .989-2.357Z"
    />
  </Svg>
)
export default ManageNotifications;
