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
import {AVAILABLE, BOOK_NOW, PARAMETERS, USED} from './constant';
import {useNavigation} from '@react-navigation/native';

const PackageCard = () => {
  const navigation = useNavigation();

  const bookNow = () => {
    navigation.navigate('Doctor');
  };
  const renderItem = ({item}) => {
    const {packageName, expiryDate, used, available, text} = item;
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.head}>{packageName}</Text>

        <Text style={styles.expiry}>{expiryDate}</Text>

        <View style={styles.sideBySide}>
          <Image source={PNG.DOCTOR} style={styles.imageStyle} />
          <View style={styles.text1}>
            <Text style={styles.textColor}>{text}</Text>
            <Text style={styles.text2}>
              {USED} {used} {AVAILABLE} {available}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={bookNow}>
          <Text style={styles.textStyle}>{BOOK_NOW}</Text>
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
