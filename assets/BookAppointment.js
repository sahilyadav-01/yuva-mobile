import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BookAppointment = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      stroke="#38466C"
      strokeWidth={2}
      d="M1 6.554a4.444 4.444 0 0 1 4.444-4.445h11.112A4.444 4.444 0 0 1 21 6.554v10a4.445 4.445 0 0 1-4.444 4.444H5.444A4.444 4.444 0 0 1 1 16.554v-10Z"
    />
    <Path
      stroke="#38466C"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6.555 1v3.333M15.445 1v3.333M7.666 12.11h6.667m-3.334-3.333v6.667"
    />
  </Svg>
);
export default BookAppointment;
