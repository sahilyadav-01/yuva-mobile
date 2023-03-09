import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ReportCard from '../../ReportCard';
import { FlatList } from 'react-native-gesture-handler';
import { useReportCard } from './hooks/useHraReport';
import { styles } from './styles';

const HraReport = () => {
  const { downloadHraReport } = useReportCard();
  const renderItem = ({ item }) => {
    return <ReportCard name={item?.name} date={item?.date} filePath={item?.filePath} />;
  };
  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <FlatList
          data={downloadHraReport}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

export default HraReport;
