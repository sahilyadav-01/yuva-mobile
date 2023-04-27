import {StyleSheet} from 'react-native';
import {WHITE, SHADOW} from '../../styles/colors';
import {ABSOLUTE} from '../../styles/constants';

export const styles = params => {
  return StyleSheet.create({
    container: {
      backgroundColor: WHITE,
      elevation: 10,
      zIndex: 10,
      shadowColor: SHADOW,
      width: '100%',
      position: ABSOLUTE,
      bottom: 0,
      borderTopLeftRadius: params?.modalTopRadius ?? 10,
      borderTopRightRadius: params?.modalTopRadius ?? 10,
    },
    innerContainer: {flex: 1, paddingBottom: 0, paddingTop: 16},
  });
};
