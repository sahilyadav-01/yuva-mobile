import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ORANGE, ORANGE_GREY } from '../../styles/colors';
import { BUTTONCONTENT } from './constant';
import { useProductCarouselItem } from './hooks/useProductCarouselItem';
import { styles } from './styles';

const ProductCarouselItem = (props) => {
  const { imgPath, index, totalItem, item } = props;

  const { onPackagePress, getTestCount, existingIds, onPressAdd } = useProductCarouselItem({item});

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
          <Text style={styles.descriptionStyle}>{getTestCount(item)}</Text>
        </View>
        <View style={styles.addButtonViewContainer}>
          <TouchableOpacity
            disabled={existingIds.length > 0 && existingIds.includes(item.packageUuid)}
            onPress={onPressAdd}
            style={{ ...styles.addButtonContainer, backgroundColor: existingIds.length > 0 && existingIds.includes(item.packageUuid) ? ORANGE_GREY : ORANGE }}
          >
            <Text style={styles.buttonText}>{BUTTONCONTENT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCarouselItem;