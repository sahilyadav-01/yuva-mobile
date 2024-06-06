import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, ORANGE, RED, WHITE} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {CENTER, ROW} from '../../styles/constants';
import {getDimensions} from '../../utils/utils';

const {width} = getDimensions();

export const styles = StyleSheet.create({
  parentContainerStyle: {
    backgroundColor: WHITE,
    flex: 1,
  },
  bottomContainerStyle: {
    paddingBottom: 16,
  },
  details: {
    fontFamily: fonts.family.montserrat300,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  starIcon: {
    flexDirection: ROW,
    marginHorizontal: 8,
    marginTop: 16,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
  },
  ImageStyle: {
    width: 6,
    height: 6,
    marginVertical: 4,
  },
  termsCondition: {
    marginBottom: 12,
    fontFamily: fonts.family.montserrant700,
    fontSize: fonts.size.fontSize16,
    color: BLACK,
  },
  emptyView: {
    flex: 1,
    alignItems: CENTER,
    justifyContent: CENTER,
    marginVertical: '50%',
  },
  planName: {
    marginBottom: 16,
    maxWidth: '60%',
    fontFamily: fonts.family.montserrant700,
    fontSize: fonts.size.fontSize18,
    color: BLACK,
  },
  planPrice: {
    marginBottom: 16,
    maxWidth: '60%',
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  buyNow: {
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  imageBackground: {
    marginTop: 16,
    width: width - 40,
    //aspectRatio: 2.55,
    paddingVertical: 28,
    paddingLeft: 20,
    alignSelf: CENTER,
  },
  buyNowContainer: {
    width: '27%',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: CENTER,
    justifyContent: CENTER,
    backgroundColor: WHITE,
  },
  container: {paddingHorizontal: 20},
  iconContainer: {marginTop: 24},
  termsContainer: {marginTop: 12},
  noteText: {
    marginBottom: 8,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize14,
    color: RED,
  }
});
