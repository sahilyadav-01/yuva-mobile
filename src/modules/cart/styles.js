import {StyleSheet} from 'react-native';
import {
  CYAN_BLUE,
  FLASH_WHITE,
  ORANGE,
  WHITE,
} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import { getWindowDimensions } from '../../utils/utils';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: FLASH_WHITE,
    flex: 1,
  },
  containerStyle: {
    backgroundColor: ORANGE,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignContent: CENTER,
  },
  bodyContainer: {
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 24,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
  },
  emptyCartContainer: {flex:1,height:getWindowDimensions().height,alignItems:CENTER,justifyContent:CENTER},
  emptyCartText: {fontFamily:fonts.family.rubik500,fontSize:fonts.size.fontSize14,color:CYAN_BLUE}
});
