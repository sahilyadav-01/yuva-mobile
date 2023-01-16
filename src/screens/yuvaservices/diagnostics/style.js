import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE,ORANGE,PLATINUM, WHITE ,AMBER, GAINSBORO, CYAN_BLUE} from '../../../styles/colors';
import { COLUMN, SPACE_BETWEEN } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts'; 

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
search:{
    backgroundColor: AMBER,
    color: GAINSBORO,
    marginTop: 1,
    marginBottom: -55,
    fontSize: 1,
},
textColor:{
color:CYAN_BLUE
},
labTest:{
    flexDirection:COLUMN,
    marginLeft:20,
    marginRight:24,
    marginTop:25,
    flex:1,
    justifyContent:SPACE_BETWEEN
},
cards:{
    backgroundColor:WHITE,
     height:96,
     marginTop:19,
     marginLeft:15,
     marginRight:15,
     borderRadius:12
},
image:{
    height:33,
    width:33
    
},
packageTest:{
    color:DARK_BLUE,
    fontSize: fonts.size.fontSize12,
     fontWeight: fonts.weight.fontWeight500,
 
},
card:{
    marginLeft:13,
    marginRight:13,
}
})