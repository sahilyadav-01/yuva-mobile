import {StyleSheet} from 'react-native';
import {fonts} from '../../styles/fonts';
import {WHITE, MARINER, SHADOW, BLACK} from '../../styles/colors';
import {ABSOLUTE, ROW, SPACE_BETWEEN} from '../../styles/constants';

const styles = ({disabled}) => {
  return StyleSheet.create({
    dependentsContainer: {
      marginTop: 12,
      backgroundColor: WHITE,
      elevation: 10,
      zIndex: 10,
      shadowColor: SHADOW,
      borderRadius: 12,
      marginHorizontal: 12,
      paddingHorizontal: 18,
      paddingTop: 20,
      marginBottom: 12,
    },
    dependentNameGenderContainer: {
      flexDirection: ROW,
      width: '100%',
      justifyContent: SPACE_BETWEEN,
    },
    relationText: {
      fontFamily: fonts.family.montserrat400,
      color: MARINER,
      fontSize: fonts.size.fontSize16,
      minHeight: 24,
    },
    dependentName: {
      paddingTop: 1,
      fontFamily: fonts.family.monsterrant500,
      color: BLACK,
      fontSize: fonts.size.fontSize14,
      minHeight: 22,
    },
    dependentGender: {
      paddingTop: 2,
      fontFamily: fonts.family.monsterrant500,
      color: BLACK,
      fontSize: fonts.size.fontSize14,
      minHeight: 22,
    },
    EditIcon: {
      position: ABSOLUTE,
      right: 15,
    },
    containerView: {
      flexDirection: ROW,
    },
    textSpaceLine: {
      marginHorizontal: 14,
    },
    dependenView: {
      flexDirection: ROW,
      flex: 1,
    },
    textSpacing: {
      marginHorizontal: 14,
    },
    relationView: {
      minHeight: 14,
    },
    relationBottomView: {
      minHeight: 20,
    },
  });
};

export default styles;
