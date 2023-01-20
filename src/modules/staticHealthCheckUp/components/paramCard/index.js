import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PARAMETERS} from '../../constant';

const Parameters = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.Ocircle}>
        <Image source={item.image} />
        <Text style={styles.paramText1}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={PARAMETERS}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Parameters;
