import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useServiceCard } from './hooks/useServiceCard';
import { styles } from './styles';
import { SVG } from '../../../assets';

const ServiceCard = ({ name, screenName, image, type, icon }) => {
  const { onpress, imageData } = useServiceCard({ screenName });
  return (
    <TouchableOpacity
      style={styles.touchableOpacityContainerStyle}
      disable={true}
      onPress={onpress}>
      <View style={styles.topContainerStyle}>
        <View style={styles.subTopContainerStyle}>
          {type === 'icon' ? SVG[icon]() : <Image source={imageData[`${image}`]} style={styles.imageContainerStyle} />}
        </View>
      </View>
      <View style={styles.bottomContainerStyle}>
        <Text style={styles.subBottomContainerStyle}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
