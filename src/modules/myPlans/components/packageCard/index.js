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
import {useNavigation} from '@react-navigation/native';

const PackageCard = () => {
  const navigation = useNavigation();

  const bookNow = () => {
    navigation.navigate('Doctor');
  };
  const renderItem = props => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.head}>{props.item.packageName}</Text>

        <Text style={styles.expiry}>{props.item.expiryDate}</Text>

        <View style={styles.sideBySide}>
          <Image source={props.item.image} style={styles.imageStyle} />
          <View style={styles.text1}>
            <Text style={styles.textColor}>{props.item.text}</Text>
            <Text style={styles.text2}>
              Used -{props.item.used} Available -{props.item.available}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={bookNow}>
          <Text style={styles.textStyle}> Book Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={PARAMETERS}
      renderItem={renderItem}
      keyExtractor={index => `${index}`}
    />
  );
};

export default PackageCard;
