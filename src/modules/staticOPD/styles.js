import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../styles/colors';

import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  //   container: {
  //     paddingBottom: '10%',
  //   },
  disabledContainer: {
    opacity: 0.3,
  },
  containerStyle: {
    marginLeft: '5%',
    marginRight: '5%',
  },

  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
  },
  imageName: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },
  title: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
  },
  textStyle: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
  },
  imageStyle: {
    width: '100%',
    height: '22%',
    marginTop: '2%',
  },
});
