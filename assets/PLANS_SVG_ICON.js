import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PLANS_SVG_ICON = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={61}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={52} height={53} x={4} y={3} fill="#E68D36" rx={11} />
      <Rect width={51} height={52} x={4.5} y={3.5} stroke="url(#b)" rx={10.5} />
    </G>
    <Path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.75 46.8h13.383c2.054 0 3.08 0 3.865-.412a3.72 3.72 0 0 0 1.602-1.65c.4-.806.4-1.863.4-3.977V18.873c0-2.113 0-3.17-.4-3.977a3.721 3.721 0 0 0-1.602-1.65c-.784-.41-1.811-.41-3.865-.41h-6.966c-1.709 0-2.563 0-3.237.287a3.723 3.723 0 0 0-1.984 2.042c-.28.694-.28 1.573-.28 3.331M13 41.14h16.5m9.167-11.322H46m-7.333-7.547H46m-23.833 3.774v7.547M18.5 29.817h7.333m-6.966-11.32h6.6c2.053 0 3.08 0 3.864.41.69.362 1.251.94 1.603 1.65.4.807.4 1.864.4 3.977v16.227c0 2.114 0 3.17-.4 3.978a3.722 3.722 0 0 1-1.603 1.649c-.784.411-1.81.411-3.864.411h-6.6c-2.054 0-3.08 0-3.865-.411a3.722 3.722 0 0 1-1.602-1.65c-.4-.806-.4-1.863-.4-3.977V24.534c0-2.113 0-3.17.4-3.977a3.722 3.722 0 0 1 1.602-1.65c.784-.41 1.811-.41 3.865-.41Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={30}
        x2={30}
        y1={3}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E68D36" />
        <Stop offset={1} stopColor="#E68D36" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default PLANS_SVG_ICON