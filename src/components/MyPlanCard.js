
import React  from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles';
import { PNG } from '../../assets';
import { AVAIL, AVAILABLE, BOKINGTESTANDPACKAGE, MY_TEST, NOT_AVAILABLE, SELECT_THIS_PACKAGE, USED, VALID } from './constants';
import { getPlanDate } from '../utils/utils';
import { useNavigation } from '@react-navigation/native';
import { AMBER, CYAN_BLUE, ORANGE, DEEP_RED, WHITE, GREY } from '../styles/colors';

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
            if(!item?.locked){
                navigation.navigate(item?.plan ? 'PurchaseScreen' : 'MyCorporateProgram');
            }
            else{
                navigation.navigate(BOKINGTESTANDPACKAGE, params );
            }
          }
        const used = plan?.item?.used || 0;
        const available = plan?.item?.available || 0;
        if (!plan) {
            return null;
        }
        return (
            <View key={plan?.index}>
                <View style={styles.sideBySide}>
                    <Image source={PNG.DIAGNOSTICMYPLAN} style={styles.imageStyle} />
                    <View style={styles.text1}>
                        <Text style={styles.textColor}>{plan?.item?.name}</Text>

                        <View style={styles.available}>
                            <Text style={{ color: GREY }}>
                                {`${USED} ${used}`}

                            </Text>
                            <Text style={styles.textSpacing}>
                            {`${AVAIL} ${available}`}

                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={[styles.Available,{color: available===0 ?DEEP_RED :CYAN_BLUE}]}>{available===0 ? NOT_AVAILABLE : AVAILABLE}</Text>
                </View>

                <View>
                    <TouchableOpacity style={[styles.buttonStyleMyTest,{backgroundColor: available===0 ?AMBER :ORANGE}]} onPress={onBookingTestandPackage} disabled={!available}>
                        <Text style={[styles.textStyle,{color: available===0 ?CYAN_BLUE :WHITE}]}>{SELECT_THIS_PACKAGE}</Text>
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
            <View style={styles.headViewContainer}>
                <View style={styles.headView}>
                    <Text style={styles.head}>{item?.name.length > 26 ? item?.name.substring(0, 26) + '...' : item?.name}</Text>
                </View>
                <Text style={styles.expiry}>{VALID}{getPlanDate(item.endDate)}</Text>
            </View>
            {item.assignedAttributeResponseDto.length &&
                <FlatList
                    renderItem={renderItem}
                    data={item.assignedAttributeResponseDto}
                    keyExtractor={(item, index) => `${index}`}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                />
            }
        </View>
    )

}
export default MyPlanCard