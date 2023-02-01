
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { PNG } from '../../assets';




const MyPlanCard = () => {


    return (
        <View style={styles.viewContainer}>
            <View>
                <Text style={styles.head}>Silver YUVA Plan </Text>
                <Text style={styles.expiry}>Valid Till 12/12/2023</Text>
            </View>
            <View style={styles.sideBySide}>
                <Image source={PNG.PACKAGE} style={styles.imageStyle} />
                <View style={styles.text1}>
                    <Text style={styles.textColor}>Complete Health Checkup</Text>
                    <Text>
                        Used -2Available -2

                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.Available}>Available Tests - 98</Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle} >
                <Text style={styles.textStyle}> Select this package</Text>
            </TouchableOpacity>
            <View style={styles.sideBySide}>
                <Image source={PNG.PACKAGE} style={styles.imageStyle} />
                <View style={styles.text1}>
                    <Text style={styles.textColor}>Full Body Health Checkup</Text>
                    <Text>
                        Used -2Available -2

                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.Available}>Available Tests - 98</Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle} >
                <Text style={styles.textStyle}> Select this package</Text>
            </TouchableOpacity>
        </View>
    )

}
export default MyPlanCard