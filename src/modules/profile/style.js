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
} from '../../styles/colors';

const styles = ({disabled}) => {
  return StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 15, backgroundColor: '#E7EAED'},
    saveDetailsButton: {
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 16,
      marginBottom: 20,
      backgroundColor: ORANGE,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addMembersButton: {
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 14,
      marginBottom: 45,
      backgroundColor: disabled ? ORANGE_GREY : ORANGE,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
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
      alignSelf: 'center',
      marginBottom: 41,
      marginTop: 3,
    },
    textInputStyle: {
      borderBottomWidth: 1,
      borderColor: PLATINUM,
      paddingBottom: 5,
      marginBottom: 35,
      color: '#1D2334',
    },
    saveButtonText: {
      fontFamily: fonts.family.fontFamilyRubix,
      fontSize: fonts.size.fontSize14,
      fontWeight: fonts.weight.fontWeight700,
      color: WHITE,
      textAlign: 'center',
    },
    separatorStyle: {
      height: 1,
      width: '100%',
      backgroundColor: PLATINUM,
      marginBottom: 30,
    },
    dependentNameGenderContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    addIconStyle: {marginRight: 15, alignSelf: 'center'},
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
