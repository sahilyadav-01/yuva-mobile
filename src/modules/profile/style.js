import {StyleSheet} from 'react-native';
import {FLASH_WHITE, ORANGE, ORANGE_GREY, WHITE} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

const styles = ({disabled}) => {
  return StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 15, backgroundColor: FLASH_WHITE},
    addMembersButton: {
      width: '100%',
      marginTop: 16,
      flexDirection: ROW,
      paddingVertical: 14,
      marginBottom: 45,
      backgroundColor: disabled ? ORANGE_GREY : ORANGE,
      borderRadius: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    saveButtonText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      color: WHITE,
      textAlign: CENTER,
    },
    addIconStyle: {
      marginLeft: 15,
      alignSelf: CENTER,
    },
  });
};

export default styles;
