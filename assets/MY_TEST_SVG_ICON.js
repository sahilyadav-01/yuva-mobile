import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MY_TEST_SVG_ICON = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#38466C"
      d="M1 18a1 1 0 1 0 0 2v-2Zm18 2a1 1 0 1 0 0-2v2ZM5 15a1 1 0 1 0 0 2v-2Zm7 2a1 1 0 1 0 0-2v2Zm-5-5a1 1 0 1 0 0 2v-2Zm3 2a1 1 0 1 0 0-2v2ZM6 3V2a1 1 0 0 0-1 1h1Zm5 0h1a1 1 0 0 0-1-1v1Zm0 7v1a1 1 0 0 0 1-1h-1Zm-5 0H5a1 1 0 0 0 1 1v-1Zm1-7v1a1 1 0 0 0 .97-.757L7 3Zm2.5-2 .97-.243A1 1 0 0 0 9.5 0v1Zm-2 0V0a1 1 0 0 0-.97.757L7.5 1ZM10 3l-.97.243A1 1 0 0 0 10 4V3Zm1 2a1 1 0 1 0 0 2V5Zm3.091 13.143a1 1 0 1 0 1.033 1.713l-1.033-1.713ZM1 20h18v-2H1v2Zm4-3h7v-2H5v2Zm2-3h3v-2H7v2Zm3-11v7h2V3h-2Zm1 6H6v2h5V9Zm-4 1V3H5v7h2ZM6 4h1V2H6v2Zm1.97-.757.5-2L6.53.757l-.5 2 1.94.486ZM7.5 2h2V0h-2v2Zm1.03-.757.5 2 1.94-.486-.5-2-1.94.486ZM10 4h1V2h-1v2Zm1 3a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Zm6 6a5.996 5.996 0 0 1-2.909 5.143l1.033 1.713A7.996 7.996 0 0 0 19 13h-2Z"
    />
  </Svg>
)
export default MY_TEST_SVG_ICON;
