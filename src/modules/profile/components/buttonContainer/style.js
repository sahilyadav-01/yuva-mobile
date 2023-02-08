import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {WHITE, ORANGE, ORANGE_GREY} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';

const styles = ({disabled}) => {
  return StyleSheet.create({
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
    saveButtonText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      fontWeight: fonts.weight.fontWeight700,
      color: WHITE,
      textAlign: CENTER,
    },
    addIconStyle: {marginRight: 15, alignSelf: CENTER},
  });
};

export default styles;
