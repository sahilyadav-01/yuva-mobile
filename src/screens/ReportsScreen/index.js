import { View, FlatList } from 'react-native';
import React from 'react';
import MyReports from '../../components/myReports';
import { useReport } from './hooks/useReport';
import { styles } from './styles';

const Reports = () => {
  const renderItem = ({ item }) => {
    return (
      <MyReports
        bookingId={item?.bookingId}
        title={item?.name}
        data={item?.attachmentResponseDtoList}
      />
    );
  };
  const { downloadDiagnosticReport } = useReport();
  return (
    <View style={styles.contentContainerStyle}>
        <FlatList
          data={downloadDiagnosticReport}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
    </View>
  );
};

export default Reports;
