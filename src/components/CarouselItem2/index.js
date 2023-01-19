import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';

const CarouselItem2 = props => {
  const {
    imgPath,
    index,
    totalItem,
    onPressAdd,
    description,
    subText: text,
  } = props;
  let mockData = [
    {description, text},
    {description, text},
    {description, text},
    {description, text},
    {description, text},
  ];
  return (
    <View
      style={{
        ...styles.container,
        marginRight: index !== totalItem - 1 ? 15 : undefined,
      }}>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={imgPath}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>
          {mockData[index]?.description}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{mockData[index]?.text}</Text>
      </View>
      <View style={styles.addButtonViewContainer}>
        <TouchableOpacity
          onPress={onPressAdd}
          style={styles.addButtonContainer}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarouselItem2;
