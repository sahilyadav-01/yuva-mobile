import {StyleSheet} from 'react-native';
import {fonts} from '../../styles/fonts';
import {
  WHITE,
  ORANGE,
  ORANGE_GREY,
  SHADOW,
  FLASH_WHITE,
  PLATINUM,
  CYAN_BLUE,
  DARK_BLUE
} from '../../styles/colors';
import { CENTER, ROW, SPACE_BETWEEN } from '../../styles/constants';

const styles = ({disabled}) => {
  return StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 15, backgroundColor: FLASH_WHITE},
    saveDetailsButton: {
      width: '100%',
      flexDirection: ROW,
      paddingVertical: 16,
      marginBottom: 20,
      backgroundColor: ORANGE,
      borderRadius: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    addMembersButton: {
      width: '100%',
      flexDirection: ROW,
      paddingVertical: 14,
      marginBottom: 45,
      backgroundColor: disabled ? ORANGE_GREY : ORANGE,
      borderRadius: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    scrollViewContainer: {
      marginTop: 24,
      backgroundColor: WHITE,
      elevation: 10,
      zIndex: 10,
      shadowColor: SHADOW,
      borderRadius: 12,
      paddingHorizontal: 13,
      paddingTop: 20,
      marginBottom: 24,
    },
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
    userImage: {
      height: 85,
      width: 85,
      borderRadius: 42.5,
      backgroundColor: FLASH_WHITE,
      alignSelf: CENTER,
      marginBottom: 41,
      marginTop: 3,
    },
    textInputStyle: {
      borderBottomWidth: 1,
      borderColor: PLATINUM,
      paddingBottom: 5,
      marginBottom: 35,
      color: DARK_BLUE,
    },
    saveButtonText: {
      fontFamily: fonts.family.fontFamilyRubix,
      fontSize: fonts.size.fontSize14,
      fontWeight: fonts.weight.fontWeight700,
      color: WHITE,
      textAlign: CENTER,
    },
    separatorStyle: {
      height: 1,
      width: '100%',
      backgroundColor: PLATINUM,
      marginBottom: 30,
    },
    dependentNameGenderContainer: {
      flexDirection: ROW,
      width: '100%',
      justifyContent: SPACE_BETWEEN,
    },
    addIconStyle: {marginRight: 15, alignSelf: CENTER},
    dropdownBoxStyle: {borderWidth: 0, paddingLeft: 5},
    relationText: {
      color: ORANGE,
      fontSize: fonts.size.fontSize16,
      fontWeight: fonts.weight.fontWeight600,
      height: 24,
    },
    dependentName: {
      color: CYAN_BLUE,
      fontSize: fonts.size.fontSize14,
      fontWeight: fonts.weight.fontWeight500,
      height: 21,
    },
    dependentGender: {
      color: CYAN_BLUE,
      fontSize: fonts.size.fontSize14,
      fontWeight: fonts.weight.fontWeight400,
      height: 21,
    },
  });
};

export default styles;
