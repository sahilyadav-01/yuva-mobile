import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { ABOUT_PACKAGE, ABOUT_TEST, BOOK_NOW, BUTTON_TEXT,  INSTRUCTIONS, LAB } from './constants';
import Header from '../../../components/Header'
import { useBookingTestAndPackage } from './hooks/useBookingTestAndPackage';
import { SVG } from '../../../../assets';
import { useRoute } from '@react-navigation/native';


const BookingTestAndPackage = () => {
    const {
        packageDetails,
        packageList,
        onUpdate,
        bookPackageScreen,
        showCartButton,
        onAddToCartPress,
        renderData,
        isTest,
        isDisabled,
        testDetails,
        headerTitle,
        isScreenRes
    } = useBookingTestAndPackage();
    const renderItem = ({ item, index }) => {
        const onToggle = () => {
            onUpdate(index)
        }
        const RenderParameters = ({ item, index }) => {
            return (

                <View key={index}>
                    <Text style={styles.dropDownText}>
                        {item.parameterName}
                    </Text>
                </View >
            )
        }

        return (
            <View>
                <TouchableOpacity onPress={onToggle} disabled={!item?.parameterCount>0}>
                    {!item.isExpanded ?
                        <View style={styles.itemView}>
                            <View >
                                <Text style={styles.itemText}>
                                    {item?.attributeName ?? item?.name}{" "}
                                    {item?.parameterCount > 0 &&
                                        <Text style={styles.itemCount}>-{item?.parameterCount ?? item?.parameters?.length} Test</Text>}
                                </Text>
                            </View>
                            <View >
                            </View>
                            {item?.parameterCount > 0 &&
                                <View style={styles.drop} >

                                    <SVG.dropDown />
                                </View>}
                        </View>
                        : <View style={styles.dropDown}>
                            <Text style={styles.itemHead}>
                                {item?.attributeName ?? item?.name}{" "}
                                <Text>-{item?.parameterCount ?? item?.parameters?.length}</Text>
                            </Text>
                            <View style={styles.dropDownDetails}>
                                {item &&
                                    <FlatList
                                        renderItem={RenderParameters}
                                        data={item.parameters}
                                        keyExtractor={(item, index) => `${index}`}
                                        showsHorizontalScrollIndicator={false}
                                        nestedScrollEnabled={true}
                                    />}
                            </View>
                        </View>
                    }
                </TouchableOpacity>
            </View>

        );
    }
    if (!renderData) return null;
    return (
        <View>
            <Header showBackButton={true} title={headerTitle()} />
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.booksID}>

                    <View>
                        <View>
                            <Text style={styles.booked}>
                                {packageDetails?.packageName || testDetails?.name}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.bookingDetails}>
                                {isTest ? ABOUT_TEST : ABOUT_PACKAGE}
                            </Text>
                            <Text style={styles.color}>{packageDetails?.description}</Text>
                            {packageDetails?.prerequisites && <>
                                <Text style={styles.instructDetails}>
                                    {INSTRUCTIONS}
                                </Text>
                                <Text style={styles.color}>{packageDetails?.prerequisites}</Text></>}
                            {packageDetails?.parameterCount >= 0 && <Text style={styles.totalLabDetails}>
                             {packageDetails?.parameterCount === 0 ? 1 : packageDetails.parameterCount} {LAB}
                            </Text>}
                            {packageList &&
                                <FlatList
                                    renderItem={renderItem}
                                    data={packageList}
                                    keyExtractor={(item, index) => `${index}`}
                                    showsHorizontalScrollIndicator={false}
                                    nestedScrollEnabled={true}
                                />

                            }
                        </View>
                    </View>
                </View>
                {showCartButton ? <TouchableOpacity
                    onPress={onAddToCartPress} 
                    disabled={isDisabled}
                    style={styles.touchable(isDisabled)}
                >
                    <Text style={styles.textBook}>
                        {BUTTON_TEXT}
                    </Text>
                </TouchableOpacity> : 
                   <View>
                {!isScreenRes &&                
                <TouchableOpacity
                    onPress={bookPackageScreen}
                    style={styles.touchable()}>
                    <Text style={styles.textBook}>
                        {BOOK_NOW}
                    </Text>
                </TouchableOpacity>
                }
                </View>}
                <View>
                </View>
            </ScrollView >
        </View >
    );
};

export default BookingTestAndPackage;