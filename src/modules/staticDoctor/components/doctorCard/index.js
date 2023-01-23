import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {DEDICATED_DOCTOR, DEDICATED} from '../../constant';
const DedicatedDoctor = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.Ocircle}>
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
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />

      {/* </View> */}
    </View>
  );
};

export default DedicatedDoctor;
