import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {MEDCONDITIONS, MOST_SEARCHED} from '../../constant';
const MedicalCondition = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.box} key={index}>
        <Text style={styles.textStyle}>{item.data}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.title}>{MOST_SEARCHED}</Text>

      <FlatList
        numColumns={3}
        data={MEDCONDITIONS}
        keyExtractor={(item, index) => `${index}`}
        nestedScrollEnabled={true}
        renderItem={renderItem}
        contentContainerStyle={styles.boxView}
      />
    </View>
  );
};

export default MedicalCondition;
