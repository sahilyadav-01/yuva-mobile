import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import MyReports from '../../components/myReports';
import {useReport} from './hooks/useReport';
import {styles} from './styles';
import {EMPTY_TEXT, ERROR_TEXT} from './constants';
import {MARINER} from '../../styles/colors';

const Reports = () => {
  const {downloadDiagnosticReport, diagnosticLoading, diagnosticError} =
    useReport();
  const renderItem = ({item, index}) => {
    return (
      <MyReports
        bookingId={item?.bookingId}
        title={item?.name}
        data={item?.attachmentResponseDtoList}
        key={index}
      />
    );
  };

  if (diagnosticLoading) {
    return (
      <View style={styles.emptyView}>
        <ActivityIndicator size={'large'} color={MARINER} />
      </View>
    );
  } else if (diagnosticError) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>{ERROR_TEXT}</Text>
      </View>
    );
  } else {
    return downloadDiagnosticReport?.length === 0 ? (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>{EMPTY_TEXT}</Text>
      </View>
    ) : (
      <View style={styles.contentContainerStyle}>
        <FlatList
          data={downloadDiagnosticReport}
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
          renderItem={renderItem}
        />
      </View>
    );
  }
};

export default Reports;
