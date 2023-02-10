import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const CarouselItem2 = props => {

  const { popularPackageName } = useSelector(state => state.programAndPlan);
  const { imgPath, index, totalItem, onPressAdd } = props;
  return (
    popularPackageName?.popularPackageResponseDtoList?.map((item) => {

     return <View
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
          <Text style={styles.descriptionStyle}>{item.packageName}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Includes {item.parameterCount} Tests</Text>
        </View>
        <View style={styles.costContainer}>
          <Text style={styles.costStyle}>₹{item.cost}/-</Text>
        </View>
        <View style={styles.addButtonViewContainer}>
          <TouchableOpacity
            onPress={onPressAdd}
            style={styles.addButtonContainer}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    })
  );
};

export default CarouselItem2;
