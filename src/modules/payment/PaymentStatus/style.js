import {StyleSheet} from 'react-native';
import {PINK_RED, BLACK, MARINER, WHITE, FLASH_WHITE} from '../../../styles/colors';
import {ABSOLUTE, CENTER} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = paymentSuccess => {
  return StyleSheet.create({
    paymentStatus: {
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize20,
      lineHeight: 30,
      alignSelf: CENTER,
      textAlign: CENTER,
      color: paymentSuccess ? MARINER : PINK_RED,
    },
    paymentText: {
      marginHorizontal: 40,
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize14,
      lineHeight: 28,
      color: BLACK,
      alignSelf: CENTER,
      textAlign: CENTER,
    },
    timer: {
      marginTop: 20,
      alignItems: CENTER,
    },
    separator: {height: 24},
    imageContainer: {height:206,width:'100%'},
    screenContainer: {paddingTop: 24},
    container: {flex: 1, marginHorizontal:16, backgroundColor:WHITE, zIndex: 4, elevation: 4, marginTop: 24, paddingBottom:32,borderRadius:6, marginBottom: 12},
    indicatorStyle: {flex: 1, alignItems: CENTER, justifyContent: CENTER},
    numberText: {fontFamily: fonts.family.monsterrant500, fontSize: fonts.size.fontSize14, lineHeight: 28, color: BLACK},
    crossContainer: {position:ABSOLUTE,top:-13,right:-13,backgroundColor:MARINER,width:26,height:26, borderRadius: 13, alignItems:CENTER,justifyContent:CENTER},
    scrollContainer: {flex:1,backgroundColor:FLASH_WHITE},
    imageStyle:{width:'100%',height:'100%'}
  });
};
