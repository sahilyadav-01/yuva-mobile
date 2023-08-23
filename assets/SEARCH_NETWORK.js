import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const SEARCH_NETWORK = (props) => (
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
      d="M32.714 8.839H22.086c-2.48 0-3.72 0-4.668.484a4.434 4.434 0 0 0-1.935 1.94c-.483.95-.483 2.193-.483 4.68v25.75c0 2.486 0 3.73.483 4.679a4.433 4.433 0 0 0 1.935 1.94c.947.484 2.188.484 4.668.484h16.828c2.48 0 3.72 0 4.668-.484a4.433 4.433 0 0 0 1.935-1.94c.483-.95.483-2.193.483-4.68V22.158M32.714 8.838 46 22.159M32.714 8.838v9.768c0 1.243 0 1.865.242 2.34.212.417.55.757.967.97.474.242 1.094.242 2.334.242H46M21.924 48.796c.983-3.83 4.451-6.66 8.578-6.66s7.595 2.83 8.578 6.66m-5.157-15.539c0 2.553-2.2 2.553-3.423 2.553-2.5.5-3.5-1.327-3.5-2.553s1-3.94 3.5-3.44c2.456-.5 3.423 2.214 3.423 3.44Z"
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
export default SEARCH_NETWORK