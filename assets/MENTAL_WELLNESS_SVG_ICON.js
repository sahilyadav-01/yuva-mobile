import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
const MENTAL_WELLNESS_SVG_ICON = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={61}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect
        width={51}
        height={52}
        x={4.5}
        y={3.5}
        stroke={props?.color ??"#52608E"}
        rx={10.5}
        shapeRendering="crispEdges"
      />
    </G>
    <Path
      stroke={props?.color ??"#52608E"}
      strokeMiterlimit={22.926}
      strokeWidth={0.945}
      d="m40.197 25.003-.024-.18C39.372 18.726 34.075 14 27.638 14 20.647 14 15 19.577 15 26.43c0 2.936 1.035 5.636 2.77 7.765 1.456 1.787 2.273 3.81 2.273 5.979v5.304h13.51l.003-4.156v-.808h4.168c1.422 0 2.553-1.131 2.553-2.501v-5.385l.494-.208 3.29-1.386h.001l.021-.01a.056.056 0 0 0-.006-.012l-3.88-6.009Zm0 0 .098.152 3.782 5.856-3.88-6.008ZM25.15 23.966v-.846c0-1.371 1.127-2.463 2.488-2.463 1.362 0 2.49 1.092 2.49 2.463v.846H31c1.362 0 2.49 1.092 2.49 2.463 0 1.372-1.128 2.463-2.49 2.463h-.873v.847c0 1.371-1.127 2.463-2.489 2.463-1.361 0-2.488-1.092-2.488-2.463l-.022-.793c-5.197.076-4.194-4.937-.72-4.98m.742 0v.807m0-.807h.807m-1.68 0"
    />
    <Defs></Defs>
  </Svg>
)
export default MENTAL_WELLNESS_SVG_ICON