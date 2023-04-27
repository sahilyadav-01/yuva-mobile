import { View, FlatList } from 'react-native';
import React from 'react';
import MyReports from '../../components/myReports';
import { useReport } from './hooks/useReport';
import { styles } from './styles';

const Reports = () => {
  const renderItem = ({ item, index }) => {
    return (
      <MyReports
        bookingId={item?.bookingId}
        title={item?.name}
        data={item?.attachmentResponseDtoList}
        key={index}
      />
    );
  };
  const { downloadDiagnosticReport } = useReport();
  return (
    <View style={styles.contentContainerStyle}>
        <FlatList
          data={downloadDiagnosticReport}
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
          renderItem={renderItem}
        />
    </View>
  );
};

export default Reports;
