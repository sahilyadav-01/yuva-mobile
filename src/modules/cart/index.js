import React from 'react';
import { ScrollView, View } from 'react-native';
import CardButton from '../../components/CardButton';
import CartDetails from '../../components/CartDetails';
import Header from '../../components/Header';
import PriceDetails from '../../components/PriceDetails';
import { CART_DETAILS, MY_CART, PRICE_DETAILS } from './constants';
import { useCart } from './hooks/useCart';
import { styles } from './styles';

const Cart = (props) => {
    const {cart, onPress, buttonText} = useCart();
    const {itemDtoList, totalCost } = cart;
    return (
        <ScrollView style={styles.container}>
         <Header title={MY_CART} showSearch={false}/>
         <View style={styles.bodyContainer}>
            <CartDetails data={itemDtoList} heading={CART_DETAILS}/>
            <PriceDetails heading={PRICE_DETAILS} totalCost={totalCost}/>
            <CardButton text={buttonText} onPress={onPress} containerStyle={styles.containerStyle} textStyle={styles.textStyle}/>
         </View>
        </ScrollView>
    );
}

export default Cart;