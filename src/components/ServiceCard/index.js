import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useServiceCard } from './hooks/useServiceCard';

const ServiceCard = ({ name, screenname, image }) => {
  const { onpress, imageData } = useServiceCard({ screenname });

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
