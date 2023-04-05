import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ORANGE, ORANGE_GREY } from '../../styles/colors';
import { BUTTONCONTENT, COST } from './constant';
import { styles } from './styles';
import { useCarouselItem4 } from './hooks/useCarouselItem4';

const CarouselItem4 = (props) => {
  const { imgPath, index, totalItem, item } = props;

  const { onTestPress, getTestCount, existingIds, onPressAdd } = useCarouselItem4({ item });

  return (
    <TouchableOpacity onPress={() => onTestPress(item)}>

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
          <Text numberOfLines={1} style={styles.descriptionStyle}>{item.testName}</Text>
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
            disabled={existingIds.length > 0 && existingIds.includes(item.testId.toString())}
            onPress={onPressAdd}
            style={{ ...styles.addButtonContainer, backgroundColor: existingIds.length > 0 && existingIds.includes(item.testId.toString()) ? ORANGE_GREY : ORANGE }}
          >
            <Text style={styles.buttonText}>{BUTTONCONTENT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>

  );
};

export default CarouselItem4;
