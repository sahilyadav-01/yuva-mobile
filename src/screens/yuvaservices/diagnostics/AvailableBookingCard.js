
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { COMPLETED, CONFIRMED, DOWNLOAD_REPORT, FINISHED, INITIATED, PENDING, RESCHEDULED } from './constants';
import { PNG } from '../../../../assets';
import { checkPermission } from '../../../utils/utils';
const AvailableBookingCard = ({
  name, id, packageName, imageUrl, packageUuid, nameBooking, status, filePath, fileName
}) => {
  const navigation = useNavigation();
  const clicked = () => {
    const params = {
      id: id ?? '', 
      packageData: packageName ? { packageName, packageUuid } : '',
    }
    navigation.navigate('BookingTestAndPackage', params);
  }

  const onDisplay = () => {
    checkPermission(filePath,fileName);
  };
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
                      <TouchableOpacity onPress={onDisplay}><Text style={styles.download}><Image source={PNG.DOWNLOAD}></Image>{DOWNLOAD_REPORT}</Text></TouchableOpacity>)
                      : (<View>
                        {status === INITIATED || status === RESCHEDULED || status === COMPLETED || status === CONFIRMED ? (<Text style={styles.download}>{PENDING}</Text>) : ("")}
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



