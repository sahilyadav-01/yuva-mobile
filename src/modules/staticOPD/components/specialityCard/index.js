import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {SPECIALITIES, SPECIALITY} from '../../constant';
import {styles} from './styles';
const SpecialityCard = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.imageStyle} key={index}>
        <Image source={item.image} />
        <Text style={styles.imageName}>{item.imageName}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.textStyle}>{SPECIALITIES}</Text>
      <FlatList
        data={SPECIALITY}
        keyExtractor={(item, index) => `${index}`}
        nestedScrollEnabled={true}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SpecialityCard;
