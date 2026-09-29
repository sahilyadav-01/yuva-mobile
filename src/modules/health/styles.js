import {StyleSheet} from 'react-native';
import {BLACK, MARINER, WHITE} from '../../styles/colors';
import {CENTER, COLUMN, ROW, TOP, WRAP} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  screenContainer: {flex: 1},
  container: {
    marginHorizontal: 12,
  },
  headerView: {
    marginVertical: 18,
  },
  headerText: {
    color: BLACK,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize16,
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
    color: BLACK,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize14,
  },
  descriptionView: {
    marginVertical: 4,
  },
  descriptionText: {
    backgroundColor: WHITE,
    borderColor: BLACK,
    borderRadius: 12,
    borderWidth: 0.5,
    height: 121,
    paddingHorizontal: 16,
    paddingVertical: 16,
    textAlignVertical: TOP,
    color: BLACK,
  },
  buttonView: {
    marginVertical: 16,
  },
  containerStyle: {
    backgroundColor: MARINER,
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: CENTER,
    alignContent: CENTER,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize16,
  },
  secureView: {
    marginBottom: 16,
  },
});
