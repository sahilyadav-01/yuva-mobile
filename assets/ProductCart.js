import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProductCart = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={13}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M5.715 11.701a.944.944 0 1 1-1.888 0 .944.944 0 0 1 1.888 0Zm5.194-.944a.945.945 0 1 0 0 1.89.945.945 0 0 0 0-1.89Zm2.812-7.415-1.684 5.47a1.41 1.41 0 0 1-1.354 1H5.011A1.423 1.423 0 0 1 3.65 8.785l-2.135-7.47H.522a.472.472 0 1 1 0-.945h.993a.949.949 0 0 1 .908.685L2.9 2.73H13.27a.472.472 0 0 1 .452.61Zm-1.091.333H3.171l1.386 4.851a.472.472 0 0 0 .454.342h5.672a.472.472 0 0 0 .452-.333l1.495-4.86Z"
    />
  </Svg>
);
export default ProductCart;
