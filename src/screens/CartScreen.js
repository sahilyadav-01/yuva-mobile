import React from 'react';
import { SafeAreaView } from 'react-native';
import Cart from '../modules/cart';
import { styles } from './styles';

const CartScreen = (props) => {
    return (
        <SafeAreaView style={styles.homeScreenContainer}>
            <Cart/>
        </SafeAreaView>
    );
}

export default CartScreen;