import { StyleSheet } from 'react-native';
import { fonts } from '../../../../styles/fonts';
import { WHITE, SHADOW, MARINER, BLACK } from '../../../../styles/colors';
import { FLEX_END, ROW, SPACE_BETWEEN } from '../../../../styles/constants';

const styles = ({ disabled, hideShadow }) => {
  return StyleSheet.create({
    dependentsContainer: {
      marginTop: 12,
      backgroundColor: WHITE,
      elevation: hideShadow ? undefined : 10,
      zIndex: hideShadow ? undefined : 10,
      shadowColor: hideShadow ? undefined : SHADOW,
      borderRadius: 12,
      paddingHorizontal: 13,
      paddingTop: 20,
      marginBottom: 12,
    },
    dependentNameGenderContainer: {
      flexDirection: ROW,
      width: '100%',
      justifyContent: SPACE_BETWEEN,
    },
    relationText: {
      fontFamily: fonts.family.montserrat600,
      color: MARINER,
      fontSize: fonts.size.fontSize16,
      height: 24,
    },
    dependentName: {
      fontFamily: fonts.family.monsterrant500,
      color: BLACK,
      fontSize: fonts.size.fontSize14,
      height: 21,
    },
    dependentGender: {
      fontFamily: fonts.family.monsterrant500,
      color: BLACK,
      fontSize: fonts.size.fontSize14,
      height: 21,
    },
    rowView: {flexDirection:ROW},
    crossContainer:{alignSelf:FLEX_END,marginBottom:4},
  });
};

export default styles;
