
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
const AvailableBookingCard = ({
  name, id, packageName, imageUrl, packageUuid, nameBooking
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
                <Text style={styles.packageTest}>{name}</Text>
                <Text style={styles.packageTest}>{nameBooking}</Text>         
              </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AvailableBookingCard;



