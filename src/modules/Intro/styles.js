import {StyleSheet} from 'react-native';
import {DARK_BLUE, ORANGE, WHITE} from '../../styles/colors';
import {CENTER, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  parentContainer:{ 
    // flex: 1
  },
  screenContainer1: {
    // flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  imageBackgroundTop: {
    flex: 1,
    marginLeft:'2%',
  },
  imageBackgroundBottom: {
    flex: 1,
    marginLeft:'2%',
  },
  mainContainer: {
    paddingVertical:15,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  bottomContainerText:{
    paddingRight:10
  },
  IntroStaticScreen1Text: {
    flex: 1,
    marginTop: 5,
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
  },
  IntroStaticScreen1ColorText: {
    color: ORANGE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
  },
  bottomStyle: {
    height: '10%',
    flexDirection: ROW,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingHorizontal: 10,
    backgroundColor: WHITE,
  },
  line: {
    borderBottomColor: ORANGE,
    borderBottomWidth: 2,
    width: '100%',
  },
  bottomContaierText: {
    marginRight: 20,
  },
  buttonStyle: {
    backgroundColor: ORANGE,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    marginVertical: '2%',
    width:'100%'
  },
  buttonText: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight700,
  },
});
