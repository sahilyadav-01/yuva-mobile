import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ORDER_DETAILS} from './constant';
import { useOrderDetails } from './hook/useOrderDetails';

const OrderDetails = () => {
  const { itemDtoList} = useOrderDetails();
  const renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.textTestStyle}>{item.name}</Text>
      </View>
    );
  };
  return (
    <>
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle1}>{ORDER_DETAILS}</Text>
        </View>
        <FlatList
          nestedScrollEnabled
          data={itemDtoList}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default OrderDetails;
