import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import CheckoutPriceDetails from '../../../../components/CheckoutPriceDetails'
import CouponCard from '../../../../components/CouponCard'
import Header from '../../../../components/Header'
import ProgressBar from '../../../../components/ProgressBar'
import { useCheckout } from './hooks/useCheckout'
import { styles } from './styles'
import { CHECKOUT, PLAN_TYPE, RUPEE, TO_BE_PAID } from './constants'

const CheckoutOurPlan = () => {
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        termsAndCondtionChecked,
        onCheckout,
        plans,
        planUuid,
        planName,
        planAmountToBePaid,
        planeCouponCode,
        planCouponFinalAmount } = useCheckout();
    const planType = plans.find((item) => item.cost === Math.max(quarterlyPrice, halfYearlyPrice, yearlyPrice))?.planTypeEnum ?? null;
    const { planCouponDiscount, planCouponAmountToBePaid } = useSelector(state => state.coupon);
    return (
        <View>
            <Header showBackButton={true} title={CHECKOUT} />
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.progressView}>
                    <ProgressBar progress={0.99} />
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
                <View><Text style={styles.planName}>{planName + PLAN_TYPE(planType)}</Text></View>
                
                <CheckoutPriceDetails isplan={{planUuid}}/>

                <View>
                    <TouchableOpacity
                        onPress={onCheckout}
                        style={styles.touchableButton}>
                        <Text style={styles.tobePaid}> 
                            {TO_BE_PAID} {RUPEE} {planeCouponCode?planCouponFinalAmount:planAmountToBePaid}/-
                        </Text>
                    </TouchableOpacity>
                </View>
                <CouponCard isPlan={true} planType={planType} planUuid={planUuid} />
            </ScrollView>
        </View>
    )
}

export default CheckoutOurPlan;