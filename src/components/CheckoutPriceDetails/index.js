
import React from 'react'
import { Text, View, } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { AMOUNT_PAYABLE, DISCOUNT, ORDER_AMOUNT, PRICE_DETAILS, QUANTITY, RUPEE, TERMS_AND_CONDTION } from './constants'
import { useCheckoutPriceDetails } from './hooks/useCheckoutPriceDetails'
import { styles } from './styles'

const CheckoutPriceDetails = (isPrice) => {

    const { yearlyPrice, checked, setChecked ,amountToBePaid,totalCost,totalDiscount,Quantity, price, planTotalAmount, planDiscount, planFinalAmount, planeCouponCode,} = useCheckoutPriceDetails(isPrice);
    console.log('fooo',planTotalAmount, planDiscount, planFinalAmount, planeCouponCode);
    return (
        <View>
            <View style={styles.QuantityView}>
                <Text style={styles.Quantity}>{QUANTITY}</Text>
                <Text style={styles.QuantityNumber}>{Quantity ?? 1}</Text>

            </View>
            <View>
                <Text style={styles.TextPrice}>{PRICE_DETAILS}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.OrderAmountDirection}>
                <Text style={styles.orderPrice}>{ORDER_AMOUNT}</Text>
                <Text style={styles.orderAmount}>{RUPEE}{(planeCouponCode?planTotalAmount:price)|| (totalCost)}/-</Text>
            </View>
            <View style={styles.OrderAmountDirection}>
                <Text style={styles.TextPriceDiscount}>{DISCOUNT}</Text>
                <Text style={styles.payableAmountDiscount}>{RUPEE}{planeCouponCode?planDiscount:totalDiscount}/-</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.OrderAmountDirection}>
                <Text style={styles.Amountpyable}>{AMOUNT_PAYABLE}</Text>
                <Text style={styles.payableAmount}>{RUPEE}{(planeCouponCode?planFinalAmount:price)||(amountToBePaid)}/-</Text>
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