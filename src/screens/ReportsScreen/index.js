import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';

import {REPORTS_TITLE} from './constants';
import MyReports from '../../components/myReports';

const Reports = () => {
  const renderItem = ({item}) => {
    return (
      <MyReports
        bookingId={item.bookingId}
        title={item.reportTitle}
        data={item.data}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={REPORTS_TITLE}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Reports;
