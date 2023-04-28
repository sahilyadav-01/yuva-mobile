import {StyleSheet} from 'react-native';
import {BLACK_OPACITY, CITRINE_WHITE, CYAN_BLUE, GREEN, WHITE} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    dateContainer: {paddingHorizontal: 24,backgroundColor:WHITE},
    horizontalSeparator: {width: 20},
    dateItem: {
      paddingTop: 12,
      backgroundColor: WHITE,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: WHITE,
    },
    iconContainer: {flex: 1, alignItems: CENTER, justifyContent: CENTER},
    dateText: {marginHorizontal: 40, textAlign: CENTER, marginTop: 6},
    dayText: {marginHorizontal: 44, textAlign: CENTER, marginTop: 2},
    statusContainer: {
      backgroundColor: CITRINE_WHITE,
      flex: 1,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      paddingVertical: 4,
      alignItems: CENTER,
      justifyContent: CENTER,
      marginTop: 4,
    },
    availableText: {color: GREEN},
    timeContentContainer: {backgroundColor: WHITE},
    timeContainer: {marginHorizontal: 16, paddingHorizontal: 16},
    itemContainer: {marginBottom: 16},
    item: {flex: 1},
    itemView: {
      paddingHorizontal: 20,
      paddingVertical: 4,
      borderRadius: 12,
      borderWidth: 2,
      marginBottom: 12,
      borderColor: BLACK_OPACITY,
    },
    slotText: {
      fontFamily: fonts.family.rubik400,
      fontSize:fonts.size.fontSize12,
      lineHeight: 18,
      color: CYAN_BLUE
    },
    separatorContainer: {
      backgroundColor: WHITE,
      height:8
    }
  });
};
