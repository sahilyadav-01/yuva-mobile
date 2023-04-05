import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {DEDICATED_DOCTOR, DEDICATED} from '../../constant';
const DedicatedDoctor = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.Ocircle} key={index}>
        <Image source={item.image} />
        <Text style={styles.textStyle}>{item.data}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.headTitle}>{DEDICATED}</Text>
      <FlatList
        data={DEDICATED_DOCTOR}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderItem}
        nestedScrollEnabled={true}
        />
    </View>
  );
};

export default DedicatedDoctor;
