import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLifeStyleCard } from './hooks/useLifeStyleCard';
import { styles } from './styles';

const LifeStyleCard = ({ name, image }) => {
  const { imageData } = useLifeStyleCard();

  return (
    <TouchableOpacity
      style={styles.touchableOpacityContainerStyle}
      disable={true}
      // onPress={onpress}
      >
      <View style={styles.topContainerStyle}>
        <View style={styles.subTopContainerStyle}>
          {imageData[image]}
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

export default LifeStyleCard;
