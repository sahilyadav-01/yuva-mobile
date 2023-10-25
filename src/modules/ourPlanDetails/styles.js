import { StyleSheet} from 'react-native';
import { CYAN_BLUE, ORANGE, WHITE} from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { CENTER, ROW } from '../../styles/constants';

export const styles = StyleSheet.create({
  parentContainerStyle:{
    backgroundColor:WHITE,
    flex:1
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  bottomContainerStyle:{
    paddingBottom: 16,
  },
  details: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
  },
  starIcon: {
    flexDirection: ROW,
    marginHorizontal:8,
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
    marginTop: 26,
    marginLeft: 10,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    color: ORANGE,
  },
  emptyView: {
    flex:1,
    alignItems: CENTER,
    justifyContent:CENTER,
    marginVertical:'50%',
  },
});