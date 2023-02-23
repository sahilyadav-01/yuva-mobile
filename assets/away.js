import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AwayImage = (props) => (
    <Svg
        width={20}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M18 4h-4V2c0-1.11-.89-2-2-2H8C6.89 0 6 .89 6 2v2H2C.89 4 .01 4.89.01 6L0 17c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2Zm-6 0H8V2h4v2Z"
            fill="#616F9C"
        />
    </Svg>
)

export default AwayImage;
