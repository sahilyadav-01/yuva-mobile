import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { BUTTONCONTENT, COST, TESTCOUNT } from './constant';
import { styles } from './styles';

const CarouselItem4 = props => {

  const { imgPath, index, totalItem, onPressAdd, item } = props;

  return (
    <View
      style={[
        styles.container,
        { marginRight: index !== totalItem - 1 ? 15 : undefined },
      ]}>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={imgPath}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>{item.testName}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{TESTCOUNT(item.parameterCount === 0 ? 1 : item.parameterCount)}</Text>
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.costStyle}>{COST(item.cost)}</Text>
      </View>
      <View style={styles.addButtonViewContainer}>
        <TouchableOpacity
          onPress={onPressAdd}
          style={styles.addButtonContainer}>
          <Text style={styles.buttonText}>{BUTTONCONTENT}</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default CarouselItem4;