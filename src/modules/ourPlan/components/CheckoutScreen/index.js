import React from 'react'
import { ScrollView, Text, TextInput, View,TouchableOpacity } from 'react-native'
import Header from '../../../../components/Header'
import ProgressBar from '../../../../components/ProgressBar'
import { BALI } from '../../../../styles/colors'
import { ADDRES, AMOUNT_PAYABLE, APPLY, CHECKOUT, COUPON, DISCOUNT, ORDER_AMOUNT, PAYMENT, PRICE_DETAILS, RUPEE, TERMS_AND_CONDTION, TO_BE_PAID } from './constants'
import { useCheckout } from './hooks/useCheckout'
import { styles } from './styles'

const CheckoutOurPlan = () => {
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice, } = useCheckout();

    return (
        <View>
            <Header showBackButton={true} title={CHECKOUT} />
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.progressView}>
                    <ProgressBar progress={0.99}/>
                </View>
                <View style={styles.border}>
                    <View style={styles.checkboxAddress} >
                    </View>
                    <Text style={styles.adressName}>{address}</Text>
                    <Text style={styles.adressName}>{cityName}-{pincode}</Text>
                    <View style={styles.Images}>
                        <Text style={styles.adressCheck}>{contact}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.TextPrice}>{PRICE_DETAILS}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.OrderAmountDirection}>
                    <Text style={styles.orderPrice}>{ORDER_AMOUNT}</Text>
                    <Text style={styles.orderAmount}>{RUPEE}{yearlyPrice}/-</Text>
                </View>
                <View style={styles.OrderAmountDirection}>
                    <TextInput
                        // defaultValue={defValue}
                        style={styles.Input}
                        keyboardType='numeric'
                        placeholderTextColor={BALI}
                        placeholder={COUPON}
                    //    onChangeText={setSelected}
                    // maxLength={3}
                    />
                    <View style={styles.ApplyCoupon}>
                        <TouchableOpacity>
                            <Text style={styles.Apply}>{APPLY}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.OrderAmountDirection}>
                    <Text style={styles.TextPrice}>{DISCOUNT}</Text>
                    <Text style={styles.payableAmount}>{RUPEE}{yearlyPrice}/-</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.OrderAmountDirection}>
                    <Text style={styles.Amountpyable}>{AMOUNT_PAYABLE}</Text>
                    <Text style={styles.payableAmount}>{RUPEE}{yearlyPrice}/-</Text>
                </View>
                <View style={styles.OrderAmountDirection}>
                    <TouchableOpacity
                        style={styles.checkBoxContainer}
                    />
                    <Text style={styles.termsAndCondtion}>{TERMS_AND_CONDTION}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        // onPress={}
                        style={styles.touchableButton}>
                        <Text style={styles.tobePaid}>
                            {TO_BE_PAID} {RUPEE} {yearlyPrice}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CheckoutOurPlan;