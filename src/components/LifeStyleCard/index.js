import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useLifeStyleCard } from './hooks/useLifeStyleCard';
import { styles } from './styles';

const LifeStyleCard = ({ name, screenName, image }) => {
  const { onpress, imageData } = useLifeStyleCard({ screenName });

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

export default LifeStyleCard;
