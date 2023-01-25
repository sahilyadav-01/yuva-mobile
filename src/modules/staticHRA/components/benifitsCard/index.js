import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PNG} from '../../../../../assets';
import {HRA_BENIFITS, BENIFITS_HRA} from '../../constant';
const BenfitsCard = () => {
  const renderItem = ({item}) => {
    return <Text style={styles.textStyle}>{item.data}</Text>;
  };
  return (
    <View>
      <Text style={styles.title}>{HRA_BENIFITS}</Text>
      <FlatList
        data={BENIFITS_HRA}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BenfitsCard;
