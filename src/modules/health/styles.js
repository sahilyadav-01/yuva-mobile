import {StyleSheet} from 'react-native';
import {CYAN_BLUE, ORANGE, WHITE} from '../../styles/colors';
import {CENTER, COLUMN, ROW, TOP, WRAP} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  screenContainer: {flex:1},
  container: {
    marginHorizontal: 12,
  },
  headerView: {
    marginVertical: 18,
  },
  headerText: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
  },
  healthContainer: {
    flexDirection: COLUMN,
  },
  contentContainer: {
    flexDirection: ROW,
    flexWrap: WRAP,
  },
  descriptionHView: {
    marginVertical: 12,
  },
  descriptionHText: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },
  descriptionView: {
    marginVertical: 4,
  },
  descriptionText: {
    backgroundColor: WHITE,
    borderColor: CYAN_BLUE,
    borderRadius: 12,
    borderWidth: 0.5,
    height: 121,
    paddingHorizontal: 16,
    paddingVertical: 16,
    textAlignVertical: TOP,
    color: CYAN_BLUE,
  },
  buttonView: {
    marginVertical: 16,
  },
  containerStyle: {
    backgroundColor: ORANGE,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignContent: CENTER,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight600,
  },
  secureView: {
    marginBottom: 16,
  },
});
