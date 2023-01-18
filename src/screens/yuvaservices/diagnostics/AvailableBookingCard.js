
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { CANCELLED, COMPLETED, CONFIRMED, DOWNLOAD_REPORT, FINISHED, INITIATED, PENDING, RESCHEDULED } from './constants';
import { PNG } from '../../../../assets';
const AvailableBookingCard = ({
  name, id, packageName, imageUrl, packageUuid, nameBooking, status
}) => {

  const navigation = useNavigation();
  const clicked = () => {
    navigation.navigate('BookingTestAndPackage', {
      id: id ? id : '',
      packageData: packageName ? { packageName, packageUuid } : '',
    });
  }
  return (
    <View>
      <TouchableOpacity disabled={!name} onPress={clicked}>
        <View style={styles.cards}>
          <View style={styles.labTest}>
            <Image
              source={imageUrl}
              style={styles.image}
            />
            <View >
              {name ? (
                <View>
                  <Text style={styles.packageTest}>{name}</Text></View>
              ) : (
                <View style={styles.booking}>
                  <Text style={styles.packageTest}>{nameBooking}</Text>
                  <View >
                    {status === FINISHED ? (
                      <TouchableOpacity ><Text style={styles.download}><Image source={PNG.DOWNLOAD}></Image>{DOWNLOAD_REPORT}</Text></TouchableOpacity>)
                      : (<View>
                        {status === INITIATED || status === RESCHEDULED || status === COMPLETED || status===CONFIRMED ? (<Text style={styles.download}>{PENDING}</Text>) : ("")}
                      </View>)}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AvailableBookingCard;



