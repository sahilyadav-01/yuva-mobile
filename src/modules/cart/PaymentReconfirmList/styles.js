import {StyleSheet} from 'react-native';
import {CYAN_BLUE, FLASH_WHITE, ORANGE, WHITE} from '../../../styles/colors';
import {CENTER} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: FLASH_WHITE,
    flex: 1,
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
    marginTop: 20,
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
  dateContainer: {
    borderRadius: 12,
    justifyContent: CENTER,
    paddingLeft: 21,
    marginHorizontal: 16,
    backgroundColor: WHITE,
    marginTop: 23,
    height: 66,
  },
  timeSlotStyle: {
    color: CYAN_BLUE,
    marginVertical: 3,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
  },
  PriceDetails:{
    paddingVertical:'5%',
  }
});
