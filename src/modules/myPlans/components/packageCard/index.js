import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PNG} from '../../../../../assets';
import {PARAMETERS} from './constant';

const PackageCard = () => {
  const renderItem = item => {
    console.log(item.item);
    return (
      <View style={styles.viewContainer}>
        <View style={styles.sideBySide}>
          <Image source={item.item.image} style={styles.imageStyle} />
          <View style={styles.text1}>
            <Text style={styles.textColor}>{item.item.text}</Text>
            <Text>
              Used -{item.item.used} Available -{item.item.available}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}> Book Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <FlatList data={PARAMETERS} renderItem={renderItem} />;
};

export default PackageCard;
