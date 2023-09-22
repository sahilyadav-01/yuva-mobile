import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import CheckoutPriceDetails from '../../../../components/CheckoutPriceDetails'
import CouponCard from '../../../../components/CouponCard'
import Header from '../../../../components/Header'
import ProgressBar from '../../../../components/ProgressBar'
import { useCheckout } from './hooks/useCheckout'
import { styles } from './styles'
import { CHECKOUT, RUPEE, TO_BE_PAID } from './constants'
import { getPlatform } from '../../../../utils/utils'
import SelectList from 'react-native-dropdown-select-list';

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
        planCouponFinalAmount,
        planType,
        PlanTypee,
        setSelectedPlanType,
        selectedPlanType,
        finalamountToBePaid,
        couponFinalAmount } = useCheckout();
        const Platform = getPlatform();
    return (
        <SafeAreaView style={styles.container}>
            <Header showBackButton={true} title={CHECKOUT} hideMenu={true} showCart={false} />
            <KeyboardAvoidingView style={styles.container} behavior={Platform.isIOS ? 'padding' : null}>
            <ScrollView
                nestedScrollEnabled={true}
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
                <View style={styles.DropDownStyle}>
                    <Text style={styles.planName}>{`${planName}`}</Text>
                    <SelectList
                    data={PlanTypee ? PlanTypee :[]}
                    placeholder={PlanTypee?.[0]}
                    search={false}
                    setSelected={setSelectedPlanType}
                    boxStyles={styles.boxStyle}
                    inputStyles={styles.inputStyles}
                    dropdownStyles={styles.dropdownStyles}
                    dropdownTextStyles={styles.inputStyles}
        />
                </View>
                <CheckoutPriceDetails isplan={{plan:true}}/>
                <View>
                    <TouchableOpacity
                        onPress={onCheckout}
                        style={styles.touchableButton}>
                        <Text style={styles.tobePaid}> 
                            {TO_BE_PAID} {RUPEE} {(planeCouponCode && !undefined)?couponFinalAmount:finalamountToBePaid}/-
                        </Text>
                    </TouchableOpacity>
                </View>
                <CouponCard isPlan={true} planType={selectedPlanType ? selectedPlanType:PlanTypee[0]} planUuid={planUuid} />
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default CheckoutOurPlan;