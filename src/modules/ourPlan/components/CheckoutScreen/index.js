import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import CheckoutPriceDetails from '../../../../components/CheckoutPriceDetails'
import CouponCard from '../../../../components/CouponCard'
import Header from '../../../../components/Header'
import ProgressBar from '../../../../components/ProgressBar'
import { CHECKOUT, RUPEE, TO_BE_PAID } from './constants'
import { useCheckout } from './hooks/useCheckout'
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles'
import { WHITE } from '../../../../styles/colors'

const CheckoutOurPlan = () => {
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        termsAndCondtionChecked,
        price,
        onCheckout,
        plans,
        planUuid,
        crossAction } = useCheckout();
    const planeType = plans.find((item) => item.cost === Math.max(quarterlyPrice, halfYearlyPrice, yearlyPrice))?.planTypeEnum ?? null;
    const { planTotalAmount, planDiscount, planFinalAmount, planeCouponCode } = useSelector(state => state.coupon);
    console.log('planeCouponDetials', planTotalAmount, planDiscount, planFinalAmount, planeCouponCode);
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

                {planeCouponCode && <View style={[styles.couponContainer, { backgroundColor: WHITE }]}>
                    <View style={styles.descStyle}>
                        <View >
                            <Icons name="local-offer" size={15} style={styles.iconStyle} />
                        </View>
                        <View>
                            <Text style={styles.appliedStyle}>{planeCouponCode ?? ''}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={crossAction}>
                                <Icon name="x" size={11} style={styles.crossStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >
                        {/* <Text style={couponDiscountStyle}>{DISCOUNT_PRICE(couponDiscount !== undefined && couponDiscount !== null && couponDiscount !== 0 ? couponDiscount : cartCouponDiscount)}</Text> */}
                    </View>
                </View>}

                <CheckoutPriceDetails planeCouponCode={planeCouponCode} price={price} planTotalAmount={planTotalAmount} planDiscount={planDiscount} planFinalAmount={planFinalAmount} isPrice={{ yearlyPrice, quarterlyPrice, halfYearlyPrice } } />
                <View>
                    <TouchableOpacity
                        onPress={onCheckout}
                        style={styles.touchableButton}>
                        <Text style={styles.tobePaid}>
                            {TO_BE_PAID} {RUPEE} {planeCouponCode?planFinalAmount:price}/-
                        </Text>
                    </TouchableOpacity>
                </View>
                <CouponCard isPlane={true} planeType={planeType} planUuid={planUuid} />
            </ScrollView>
        </View>
    )
}

export default CheckoutOurPlan;