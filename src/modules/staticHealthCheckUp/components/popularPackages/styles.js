import {StyleSheet} from 'react-native';
import {
  CYAN_BLUE,
  WHITE,
  RED_SHADE,
  INDIGO_LIGHT,
  SKY_BLUE,
} from '../../../../styles/colors';
import {ABSOLUTE, CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  viewContainer: {
    height: 240,
    width: 347,
    borderRadius: 12,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  offerView: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 60,
    width: 40,
    backgroundColor: SKY_BLUE,
    position: ABSOLUTE,
    right: 23,
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  buttonView: {
    flexDirection: ROW,
    position: ABSOLUTE,
    bottom: 0,
    width: '100%',
  },
  viewDetailsButton: {
    width: '50%',
    height: 45,
    justifyContent: CENTER,
    alignItems: CENTER,
    borderWidth: 1,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
  addButton: {
    width: '50%',
    height: 45,
    justifyContent: CENTER,
    alignItems: CENTER,
    backgroundColor: INDIGO_LIGHT,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  priceContainer: {
    flexDirection: ROW,
    marginVertical: 5,
  },
  tubeContainer: {
    flexDirection: ROW,
    marginVertical: 5,
  },
  imageContainer: {
    margin: 25,
  },
  textContainer: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik500,
    marginVertical: 15,
  },
  cbcContainer: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
    marginHorizontal: 15,
  },
  oldPrice: {
    color: RED_SHADE,
    textDecorationLine: 'line-through',
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik500,
    marginVertical: 15,
  },
  newPrice: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik500,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  addText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik500,
    color: WHITE,
  },
  discountStyle: {
    color: WHITE,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
  },
  offerrStyle: {
    color: WHITE,
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik500,
  },
});
