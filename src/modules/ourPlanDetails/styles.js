import {Platform, StyleSheet} from 'react-native';
import { INDIGO, ORANGE, WHITE } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { CENTER, ROW, SPACE_BETWEEN } from '../../styles/constants';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 300,
  },
  CardView:{
    marginTop:13,
    marginHorizontal:11,
    backgroundColor:ORANGE,
    flex:1,
    borderRadius:10,
    paddingBottom:11,
    flexDirection:ROW,
  },
  nameText:{
    marginLeft:24,
    marginTop:34,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize16,
    color:INDIGO,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2.5 },
        shadowColor: WHITE,
        shadowOpacity:1.5,
      },
      android: {
        textShadowColor:WHITE,
        textShadowOffset: {width:0, height:2.5},
        textShadowRadius:10,
      },
    }),
  },
  line:{
    marginTop:5,
    borderBottomColor:WHITE,
    borderBottomWidth:2,
    flex: 1,
    marginLeft:24,
    paddingHorizontal:9,
  },
  Image:{
    marginTop:16,
    marginBottom:19,
    marginRight:6,
    width:'100%'
  },
  Year:{
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
  },
  AmountText:{
    marginLeft:41,
    marginTop:15,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
    color:INDIGO,
    shadowOffset:{  width: 0,  height:2.5,  },
    shadowColor:WHITE,
    shadowOpacity:1,
    elevation: 5,
  },
  BuyNow:{
    backgroundColor:INDIGO,
    marginLeft:34,
    marginTop:3,
    borderRadius:8,
    padding:8,
    width:105,
  },
  BuyNowText:{
    color:WHITE,
    textAlign:CENTER
  },
  ViewWidth:{width:'60%'},
  ImageView:{paddingHorizontal:6,width:'40%'}

});
