import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ORANGE, ORANGE_GREY } from '../../styles/colors';
import { BUTTONCONTENT, COST, TESTCOUNT } from './constant';
import { styles } from './styles';

const getTestCount = (item) => {
  return TESTCOUNT(item.parameterCount === 0 ? 1 : item.parameterCount);
};

const CarouselItem4 = (props) => {
  const { imgPath, index, totalItem, onPressAdd, item } = props;
  const {existingIds} = useSelector(state=>state.cart)
  return (
    <View
      style={[
        styles.container,
        { marginRight: index !== totalItem - 1 ? 15 : undefined },
      ]}
    >
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
        <Text style={styles.textStyle}>{getTestCount(item)}</Text>
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.costStyle}>{COST(item.cost)}</Text>
      </View>
      <View style={styles.addButtonViewContainer}>
        <TouchableOpacity
        disabled={existingIds.length > 0 && existingIds.includes(item.testId.toString())}
        onPress={() => onPressAdd({name:item.testName,cost:item.cost,productType:'TEST',productId:item.testId.toString()})}
          style={{...styles.addButtonContainer,backgroundColor:existingIds.length > 0 && existingIds.includes(item.testId.toString()) ? ORANGE_GREY : ORANGE}}
        >
          <Text style={styles.buttonText}>{BUTTONCONTENT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarouselItem4;
