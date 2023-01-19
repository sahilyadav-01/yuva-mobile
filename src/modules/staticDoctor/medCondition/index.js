import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {MEDCONDITIONS, MOST_SEARCHED} from '../constant';
const Med = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <Text style={styles.textStyle}>{item.data}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.title}>{MOST_SEARCHED}</Text>
      {/* <View style={styles.boxView}> */}

      <FlatList
        containerStyle={styles.box}
        // horizontal
        numColumns={3}
        data={MEDCONDITIONS}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />

      {/* </View> */}
    </View>
  );
};

export default Med;
