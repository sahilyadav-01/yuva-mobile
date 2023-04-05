import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const PaymentSuccess = (props) => (
  <Svg
    width={100}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={100} height={100} rx={12} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.979 66v8a4 4 0 0 0 4 4h60a4 4 0 0 0 4-4V42a4 4 0 0 0-4-4H82v7.337a5.989 5.989 0 0 0 2.685 2.198 6 6 0 0 0 2.294.457V68a5.999 5.999 0 0 0-5.965 6H32.97a6.004 6.004 0 0 0-3.703-5.468 5.998 5.998 0 0 0-2.288-.457V66h-4Z"
      fill="#31859F"
    />
    <Path d="M52 42a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="#31859F" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 22a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h60a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4H14Zm5.996 4h48.006A5.998 5.998 0 0 0 74 31.992V52a5.996 5.996 0 0 0-5.508 3.704A6.003 6.003 0 0 0 68.035 58H19.992A6 6 0 0 0 14 52.075V32a5.996 5.996 0 0 0 5.54-3.704A6 6 0 0 0 19.996 26Z"
      fill="#31859F"
    />
  </Svg>
)

export default PaymentSuccess;
