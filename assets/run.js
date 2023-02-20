import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Run = (props) => (
  <Svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.745 2.738c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Zm-1.8 6.95.5-2.2 1.05 1v3h1v-3.75l-1.05-1 .3-1.5c.65.75 1.65 1.25 2.75 1.25v-1c-.95 0-1.75-.5-2.15-1.2l-.5-.8c-.2-.3-.5-.5-.85-.5-.15 0-.25.05-.4.05l-2.6 1.1v2.35h1v-1.7l.9-.35-.8 4.05-2.45-.5-.2 1 3.5.7Z"
      fill="#fff"
    />
  </Svg>
)

export default Run
