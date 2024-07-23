import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {PNG} from '../../../assets';

function ImageContainer(props) {
  return (
    <View style={styles.detailsContainer}>
      <View style={{width: '51%'}}>
        <Text style={styles.headingText}>
          Ambulance Services with best Facility
        </Text>
        <Text style={styles.descriptionText}>
          Reliable Ambulance Services: Your Best Facility in Times of Need
        </Text>
      </View>
      <Image
        source={PNG.AmbulanceImage}
        resizeMode="contain"
        style={{width: '49%'}}
      />
    </View>
  );
}

export default ImageContainer;
