import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PNG} from '../../../../../assets';
import {HRA_BENIFITS, BENIFITS_HRA} from '../../constant';
const BenfitsCard = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.bulletStyle} key={index}>
        <Text style={styles.textStyle}>{'\u2022 '}</Text>

        <Text style={styles.textStyle}>{item.data}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.title}>{HRA_BENIFITS}</Text>
      <FlatList
        data={BENIFITS_HRA}
        keyExtractor={(item, index) => `${index}`}
        nestedScrollEnabled={true}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BenfitsCard;
