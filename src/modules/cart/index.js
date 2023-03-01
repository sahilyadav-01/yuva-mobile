import React from 'react';
import { ScrollView, View } from 'react-native';
import CartDetails from '../../components/CartDetails';
import Header from '../../components/Header';
import PriceDetails from '../../components/PriceDetails';
import { FLASH_WHITE } from '../../styles/colors';
import { CART_DETAILS, MY_CART, PRICE_DETAILS } from './constants';
import { useCart } from './hooks/useCart';

const Cart = (props) => {
    const {cart} = useCart();
    const {itemDtoList, totalCost } = cart;
    return (
        <ScrollView style={{backgroundColor:FLASH_WHITE,flex:1}}>
         <Header title={MY_CART} showSearch={false}/>
         <View style={{paddingTop:12,paddingBottom:6,paddingHorizontal:24}}>
            <CartDetails data={itemDtoList} heading={CART_DETAILS}/>
            <PriceDetails heading={PRICE_DETAILS} totalCost={totalCost}/>
         </View>
        </ScrollView>
    );
}

export default Cart;