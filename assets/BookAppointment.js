import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const BookAppointment = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={40} height={40} x={4} y={3} fill="#fff" rx={11} />
      <Rect width={39} height={39} x={4.5} y={3.5} stroke="url(#b)" rx={10.5} />
    </G>
    <G clipPath="url(#c)">
      <Path
        stroke="#E68D36"
        d="M16.466 6v10.667M33.533 6v10.667M15.4 22h6.4m12.8 0h-6.4m-12.8 6.4h6.4m6.4 0h6.4M12.2 11.333h25.6a2.133 2.133 0 0 1 2.133 2.134V34.8a2.133 2.133 0 0 1-2.133 2.133H12.2a2.133 2.133 0 0 1-2.134-2.133V13.467a2.133 2.133 0 0 1 2.134-2.134Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={24}
        x2={24}
        y1={3}
        y2={43}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E68D36" />
        <Stop offset={1} stopColor="#E68D36" />
      </LinearGradient>
      <ClipPath id="c">
        <Path fill="#fff" d="M9 6h32v32H9z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default BookAppointment
