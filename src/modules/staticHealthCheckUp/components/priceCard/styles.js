import {StyleSheet} from 'react-native';
import {ORANGE, RED_SHADE, BLACK} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  moreContainer: {
    alignItems: CENTER,
    marginTop: '5%',
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
