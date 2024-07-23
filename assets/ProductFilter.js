import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProductFilter = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
      d="M7.572 13.837H.827M10.581 3.461h6.745"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
      d="M5.855 3.403A2.52 2.52 0 0 0 3.325.892a2.52 2.52 0 0 0-2.53 2.511 2.52 2.52 0 0 0 2.53 2.512 2.52 2.52 0 0 0 2.53-2.512ZM17.924 13.795a2.52 2.52 0 0 0-2.53-2.512 2.521 2.521 0 0 0-2.53 2.512 2.521 2.521 0 0 0 2.53 2.512 2.52 2.52 0 0 0 2.53-2.512Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ProductFilter;
