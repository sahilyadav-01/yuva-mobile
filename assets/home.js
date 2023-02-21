import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeImage = (props) => (
    <Svg
        width={20}
        height={17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M8 17v-6h4v6h5V9h3L10 0 0 9h3v8h5Z" fill="#E68D36" />
    </Svg>
)
export default HomeImage;

