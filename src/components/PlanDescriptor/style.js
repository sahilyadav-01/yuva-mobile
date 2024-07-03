import {StyleSheet} from 'react-native';
import {CENTER, ROW} from '../../styles/constants';
import {BLACK, MARINER, ZUMTHOR} from '../../styles/colors';
import {fonts} from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    descriptionContainer: {
      paddingTop: 12,
      paddingBottom: 16,
      borderRadius: 10,
      backgroundColor: ZUMTHOR,
    },
    planHeading: {
      fontFamily: fonts.family.montserrant800,
      fontSize: fonts.size.fontSize16,
      color: MARINER,
      alignSelf: CENTER,
      marginBottom: 12,
    },
    rowContainer: {
      flexDirection: ROW,
    },
    itemText: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize10,
      color: BLACK,
      marginLeft: 10,
    },
    imageStyle: {width: '40%', height: '53%'},
  });
};
