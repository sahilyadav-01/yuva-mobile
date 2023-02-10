import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

const CarouselItem4 = props => {

  const { imgPath, index, totalItem, onPressAdd, healthCheckUp } = props;
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
      <Text style={styles.descriptionStyle}>Lipid Profile</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>Includes 83 Tests </Text>
    </View>
    <View style={styles.costContainer}>
      <Text style={styles.costStyle}>₹1100/- </Text>
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

export default CarouselItem4;
