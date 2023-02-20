import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SMOKING_AND_ALCOHOL = (props) => (
  <Svg
    width={53}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.737.982a8 8 0 0 1 5.436 0L43.14 7.11a8 8 0 0 1 4.936 5.195l3.18 10.449a8 8 0 0 1-2.173 8.156L38.78 40.6a8 8 0 0 1-5.48 2.172H16.133a8 8 0 0 1-7.559-5.381L4.454 25.5 1.85 15.539a8 8 0 0 1 5.022-9.55L20.737.983Z"
      fill="#FFF4E9"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39 15a1 1 0 0 1 1-1 5 5 0 0 1 5 5v1.59a4.4 4.4 0 0 1-1.644 3.436A5.994 5.994 0 0 1 46 29v3a1 1 0 1 1-2 0v-3a4 4 0 0 0-4-4 1 1 0 1 1 0-2h.59A2.41 2.41 0 0 0 43 20.59V19a3 3 0 0 0-3-3 1 1 0 0 1-1-1Zm-3 6a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V32a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V24a5 5 0 0 1 5-5 1 1 0 1 1 0 2ZM9 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H9Zm-1 3a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Zm34-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm4 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
      fill="#5067A7"
    />
  </Svg>
)

export default SMOKING_AND_ALCOHOL
