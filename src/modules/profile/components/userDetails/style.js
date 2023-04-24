import { StyleSheet } from 'react-native';
import { FLASH_WHITE, PLATINUM, DARK_BLUE, WHITE, SILVER_CHALICE } from '../../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';

const styles = ({ disabled }) => {
  return StyleSheet.create({
    userImage: {
      minHeight: 85,
      width: 85,
      borderRadius: 42.5,
      backgroundColor: SILVER_CHALICE,
      alignSelf: CENTER,
      marginTop: -42,
      marginBottom: 20,
      zIndex: 1,
    },
    userCoverImage: {
      minHeight: 200,
      width: "100%",
      borderRadius: 14,
      backgroundColor: FLASH_WHITE,
      alignSelf: CENTER,
      zIndex: -1,
    },
    coverIcon: {
      position: ABSOLUTE,
      right: 3,
      bottom:-10
    },
    UserIcon: {
      position: ABSOLUTE,
      right:3,
      bottom:3
    },
    userPicture: {
      backgroundColor: WHITE,
      marginTop: 4,
      marginHorizontal: 2,
      height: 75,
      width: 75,
      borderRadius: 42.5,
      alignSelf: CENTER,
      justifyContent: CENTER,
    },
    textInputStyle: {
      borderBottomWidth: 1,
      borderColor: PLATINUM,
      paddingBottom: 5,
      marginBottom: 35,
      color: DARK_BLUE,
    },
    separatorStyle: {
      height: 1,
      width: '100%',
      backgroundColor: PLATINUM,
      marginBottom: 30,
    },
    dropdownBoxStyle: { borderWidth: 0, paddingLeft: 5 },
    modalView:{
      flex: 1,
      justifyContent:FLEX_END
    },
    modaltext:{
     position:ABSOLUTE,
     left:20,
     top:20,
     color: DARK_BLUE,
     fontSize: fonts.size.fontSize18,
     fontFamily: fonts.family.rubik500,

    },
    modalTextView:{
      backgroundColor:WHITE,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 75,
      marginBottom: 5,
      marginHorizontal: 6,
      alignItems: 'center',
      shadowColor: '#000', shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    GalleryIcon:{
      textAlign:CENTER,
      color: DARK_BLUE,
      fontSize: fonts.size.fontSize12,
      fontFamily: fonts.family.rubik400,
    },
    IconView:{
      flexDirection:ROW,
      justifyContent:SPACE_BETWEEN,
    },
    galleryTouch:{
      marginHorizontal:40,
    },
    CrossIcon:{
      position:ABSOLUTE,
      right:-30,
      top:-55,
    

    }
  });
};

export default styles;
