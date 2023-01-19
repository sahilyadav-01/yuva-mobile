import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const CarouselItem3 = props => {
  const {imgPath, index, totalItem, onPressAdd, description} = props;
  let mockData = [
    {description},
    {description},
    {description},
    {description},
    {description},
  ];
  return (
    <View
      style={{
        ...styles.container,
        marginRight: index !== totalItem - 1 ? 15 : undefined,
      }}>
      <View style={styles.iconContainer}>
        <Image resizeMode="contain" source={imgPath} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>
          {mockData[index]?.description}
        </Text>
      </View>
    </View>
  );
};

export default CarouselItem3;
