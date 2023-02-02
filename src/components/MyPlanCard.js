
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { PNG } from '../../assets';
import { AVAILABLE, SELECT_THIS_PACKAGE, USED } from './constants';


const MyPlanCard = ({ item }) => {

    return (

        <View style={styles.viewContainer}>
            <View>

                <Text style={styles.head}>{item?.name} </Text>
                <Text style={styles.expiry}>{item.endDate}</Text>


            </View>

            {item.assignedAttributeResponseDto.map((i) => {
                return (
                    <View>
                        <View style={styles.sideBySide}>
                            <Image source={PNG.PACKAGE} style={styles.imageStyle} />
                            <View style={styles.text1}>
                                <Text style={styles.textColor}>{i?.name}</Text>
                                <Text>
                                    {USED} {i?.used}

                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.Available}>{AVAILABLE}{i.available}</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.buttonStyle} >
                                <Text style={styles.textStyle}>{SELECT_THIS_PACKAGE}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </View>
    )

}
export default MyPlanCard