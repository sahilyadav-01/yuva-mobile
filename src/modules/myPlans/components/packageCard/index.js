import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PNG} from '../../../../../assets';

const PackageCard = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.sideBySide}>
        <Image source={PNG.DOCTOR} style={styles.imageStyle} />
        <View style={styles.text1}>
          <Text style={styles.textColor}>OPD Consulation</Text>
          <Text>Used -2 Available -2</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textStyle}> Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PackageCard;
