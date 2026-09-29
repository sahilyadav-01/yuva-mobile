import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const SearchIcon = props => {
  if (props?.type === 'small') {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}>
        <G clipPath="url(#a)">
          <Path
            fill={props?.color ?? '#E68D36'}
            d="M11.625 10.5h-.592l-.21-.203A4.853 4.853 0 0 0 12 7.125 4.875 4.875 0 1 0 7.125 12a4.853 4.853 0 0 0 3.172-1.178l.203.21v.593l3.75 3.742 1.117-1.117-3.742-3.75Zm-4.5 0A3.37 3.37 0 0 1 3.75 7.125 3.37 3.37 0 0 1 7.125 3.75 3.37 3.37 0 0 1 10.5 7.125 3.37 3.37 0 0 1 7.125 10.5Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h18v18H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={35}
      fill="none"
      {...props}>
      <Path
        fill="#38466C"
        d="M21.936 20.098h-1.13l-.4-.386a9.25 9.25 0 0 0 2.244-6.046 9.29 9.29 0 0 0-9.29-9.291 9.29 9.29 0 0 0-9.292 9.291 9.29 9.29 0 0 0 9.291 9.291 9.25 9.25 0 0 0 6.047-2.244l.386.4v1.13l7.147 7.132 2.13-2.13-7.133-7.147Zm-8.577 0a6.424 6.424 0 0 1-6.432-6.432 6.424 6.424 0 0 1 6.432-6.432 6.424 6.424 0 0 1 6.433 6.432 6.424 6.424 0 0 1-6.433 6.432Z"
      />
    </Svg>
  );
};
export default SearchIcon;
