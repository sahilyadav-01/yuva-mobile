import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE,ORANGE,PLATINUM, WHITE } from '../../../styles/colors';


export const styles = StyleSheet.create({

boxStyles:{
borderWidth: 0,
 margin: 15,
 borderBottomWidth: 1,
 borderColor: PLATINUM,
 paddingBottom: 5,
 marginBottom: 15,
 color:DARK_BLUE,
height: 50,
},
boxStyles1:{
    backgroundColor: WHITE,
    borderRadius: 8,
    height: 50,
    borderWidth: 1,
    borderColor: DARK_BLUE,
},
contentContainerStyle:{
    flexGrow: 1,
    paddingBottom: 200,
},
dateTime:{
    backgroundColor:WHITE,
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
},
textInput:{
    backgroundColor: WHITE,
    borderWidth: 1,
    borderRadius: 8,
},
touchable:{
    backgroundColor:ORANGE,
},
theme:{colors: { text:BLACK }},
})