import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useLifeStyleCard} from './hooks/useLifeStyleCard';
import {styles} from './styles';

const LifeStyleCard = ({name, image, enumName, onPackagePress}) => {
  const {imageData} = useLifeStyleCard();
  return (
    <TouchableOpacity
      style={styles.touchableOpacityContainerStyle}
      disable={true}
      onPress={() => onPackagePress(enumName, name)}>
      <View style={styles.subTopContainerStyle}>{imageData[image]}</View>
      <Text style={styles.subBottomContainerStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default LifeStyleCard;
