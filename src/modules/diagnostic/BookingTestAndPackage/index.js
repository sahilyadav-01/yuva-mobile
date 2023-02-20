import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { ABOUT_PACKAGE, BOOK_NOW, INSTRUCTIONS, LAB } from './constants';
import Header from '../../../components/Header'
import { useBookingTestAndPackage } from './hooks/useBookingTestAndPackage';
import { SVG } from '../../../../assets';
import { DIAGNOSTIC_HEALTH_PACKAGE } from '../constants';


const BookingTestAndPackage = () => {
    const {
        packageDetails,
        packageList,
        onUpdate,
        bookPackageScreen
    } = useBookingTestAndPackage();


    const renderItem = ({ item, index }) => {
        const onToggle = () => {
            onUpdate(index)
        }
        const RenderParameters = ({ item, index }) => {
            return (

                <View>
                    <Text style={styles.dropDownText}>
                        {item.parameterName}
                    </Text>
                </View >
            )
        }

        return (
            <View>
                <TouchableOpacity onPress={onToggle}>
                    {!item.isExpanded ?
                        <View style={styles.itemView}>
                            <Text style={styles.itemText}>
                                {item.attributeName}
                            </Text>
                            <Text style={styles.itemCount}>

                                <Text>-{item.parameterCount}</Text>
                            </Text>
                            <View style={styles.drop} >

                                < SVG.dropDown />
                            </View>
                        </View>
                        : <View style={styles.dropDown}>
                            <Text style={styles.itemHead}>
                                {item.attributeName}
                                <Text>-{item.parameterCount}</Text>
                            </Text>
                            <View style={styles.dropDownDetails}>
                                {item &&
                                    <FlatList
                                        renderItem={RenderParameters}
                                        data={item.parameters}
                                        keyExtractor={(item) => item.id}
                                        showsHorizontalScrollIndicator={false}
                                    />}
                            </View>
                        </View>
                    }
                </TouchableOpacity>
            </View>

        );
    }
    if (!packageDetails) {
        return null;
    }
    return (
        <View>
            <Header showBackButton={true} title={DIAGNOSTIC_HEALTH_PACKAGE}/>
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.booksID}>

                    <View>
                        <View>
                            <Text style={styles.booked}>
                                {packageDetails?.packageName}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.bookingDetails}>
                                {ABOUT_PACKAGE}
                            </Text>
                            <Text style={styles.color}>{packageDetails?.description}</Text>
                            <Text style={styles.instructDetails}>
                                {INSTRUCTIONS}
                            </Text>
                            <Text style={styles.color}>{packageDetails?.prerequisites}</Text>
                            <Text style={styles.totalLabDetails}>
                                {packageDetails?.totalTest} {LAB}
                            </Text>
                            {packageList &&
                                <FlatList
                                    renderItem={renderItem}
                                    data={packageList}
                                    keyExtractor={(item) => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />

                            }
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                     onPress={bookPackageScreen}                        
                    style={styles.touchable}>
                    <Text style={styles.textBook}>
                        {BOOK_NOW}
                    </Text>
                </TouchableOpacity>
                <View>
                </View>
            </ScrollView >
        </View >
    );
};

export default BookingTestAndPackage;