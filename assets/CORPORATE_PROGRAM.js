import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const CORPORATE_PROGRAM = (props) => (
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
      strokeWidth={2}
      d="M39 28.817c5.523 0 10-4.472 10-9.989s-4.477-9.99-10-9.99-10 4.473-10 9.99a9.94 9.94 0 0 0 1.043 4.448c.178.356.237.762.134 1.147l-.595 2.223a1.3 1.3 0 0 0 1.591 1.59l2.226-.595a1.635 1.635 0 0 1 1.149.134A9.968 9.968 0 0 0 39 28.817Z"
    />
    <Path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeWidth={1.75}
      d="M9.013 24.688c-.145 3.812.821 10.286 7.322 16.78 1.569 1.567 3.136 2.812 4.665 3.797m-8.924-26.562c2.785-2.783 7.23-2.41 9 .757l1.297 2.323c1.172 2.097.701 4.847-1.144 6.69 0 0-2.237 2.236 1.82 6.289 4.056 4.052 6.295 1.818 6.295 1.818 1.845-1.843 4.599-2.313 6.698-1.143l2.326 1.297c3.17 1.767 3.543 6.207.758 8.99-1.674 1.672-3.725 2.973-5.992 3.059A19.601 19.601 0 0 1 27 48.019"
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
export default CORPORATE_PROGRAM