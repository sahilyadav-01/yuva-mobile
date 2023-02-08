import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const CarouselItem4 = props => {

  // const { popularTest } = useSelector(state => state.test);

  const { imgPath, index, totalItem, onPressAdd, healthCheckUp } = props;
  // const mockData = {
  //   description: healthCheckUp ? popularTest.map((i) => { return i.packageName }) : 'Lipid Profile',
  //   text: 'Include 83 Tests',
  // };
  // console.log("popularTest", popularTest)
  return (
    // popularTest.map((item) => {
       
      // return
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
        <Text style={styles.descriptionStyle}>jj</Text>
      </View>
      <View style={styles.textContainer}>
        {/* <Text style={styles.textStyle}>Includes {item.parameterCount} Tests</Text> */}
        {/* <Text style={styles.textStyle}>Includes {item.parameterCount} Tests</Text> */}
        <Text style={styles.textStyle}>Includes Tests</Text>
      
      </View>
      <View style={styles.addButtonViewContainer}>
        <TouchableOpacity
          onPress={onPressAdd}
          style={styles.addButtonContainer}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
    // })


  );
};

export default CarouselItem4;
