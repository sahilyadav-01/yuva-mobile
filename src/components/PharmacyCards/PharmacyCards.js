import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PNG, SVG } from '../../../assets';
import { styles } from './styles';

const PharmacyCards = ({
  name,
  address,
}) => {
  const navigation = useNavigation();
  const bookAppointment = () => {
    navigation.navigate('pharmacyDescription');
  };

  return (
    <View style={styles.CompleteView}>
      <View style={styles.Top}>
        <View style={styles.pngView}>
          <Image source={PNG.PHARMA_CARD_ICON} style={styles.Image} />
        </View>
        <View style={styles.Add}>
          <View style={styles.Cont}>
            <Text style={styles.NameStyle}>
              {name}
            </Text>
            <View style={styles.subCont}>
              <Text style={styles.Year}>
                {'Chemist Remark:'}
              </Text>
              <Text style={styles.subText}>
                {'Medicine Available'}
              </Text>
            </View>
          </View>
          <Text style={styles.ContentStyle}>{'(+91) 7606036942'}</Text>
          <View style={styles.addressView}>
            <SVG.LocationOn />
            <Text style={styles.Address}>
              {address == undefined ? '' : address.slice(0, 50)}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.Button} onPress={bookAppointment}>
        <Text style={styles.ButtonText}>{'Get Medicine'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PharmacyCards;