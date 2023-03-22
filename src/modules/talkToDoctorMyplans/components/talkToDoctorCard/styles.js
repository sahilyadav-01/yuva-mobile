import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, ORANGE, WHITE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: CENTER,
    alignSelf: CENTER,
    marginVertical: 16,
    marginHorizontal:15,
    borderRadius: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowColor: BLACK,
    elevation: 5,
  },
  cardContainer: {
    flex: 1,
    flexDirection: ROW,
    borderRadius: 12,
    backgroundColor: WHITE,
  },
  header: {
    fontFamily: fonts.family.rubik400,
    fontWeight: fonts.weight.fontWeight700,
    fontSize: fonts.size.fontSize14,
    color: CYAN_BLUE,
  },
  description: {
    fontFamily: fonts.family.rubik400,
    fontWeight: fonts.weight.fontWeight400,
    fontSize: fonts.size.fontSize12,
    color: ORANGE,
  },
  headerView: {
    paddingVertical: 2,
  },
  descriptionView: {
    paddingVertical: 2,
  },
  textView: {
    width: '60%',
    paddingLeft: 20,
    paddingTop: 20,
  },
  imageView: {
    width: '40%',
    justifyContent: CENTER,
    alignItems: CENTER,
  },
});
