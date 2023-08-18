import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useServiceCard } from './hooks/useServiceCard';
import { styles } from './styles';
import { SVG } from '../../../assets';

const ServiceCard = ({ name, screenName, icon }) => {
  const { onpress, imageData } = useServiceCard({ screenName });
  return (
    <TouchableOpacity
      style={styles.touchableOpacityContainerStyle}
      disable={true}
      onPress={onpress}>
        <View style={styles.subTopContainerStyle}>
          {SVG[icon]()}
        </View>
        <Text style={styles.subBottomContainerStyle}>
          {name}
        </Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;