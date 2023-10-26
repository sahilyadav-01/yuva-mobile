import {Dimensions, StyleSheet} from 'react-native';
import {CENTER, FLEX_END, ROW} from '../../../../styles/constants';

export const styles = () => {
  const {width} = Dimensions.get('screen');
  return StyleSheet.create({
    listStyle: {
      marginHorizontal: 16,
      marginTop: 8,
    },
    imageBackgroundStyle: {
      alignItems: CENTER,
      justifyContent: FLEX_END,
      width: width - 32,
      height: '100%',
      borderRadius: 12
    },
    containerStyle: {
      height: (width - 32) / 3.25,
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
