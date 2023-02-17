import * as React from "react"
import Svg, { Path } from "react-native-svg"

const dateAndTime = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37.333}
    height={40}
    viewBox="0 0 28 30"
    {...props}
  >
    <Path d="M5 2.9c0 .5-.9 1.1-2 1.4-1.9.5-2 1.4-2 13.1V30h26V17.5c0-11.1-.2-12.6-1.7-13.2-1-.4-2.2-1.1-2.6-1.7-.6-.8-1-.7-1.4.1C20.7 4.3 7 4.5 7 3c0-.6-.4-1-1-1-.5 0-1 .4-1 .9zm19.8 5.8c.3 2.3.2 2.3-10.7 2.3C4 11 3 10.8 3 9.2c0-1 .3-2.2.7-2.6.4-.4 5.2-.5 10.7-.4 9.6.3 10.1.4 10.4 2.5zm.2 11.8V28H3V13h22v7.5z" />
  </Svg>
)

export default dateAndTime;
