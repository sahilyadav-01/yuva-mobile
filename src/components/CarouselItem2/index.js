import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ORANGE, ORANGE_GREY } from '../../styles/colors';
import { BUTTONCONTENT, COST, TESTCOUNT } from './constant';
import { styles } from './styles';

const getTestCount = (item) => {
  return TESTCOUNT(item.parameterCount === 0 ? item.totalTest : item.parameterCount);
};

const CarouselItem2 = (props) => {
  const navigation = useNavigation();
  const { imgPath, index, totalItem, onPressAdd, item } = props;
  const { existingIds } = useSelector(state => state.cart)
  const onPackagePress = (item) => navigation.navigate('ProductDetails', {
    packageName: item.packageUuid,
    uuid: item.packageUuid ?? null,
    showCartButton: true,
    isTest: item.testId ? true : false,
    name: item.packageName ?? null,
    cost: item.cost ?? null
  });
  return (
    <TouchableOpacity onPress={() => onPackagePress(item)}>
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
          <Text numberOfLines={1} style={styles.descriptionStyle}>{item.packageName}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{getTestCount(item)}</Text>
        </View>
        <View style={styles.costContainer}>
          {item.cost === item.finalCost ? (
            <Text style={styles.costStyle}>{COST(item.cost)}</Text>
          ) : (
            <>
              <Text style={styles.costStyle}>{COST(item.finalCost)}</Text>
              <Text style={styles.discountStyle}>{COST(item.cost)}</Text>
            </>
          )}
        </View>
        <View style={styles.addButtonViewContainer}>
          <TouchableOpacity
            disabled={existingIds.length > 0 && existingIds.includes(item.packageUuid)}
            onPress={() => onPressAdd({ name: item.packageName, cost: item.cost, productType: 'PACKAGE', productId: item.packageUuid })}
            style={{ ...styles.addButtonContainer, backgroundColor: existingIds.length > 0 && existingIds.includes(item.packageUuid) ? ORANGE_GREY : ORANGE }}
          >
            <Text style={styles.buttonText}>{BUTTONCONTENT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem2;