import {StyleSheet} from 'react-native';
import {MARINER, WHITE} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerStyle: {
    backgroundColor: MARINER,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignContent: CENTER,
    marginVertical: 24,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize16,
  },
  buttonView: {
    flex: 1,
    justifyContent: CENTER,
    marginHorizontal: 8,
  },
});
