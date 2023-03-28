import {StyleSheet} from 'react-native';
import {WHITE, ORANGE, BLACK, CYAN_BLUE} from '../../../../styles/colors';
import {ABSOLUTE, CENTER, FLEX_END, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  thanksMessageStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
  },
  thanksMessageView: {
    height: 100,
    flexDirection: ROW,
    borderRadius: 12,
    backgroundColor: WHITE,
    marginHorizontal: '4%',
    marginVertical: '6%',
    shadowOpacity: 0.2,
    shadowColor: BLACK,
    elevation: 10,
  },
  messageView: {
    height: 243,
    borderRadius: 12,
    backgroundColor: WHITE,
    marginHorizontal: '4%',
    shadowOpacity: 0.2,
    shadowColor: BLACK,
    elevation: 10,
  },
  imageStyle: {
    justifyContent: FLEX_END,
    position: ABSOLUTE,
    right: 0,
    borderTopRightRadius: 12,
  },
  otpView: {
    flexDirection: ROW,

    alignItems: CENTER,
    marginTop: 15,
  },
  descriptionStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: 15,
    marginTop: 15,
  },
  otpDescriptionStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: 15,
  },
  thankStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    marginLeft: 15,
    marginTop: 15,
  },
  otpStyle: {
    color: ORANGE,
  },
  imageView: {
    width: '40%',
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  thanksView: {
    width: '60%',
    justifyContent: CENTER,
    paddingLeft: 14,
  },
  secondView: {width: '75%'},
});
