import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {PNG, SVG} from '../../../assets';
import {styles} from './styles';
import {usePharmacyCards} from './hooks/usePharmacyCards';
import {TEXT1, TEXT2, TEXT3, TEXT4} from './constant';

const PharmacyCards = ({name, address, number, available, id}) => {
  const {getMedicine} = usePharmacyCards(id, name);

  return (
    <View style={styles.CompleteView}>
      <View style={styles.Top}>
        <View style={styles.pngView}>
          <Image source={PNG.PHARMA_CARD_ICON} style={styles.Image} />
        </View>
        <View style={styles.Add}>
          <View style={styles.Cont}>
            <Text style={styles.NameStyle}>{name}</Text>
            {available && (
              <View style={styles.subCont}>
                <Text style={styles.Year}>{TEXT1}</Text>
                <Text style={styles.subText}>{TEXT2}</Text>
              </View>
            )}
          </View>
          <Text style={styles.ContentStyle}>{number}</Text>
          <View style={styles.addressView}>
            <SVG.LocationOn />
            <Text style={styles.Address}>
              {address == undefined ? '' : address.slice(0, 50)}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.Button} onPress={getMedicine}>
        <Text style={styles.ButtonText}>{TEXT3}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PharmacyCards;
