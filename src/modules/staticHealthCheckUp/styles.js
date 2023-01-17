import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE, RED_SHADE, BLACK} from '../../styles/colors';
import {CENTER} from '../../styles/constants';

import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  ScrollViewContainerStyle: {
    paddingBottom: 400,
  },
  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
    margin: '10%',
  },
  imageName: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },
  title: {
    marginBottom: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight5s00,
  },
  subtitle: {
    marginTop: '30%',
    color: ORANGE,
    fontSize: fonts.size.fontSize18,
    fontWeight: fonts.weight.fontWeight600,
    marginLeft: '30%',
    marginRight: '20%',
  },
  textStyle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
  },
  imageStyle: {
    width: '100%',
    height: '22%',
    marginTop: '2%',
  },
  subtitleContainer: {
    backgroundColor: CYAN_BLUE,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headTitle: {
    marginBottom: '5%',
    marginTop: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
  },
  subtitleText: {
    color: WHITE,
    padding: 5,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },
  paramText: {
    color: CYAN_BLUE,
    marginBottom: '2%',
  },
  moreContainer: {
    alignItems: CENTER,
    marginTop: '5%',
  },
  moreInfoContainer: {
    borderRadius: 8,
    borderWidth: 1,
    height: 44,
    width: '95%',
    justifyContent: CENTER,
  },
  moreInfoText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    marginLeft: 55,
  },
  priceContainer: {
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: CENTER,
    borderWidth: 2,
    borderColor: ORANGE,
    marginTop: 20,
    width: '100%',
    height: 65,
  },
  marketPrice: {
    alignItems: CENTER,
    justifyContent: CENTER,
    width: '50%',
  },
  mPriceText: {
    color: RED_SHADE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },
  oPriceText: {
    color: BLACK,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },
  price: {
    color: BLACK,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
  },
  offerPrice: {
    alignItems: CENTER,
    justifyContent: CENTER,
    backgroundColor: ORANGE,
    width: '50%',
  },
});
