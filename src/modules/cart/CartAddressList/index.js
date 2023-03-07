import React from 'react';
import { ScrollView, View } from 'react-native';
 import ProgressBar from '../../../components/ProgressBar';
// import CartDetails from '../../components/CartDetails';
import Header from '../../../components/Header';
// import PriceDetails from '../../components/PriceDetails';
// import { CART_DETAILS, MY_CART, PRICE_DETAILS } from './constants';
// import { useCart } from './hooks/useCart';
import { styles } from './styles';

const CartAddressList = (props) => {
    // const {cart, onPress, buttonText, onRemove} = useCart();
    // const {itemDtoList, totalCost } = cart || {};
    return (
        <ScrollView style={styles.container}>
         <Header title={"Checkout"} showSearch={false} showBackButton={true}/>
         <View style={styles.bodyContainer}>
            <ProgressBar
            // address="123 Main Street"
            // milestone1="Milestone 1"
            // date1="2022-03-01"
            // time1="10:00 AM"
            // payment1="$100"
            // milestone2="M"
            />
            {/* <CartDetails data={itemDtoList} heading={CART_DETAILS} onRemove={onRemove}/>
            <PriceDetails heading={PRICE_DETAILS} totalCost={totalCost}/>
            <CardButton text={buttonText} onPress={onPress} containerStyle={styles.containerStyle} textStyle={styles.textStyle}/> */}
         </View>
        </ScrollView>
    );
}

export default CartAddressList;