import {StyleSheet} from 'react-native';
import {BLACK, FLASH_WHITE, MARINER, ORANGE, WHITE} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  screenContainer: {flex: 1},
  container: {
    flex: 1,
    justifyContent: SPACE_BETWEEN,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  containerStyle: {
    backgroundColor: ORANGE,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignContent: CENTER,
  },
  bodyContainer: {
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 24,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
  },
  touchableButton: {
    backgroundColor: ORANGE,
    marginTop: 40,
    marginLeft: 13,
    marginRight: 14,
    borderRadius: 8,
    marginBottom: 30,
  },
  textBook: {
    textAlign: CENTER,
    paddingTop: 15,
    paddingBottom: 15,
    color: WHITE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
  },
  headerContainer: {
    marginVertical: 24,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    alignItems: CENTER,
  },
  heading: {
    fontFamily: fonts.family.montserrant700,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  addAddressContainer: {
    padding: 8,
    backgroundColor: MARINER,
    alignItems: CENTER,
    justifyContent: SPACE_BETWEEN,
    borderRadius: 4,
    flexDirection: ROW,
  },
  addAddressText: {
    marginLeft: 4,
    color: WHITE,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize10,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: CENTER,
    justifyContent: CENTER,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: MARINER,
    borderRadius: 10,
  },
  buttonText: {
    color: WHITE,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize16,
  },
});
