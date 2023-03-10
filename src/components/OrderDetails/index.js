import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {ORDER_DETAILS, PACKAGE_NAME, TESTS} from './constant';

const OrderDetails = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.textTestStyle}>{item.TEST_TYPE}</Text>
        <Text style={styles.textTestStyle}>{item.TEST_NAME}</Text>
      </View>
    );
  };
  return (
    <>
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <View>
            <Text style={styles.textStyle}>{PACKAGE_NAME}</Text>
          </View>
          <Text style={styles.textStyle1}>{ORDER_DETAILS}</Text>
        </View>
        <FlatList
          nestedScrollEnabled
          data={TESTS}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default OrderDetails;
