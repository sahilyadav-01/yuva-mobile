import {StyleSheet} from 'react-native';
import {getWindowDimensions} from '../../utils/utils';
import {ABSOLUTE} from '../../styles/constants';
import {OPAQUE_GREY} from '../../styles/colors';

export const styles = () => {
  const {width, height} = getWindowDimensions();
  return StyleSheet.create({
    container: {
      position: ABSOLUTE,
      zIndex: 700,
      width,
      height,
      backgroundColor: OPAQUE_GREY,
    },
    loader: {position: ABSOLUTE, top: height / 2, left: width / 2, zIndex: 900},
  });
};
