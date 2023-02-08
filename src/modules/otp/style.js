import {StyleSheet} from 'react-native';
import {CYAN_BLUE, FLASH_WHITE, ORANGE, WHITE} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    scrollViewContainer: {paddingHorizontal: 13, marginTop: 1},
    signUpCard: {
      backgroundColor: WHITE,
      elevation: 100,
      zIndex: 100,
      paddingTop: 16,
      paddingBottom: 32,
      borderRadius: 12,
      shadowColor: FLASH_WHITE,
      paddingHorizontal: 14,
    },
    otpInputContainer: {
      backgroundColor: '#E7E5E5',
      borderColor: '#E7E5E5',
      width: '20%',
      borderRadius: 10,
      justifyContent: CENTER,
      alignItems: CENTER,
    },
    otpContainer: {
      marginHorizontal: 10,
      marginTop: 28,
      marginBottom: 32,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    verifyButtonContainer: {
      backgroundColor: ORANGE,
      borderRadius: 10,
      paddingVertical: 16,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    timerContainer: {paddingRight: 8, marginTop: 2},
    resendOtpContainer: {
      alignSelf: CENTER,
      justifyContent: CENTER,
      marginTop: 10,
    },
    headingContainer: {paddingLeft: 10, marginTop: 32},
    verifyText: {
      lineHeight: 17,
      fontSize: 14,
      fontFamily: fonts.family.rubik700,
      color: WHITE,
    },
    resendOtpText: {
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      color: CYAN_BLUE,
      lineHeight: 21,
    },
    headingText: {
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      lineHeight: 21,
      color: CYAN_BLUE,
    },
    otpTextStyle: {
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      lineHeight: 17,
      color: CYAN_BLUE,
      alignSelf:CENTER,
    },
  });
};

export default styles;
