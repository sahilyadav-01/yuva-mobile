import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { SVG } from '../../../../../assets'
import CheckoutPriceDetails from '../../../../components/CheckoutPriceDetails'
import Header from '../../../../components/Header'
import ProgressBar from '../../../../components/ProgressBar'
import { CHECKOUT, RUPEE, TO_BE_PAID } from './constants'
import { useCheckout } from './hooks/useCheckout'
import { styles } from './styles'

const CheckoutOurPlan = () => {
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        TermsAndCondtionChecked,
        onCheckout } = useCheckout();

        const price = Math.max(yearlyPrice, quarterlyPrice, halfYearlyPrice)

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
                <CheckoutPriceDetails price={price} isPrice={{ yearlyPrice, quarterlyPrice, halfYearlyPrice }} />
                <View>
                    <TouchableOpacity
                         onPress={onCheckout}
                        style={styles.touchableButton}>
                        <Text style={styles.tobePaid}>
                            {TO_BE_PAID} {RUPEE} {price}/-
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CheckoutOurPlan;