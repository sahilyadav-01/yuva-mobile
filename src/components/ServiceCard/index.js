import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useServiceCard } from '../ServiceContainer/hooks/useServiceContainer.js.js';

const ServiceCard = ({ name, screenName, image }) => {
  const { onpress, imageData } = useServiceCard({ screenName });

  return (
    <TouchableOpacity
      style={styles.touchableOpacityContainerStyle}
      disable={true}
      onPress={onpress}>
      <View style={styles.topContainerStyle}>
        <View style={styles.subTopContainerStyle}>
          <Image source={imageData[`${image}`]} style={styles.imageContainerStyle} />
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
