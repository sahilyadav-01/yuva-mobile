import {Dimensions, StyleSheet} from 'react-native';
import {CENTER, FLEX_END, ROW} from '../../../../styles/constants';

export const styles = () => {
  const {width} = Dimensions.get('screen');
  return StyleSheet.create({
    listStyle: {marginHorizontal: 16, marginTop: 8},
    imageBackgroundStyle: {
        width: width - 32,
        paddingLeft:16,
        paddingVertical: 8
      },
  });
};
