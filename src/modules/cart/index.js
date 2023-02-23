import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { SVG } from '../../../assets';
import CartDetails from '../../components/CartDetails';
import Header from '../../components/Header';
import { CYAN_BLUE, FLASH_WHITE, GUARDSMAN_RED, RED_SHADE, SPANISH_WHITE, WHITE } from '../../styles/colors';
import { CENTER, ROW, SPACE_BETWEEN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

const Cart = (props) => {
    const RenderItem = ({item,index}) => {
        return (
            <>
                <View style={{paddingVertical:11,paddingLeft:16,paddingRight:30,flexDirection:ROW,justifyContent:SPACE_BETWEEN,backgroundColor:SPANISH_WHITE}}>
                 <Text numberOfLines={2} style={{maxWidth:'40%',fontSize:12,lineHeight:18,color:CYAN_BLUE,fontFamily:fonts.family.rubik500}}>Yuva Prime Package</Text>
                 <View style={{flexDirection:ROW}}>
                 <Text style={{fontSize:12,lineHeight:18,color:RED_SHADE,fontFamily:fonts.family.rubik400}}>9999/-  </Text>
                 <Text style={{fontSize:12,lineHeight:18,color:CYAN_BLUE,fontFamily:fonts.family.rubik400}}>1000/-</Text>
                 </View>
                </View>
                <View style={{paddingVertical:14,paddingLeft:16,paddingRight:30,flexDirection:ROW,justifyContent:SPACE_BETWEEN,alignItems:CENTER}}>
                    <Text style={{fontFamily:fonts.family.rubik400,lineHeight:15,fontSize:10,color:CYAN_BLUE}}>5 Tests</Text>
                    <TouchableOpacity style={{flexDirection:ROW,alignItems:CENTER}}>
                        <SVG.minus/>
                        <Text style={{fontFamily:fonts.family.rubik400,lineHeight:18,fontSize:12,color:GUARDSMAN_RED, marginLeft: 8}}>Remove</Text>
                    </TouchableOpacity>
                </View>
                </>
        );
    }
    return (
        <View style={{backgroundColor:FLASH_WHITE,flex:1}}>
         <Header title='My Cart' showSearch={false}/>
         <View style={{paddingTop:12,paddingBottom:6,paddingHorizontal:24}}>
            <CartDetails data={[{packageName:'Yuva Prime Package',discount:'9999',price:'8000',tests:'5 Tests'},{packageName:'Lipid Profile Diagnostic Test',discount:'2999',price:'1000',tests:'3 Tests'}]} heading='Cart Details'/>
         </View>
        </View>
    );
}

export default Cart;