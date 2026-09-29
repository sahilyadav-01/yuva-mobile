import {StyleSheet} from 'react-native';
import {MARINER, BLACK} from '../../../styles/colors';
import {CENTER} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  topContainer: {
    marginTop: 0,
    height: '100%',
    width: '100%',
    marginVertical: 20,
  },
  topContainerTextStyle: {
    marginHorizontal: 30,
    marginTop: 24,
    fontfamily: fonts.family.montserrat600,
    textAlign: CENTER,
    fontSize: fonts.size.fontSize20,
    color: MARINER,
  },
  topContainerSubTextStyle: {
    marginHorizontal: 30,
    fontfamily: fonts.family.montserrat600,
    marginTop: 30,
    textAlign: CENTER,
    fontSize: fonts.size.fontSize14,
    color: BLACK,
  },
  imageBackground: {
    alignItems: CENTER,
    marginTop: 24,
  },
  bottomContainer: {
    marginTop: 28,
    alignItems: CENTER,
  },
});
