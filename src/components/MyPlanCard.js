
import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles';
import { PNG } from '../../assets';
import { AVAILABLE, SELECT_THIS_PACKAGE, USED } from './constants';


const MyPlanCard = ({ item }) => {
    const renderItem = (plan) => {
        if (!plan) {
            return null;
        }
        return (
            <View>
                <View style={styles.sideBySide}>
                    <Image source={PNG.DIAGNOSTICMYPLAN} style={styles.imageStyle} />
                    <View style={styles.text1}>
                        <Text style={styles.textColor}>{plan?.item?.name}</Text>
                        <Text>
                            {USED} {plan?.item?.used}

                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.Available}>{AVAILABLE}{plan?.item?.available}</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonStyle} >
                        <Text style={styles.textStyle}>{SELECT_THIS_PACKAGE}</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
    if (!item) {
        return null;
    }
    return (

        <View style={styles.viewContainer}>
            <View>
                <Text style={styles.head}>{item?.name} </Text>
                <Text style={styles.expiry}>{item.endDate}</Text>
            </View>
            {item.assignedAttributeResponseDto.length &&
                <FlatList
                    renderItem={renderItem}
                    data={item.assignedAttributeResponseDto}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            }
        </View>
    )

}
export default MyPlanCard