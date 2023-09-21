import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { CYAN_BLUE, GREEN, WHITE } from '../../styles/colors';
import { AMOUNT_PAYABLE, DISCOUNT, ORDER_AMOUNT, PRICE_DETAILS, QUANTITY, RUPEE, COST, DISCOUNT_AMOUNT, TEST_AND_PACKAGES_PRICE, BY_CLICKING, TERMS_AND_CONDITIONS, AND, PRIVACY_POLICY, COLLECTION_CHARGES, PROCESSING_AMOUNT } from './constants';
import { useCheckoutPriceDetails } from './hooks/useCheckoutPriceDetails';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { onPrivacyPolicyPress, onTermsConditionsPress } from '../../utils/utils';

const CheckoutPriceDetails = (props) => {

    const { amountToBePaid, checked, setChecked, totalCost, totalDiscount, Quantity, planAmountToBePaid, planCostAfterDiscount, planDiscountBeforeCoupon, planPrice, planCouponDiscount, planeCouponCode, crossAction, planCouponFinalAmount, plan, processingCharge,price,discountBeforeCoupon ,costAfterDiscount,finalamountToBePaid,couponFinalAmount,couponDiscount} = useCheckoutPriceDetails(props);
    return (
        <View>
            <View style={styles.QuantityView}>
                <Text style={styles.Quantity}>{Quantity ? QUANTITY('') : QUANTITY('-1')}</Text>
                <Text style={styles.QuantityNumber}>{Quantity ?? COST(price)}</Text>
            </View>
            <View>
                <Text style={styles.TextPrice}>{PRICE_DETAILS}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.OrderAmountDirection}>
               <Text style={styles.TextPriceDiscount}>{totalCost ? TEST_AND_PACKAGES_PRICE : DISCOUNT}</Text>
                <Text style={[styles.payableAmountDiscount, {color:totalCost ? CYAN_BLUE : GREEN}]}>{totalCost  ? COST(totalCost) : DISCOUNT_AMOUNT(discountBeforeCoupon)}</Text>
            </View>
            <View style={styles.OrderAmountDirection}>
                {totalCost?<Text style={styles.orderPrice}>{DISCOUNT}</Text>:<Text style={styles.orderPrice}>{ORDER_AMOUNT}</Text>}
                <Text style={[styles.orderAmount, {color:(totalDiscount || totalDiscount==0) ? GREEN : CYAN_BLUE}]}>{(totalDiscount || totalDiscount==0) ? DISCOUNT_AMOUNT(totalDiscount) : COST(costAfterDiscount)}</Text>
            </View>
           {processingCharge > 0 && <View style={styles.collectionContainer}>
            <Text style={styles.orderPrice}>{COLLECTION_CHARGES}</Text>
            <Text style={styles.orderAmount}>{PROCESSING_AMOUNT(processingCharge)}</Text>
           </View>}
            {(plan && planeCouponCode) && <View style={[styles.couponContainer, { backgroundColor: WHITE }]}>
                <View style={styles.descStyle}>
                    <View >
                        <MaterialIcon name="local-offer" size={15} style={styles.iconStyle} />
                    </View>
                    <View>
                        <Text style={styles.appliedStyle}>{planeCouponCode ?? ''}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={crossAction}>
                            <FeatherIcon name="x" size={11} style={styles.crossStyle} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.couponDiscountStyle}>{DISCOUNT_AMOUNT(planeCouponCode ? couponDiscount : 0)}</Text>
                </View>
            </View>}
            <View style={styles.line} />
            <View style={styles.OrderAmountDirection}>
                <Text style={styles.Amountpyable}>{AMOUNT_PAYABLE}</Text>
                <Text style={styles.payableAmount}>{RUPEE}{typeof amountToBePaid === 'number' ? amountToBePaid : ((planeCouponCode && !undefined) ? couponFinalAmount : finalamountToBePaid)}/-</Text>
            </View>
            <View style={styles.OrderAmountDirection}>
                <View style={styles.checkBoxContainer}>
                    <Checkbox.Android
                        color={GREEN} uncheckedColor={CYAN_BLUE}
                        status={checked === true ? 'checked' : 'unchecked'}
                        onPress={() => {
                            checked !== true ? setChecked(true) : setChecked(false);
                        }}
                    />
                </View>
                <Text style={styles.termsAndCondtion}>{BY_CLICKING} <Text onPress={onTermsConditionsPress} style={[styles.termsAndCondtion,styles.termsTextStyle]}>{TERMS_AND_CONDITIONS}</Text> {AND} <Text onPress={onPrivacyPolicyPress} style={[styles.termsAndCondtion,styles.termsTextStyle]}>{PRIVACY_POLICY}</Text>.</Text>
            </View>
        </View>
    )
}

export default CheckoutPriceDetails;