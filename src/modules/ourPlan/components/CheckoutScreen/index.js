import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../../../components/Header'
import { BALI } from '../../../../styles/colors'
import { ADDRES, AMOUNTPAYABLE, APPLY, CHECKOUT, COUPON, DISCOUNT, ORDERAMOUNT, PAYMENT, PRICEDETAILS, RUPEE, TERMSANDCONDTION, TOBEPAID } from './constants'
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
                <View style={styles.progressBar}>
                    <View style={styles.circle}>
                        <View style={styles.circles}>
                            <View style={styles.tickMark}></View>
                        </View>
                        <View style={styles.Line}></View>

                        <View style={styles.circles}></View>
                    </View>
                </View>
                <View style={styles.progress}>
                    <Text style={styles.AddText}>{ADDRES}</Text>
                    <Text style={styles.check}>{PAYMENT}</Text>
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
                    <Text style={styles.TextPrice}>{PRICEDETAILS}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.OrderAmountDirection}>
                    <Text style={styles.orderPrice}>{ORDERAMOUNT}</Text>
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
                    <Text style={styles.Amountpyable}>{AMOUNTPAYABLE}</Text>
                    <Text style={styles.payableAmount}>{RUPEE}{yearlyPrice}/-</Text>
                </View>
                <View style={styles.OrderAmountDirection}>
                    <TouchableOpacity
                        style={styles.checkBoxContainer}
                    />
                    <Text style={styles.termsAndCondtion}>{TERMSANDCONDTION}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        // onPress={}
                        style={styles.touchableButton}>
                        <Text style={styles.tobePaid}>
                            {TOBEPAID} {RUPEE} {yearlyPrice}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CheckoutOurPlan;