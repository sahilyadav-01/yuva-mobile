import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LatestSearch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#E68D36"
      d="M12.5 1.024A.5.5 0 0 0 12.023.5L7.529.287a.5.5 0 1 0-.048.998l3.996.19-.19 3.996a.5.5 0 0 0 .998.048l.214-4.495ZM1.335 11.37l11-10-.672-.74-11 10 .672.74Z"
    />
  </Svg>
)
export default LatestSearch;
