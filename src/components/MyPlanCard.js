
import React  from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles';
import { PNG } from '../../assets';
import { AVAIL, AVAILABLE, BOKINGTESTANDPACKAGE, MY_TEST, SELECT_THIS_PACKAGE, USED, VALID } from './constants';
import { getPlanDate } from '../utils/utils';
import { useNavigation } from '@react-navigation/native';

const MyPlanCard = ({ item }) => {
  const navigation = useNavigation();
    const renderItem = (plan) => {
        const onBookingTestandPackage = () => {
          
            const params={
                headerName:MY_TEST,
                packageName: plan?.item?.id ,
                uuid:item?.uuid,
                userVersion:item?.userVersion,
                version:item?.version,
                plan:item?.plan,
             
            }
            navigation.navigate(BOKINGTESTANDPACKAGE, params );
          }
        const used = plan?.item?.used || 0;
        const available = plan?.item?.available || 0;
        if (!plan) {
            return null;
        }
        return (
            <View>
                <View style={styles.sideBySide}>
                    <Image source={PNG.DIAGNOSTICMYPLAN} style={styles.imageStyle} />
                    <View style={styles.text1}>
                        <Text style={styles.textColor}>{plan?.item?.name}</Text>

                        <View style={styles.available}>
                            <Text >
                                {`${USED} ${used}`}

                            </Text>
                            <Text style={styles.textSpacing}>
                            {`${AVAIL} ${available}`}

                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.Available}>{AVAILABLE}</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonStyleMyTest} onPress={onBookingTestandPackage}>
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
                <View style={styles.headView}>
                    <Text style={styles.head}>{item?.name} </Text>
                </View>
                <Text style={styles.expiry}>{VALID}{getPlanDate(item.endDate)}</Text>
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