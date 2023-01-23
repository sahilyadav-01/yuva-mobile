import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {WHITE, ORANGE, SHADOW, CYAN_BLUE} from '../../../../styles/colors';
import {ROW, SPACE_BETWEEN} from '../../../../styles/constants';

const styles = ({disabled}) => {
  return StyleSheet.create({
    dependentsContainer: {
      marginTop: 12,
      backgroundColor: WHITE,
      elevation: 10,
      zIndex: 10,
      shadowColor: SHADOW,
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
      fontFamily: fonts.family.nunitoSemiBold,
      color: ORANGE,
      fontSize: fonts.size.fontSize16,
      height: 24,
    },
    dependentName: {
      fontFamily: fonts.family.rubikMedium,
      color: CYAN_BLUE,
      fontSize: fonts.size.fontSize14,
      height: 21,
    },
    dependentGender: {
      fontFamily: fonts.family.fontFamilyRubix,
      color: CYAN_BLUE,
      fontSize: fonts.size.fontSize14,
      height: 21,
    },
  });
};

export default styles;
