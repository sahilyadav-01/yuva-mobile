import {Dimensions, StyleSheet} from 'react-native';
import {
  BLACK,
  BLACK_OPACITY,
  CITRINE_WHITE,
  CYAN_BLUE,
  GRAY,
  GREEN,
  WHITE,
} from '../../styles/colors';
import {CENTER, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = arg => {
  const fraction = Dimensions.get('screen').width - 32;
  return StyleSheet.create({
    dateContainer: {paddingHorizontal: 24},
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
    availableText: {color: GREEN, lineHeight: 16},
    timeContentContainer: {
      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: GRAY,
      paddingVertical: 4,
    },
    timeContainer: {marginHorizontal: 0, paddingHorizontal: 16},
    itemContainer: {marginBottom: 0},
    item: {width: fraction * 0.2},
    itemView: {
      paddingHorizontal: 1,
      paddingVertical: 4,
      borderRadius: 12,
      borderWidth: 2,
      marginBottom: 12,
      borderColor: BLACK_OPACITY,
      alignItems: CENTER,
    },
    slotText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      lineHeight: 16,
      color: CYAN_BLUE,
    },
    separatorContainer: {
      backgroundColor: WHITE,
      height: 8,
    },
    rowContainer: {flexDirection: ROW},
    slotTextExtraStyles: {
      marginBottom: 8,
      marginRight: 13,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 18,
    },
    emptyView: {marginVertical: 4, alignItems: CENTER},
    emptyText: {
      color: BLACK,
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize14,
    },
    emptyContainer: {height: 24},
    horizontalSeparator: {
      width: arg?.index % 4 !== 3 ? fraction / 32 : undefined,
    },
  });
};
