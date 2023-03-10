import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {ORDER_DETAILS, PACKAGE_NAME, TESTS} from './constant';

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState(false);
  const renderItem = ({item}) => {
    return (
      <>
        <Text style={styles.textTestStyle}>{item.TEST_TYPE}</Text>
        <Text style={styles.textTestStyle}>{item.TEST_NAME}</Text>
      </>
    );
  };
  return (
    <>
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <View>
            <Text style={styles.textStyle}>{PACKAGE_NAME}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setOrderDetails(!orderDetails);
            }}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle1}>{ORDER_DETAILS}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {orderDetails && (
        <ScrollView
          nestedScrollEnabled
          style={styles.orderDetailsContainer}
          showsVerticalScrollIndicator>
          <FlatList
            data={TESTS}
            keyExtractor={index => `${index}`}
            renderItem={renderItem}
          />
        </ScrollView>
      )}
    </>
  );
};

export default OrderDetails;
