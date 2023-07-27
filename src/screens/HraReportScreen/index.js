import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import ReportCard from '../../ReportCard';
import {useReportCard} from './hooks/useHraReport';
import {styles} from './styles';
import {EMPTY_TEXT, ERROR_TEXT} from './constants';

const HraReport = () => {
  const {downloadHraReport, hraLoading, hraError} = useReportCard();
  const renderItem = ({item, index}) => {
    return (
      <ReportCard
        name={item?.name}
        date={item?.date}
        filePath={item?.filePath}
        key={index}
      />
    );
  };

  if (hraLoading)
    return (
      <View style={styles.emptyView}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  else if (hraError)
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>{ERROR_TEXT}</Text>
      </View>
    );
  else {
    return (
      <View style={styles.contentContainerStyle}>
        {downloadHraReport?.length === 0 ? (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>{EMPTY_TEXT}</Text>
          </View>
        ) : (
          <FlatList
            data={downloadHraReport}
            keyExtractor={(item, index) => `${index}`}
            nestedScrollEnabled={true}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        )}
      </View>
    );
  }
};

export default HraReport;
