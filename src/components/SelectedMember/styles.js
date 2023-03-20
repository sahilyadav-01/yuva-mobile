import {StyleSheet} from 'react-native';
import {fonts} from '../../styles/fonts';
import {WHITE, ORANGE, SHADOW, CYAN_BLUE, RED} from '../../styles/colors';
import { ABSOLUTE, FLEX_END, ROW,SPACE_BETWEEN } from '../../styles/constants';

const styles = ({disabled}) => {
  return StyleSheet.create({
    dependentsContainer: {
      marginTop: 12,
      backgroundColor: WHITE,
      elevation: 10,
      zIndex: 10,
      shadowColor: SHADOW,
      borderRadius: 12,
      marginHorizontal:13,
      paddingHorizontal: 17,
      marginHorizontalL:43,
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
    EditIcon:{
        position:ABSOLUTE,
        right:15,
    },
    containerView:{
       flexDirection:ROW,
    },
    textSpaceLine:{
        marginHorizontal:14,
    }
  });
};

export default styles;
