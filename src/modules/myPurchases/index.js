import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import { PNG, SVG } from '../../../assets';
import { CYAN_BLUE } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import {styles} from './style';

const MyPurchases = () => {
  const {container} = styles();
  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingLeft:20,paddingRight:12,paddingTop:12,paddingBottom:20,borderRadius:12,backgroundColor:'white',borderWidth:1,borderColor:'#E3E3E3'}}>
       <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',marginBottom:14}}>
        <Text numberOfLines={1} style={{color:CYAN_BLUE,maxWidth:'80%',fontSize:10,lineHeight:11,fontFamily:fonts.family.rubik400}}>ORDER NUMBER - 455-3999999-676756789</Text>
       <View style={{flexDirection:'row'}}>
      <Image source={PNG.DATE} resizeMode='contain' style={{height:20,width:20}}/>
      <View style={{marginLeft:2}}>
      <Text style={{color:CYAN_BLUE,lineHeight:11,fontSize:10,fontFamily:fonts.family.rubik400}}>26th May</Text>
      <Text style={{color:CYAN_BLUE,lineHeight:10,fontSize:12,fontFamily:fonts.family.rubik400}}>11:20</Text>
      </View>
       </View>
       </View>
       <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{borderWidth:1,borderRadius:12,borderColor:'rgba(0,0,0,0.1)',marginRight:10}}>
       <SVG.Gift/>
       </View>
        <Text style={{fontFamily:fonts.family.rubik500,fontSize:12,lineHeight:18}}>Booking Confirmed</Text>
       </View>
      </View>
    );
  };
  return (
    <View style={container}>
      <FlatList
        data={[0, 0, 0]}
        keyExtractor={index => index}
        renderItem={renderItem}
        ItemSeparatorComponent={()=><View style={{height:12}}/>}
      />
    </View>
  );
};

export default MyPurchases;
