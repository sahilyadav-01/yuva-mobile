import {Dimensions, StyleSheet} from 'react-native';
import {CENTER, FLEX_END, ROW} from '../../../../styles/constants';

export const styles = () => {
  const {width} = Dimensions.get('screen');
  return StyleSheet.create({
    listStyle: {
      marginHorizontal: 16,
      marginTop: 8,
      height: (width - 32) / 3.25,
      width: width - 32,
    },
    imageBackgroundStyle: {
      alignItems: CENTER,
      justifyContent: FLEX_END,
      width: '100%',
      height: '100%',
    },
    containerStyle: {
      width: '100%',
      height: '100%',
    },
    pointerStyle: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    pointerContainer: {
      flexDirection: ROW,
      marginTop: 8,
      justifyContent: CENTER,
      marginBottom: 12,
    },
  });
};
