
import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { BALI } from '../../styles/colors'
import { AMOUNT_PAYABLE, APPLY, COUPON, DISCOUNT, ORDER_AMOUNT, PRICE_DETAILS, QUANTITY, RUPEE, TERMS_AND_CONDTION } from './constants'
import { useCheckoutPriceDetails } from './hooks/useCheckoutPriceDetails'
import { styles } from './styles'

const CheckoutPriceDetails = (isPrice) => {

    const { yearlyPrice, checked, setChecked } = useCheckoutPriceDetails(isPrice);
    return (
        <View>
            <View style={styles.QuantityView}>
                <Text style={styles.Quantity}>{QUANTITY}</Text>
                <Text style={styles.QuantityNumber}>1</Text>

            </View>
            <View>
                <Text style={styles.TextPrice}>{PRICE_DETAILS}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.OrderAmountDirection}>
                <Text style={styles.orderPrice}>{ORDER_AMOUNT}</Text>
                <Text style={styles.orderAmount}>{RUPEE}{yearlyPrice}/-</Text>
            </View>
            <View style={styles.viewCoupon}>
                <TextInput
                    style={styles.textInputStyles}
                    placeholderTextColor={BALI}
                    placeholder={COUPON}
                    //    onChangeText={setSelected}
                    maxLength={6}
                />
                <TouchableOpacity style={styles.applyStyles}>
                    <Text style={styles.applyButtonStyles}>{APPLY}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.OrderAmountDirection}>
                <Text style={styles.TextPriceDiscount}>{DISCOUNT}</Text>
                <Text style={styles.payableAmountDiscount}>{RUPEE}{yearlyPrice}/-</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.OrderAmountDirection}>
                <Text style={styles.Amountpyable}>{AMOUNT_PAYABLE}</Text>
                <Text style={styles.payableAmount}>{RUPEE}{yearlyPrice}/-</Text>
            </View>
            <View style={styles.OrderAmountDirection}>
                <View style={styles.checkBoxContainer}>
                    <Checkbox
                        status={checked === true ? 'checked' : 'unchecked'}
                        onPress={() => {
                            checked !== true ? setChecked(true) : setChecked(false);
                        }}
                    />

                </View>
                <Text style={styles.termsAndCondtion}>{TERMS_AND_CONDTION}</Text>
            </View>
        </View>
    )
}

export default CheckoutPriceDetails;