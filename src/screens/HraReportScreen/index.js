import {View, Text} from 'react-native';
import React from 'react';
import ReportCard from '../../ReportCard';
import {FlatList} from 'react-native-gesture-handler';
import {HRA_REPORTS} from './constants';

const HraReport = () => {
  const renderItem = ({item}) => {
    return <ReportCard name={item.reportName} date={item.date} />;
  };
  return (
    <View>
      <FlatList
        data={HRA_REPORTS}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HraReport;
