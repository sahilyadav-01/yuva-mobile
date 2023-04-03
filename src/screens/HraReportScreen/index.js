import { View, FlatList } from 'react-native';
import React from 'react';
import ReportCard from '../../ReportCard';
import { useReportCard } from './hooks/useHraReport';
import { styles } from './styles';

const HraReport = () => {
  const { downloadHraReport } = useReportCard();
  const renderItem = ({ item }) => {
    return <ReportCard name={item?.name} date={item?.date} filePath={item?.filePath} />;
  };
  return (
    <View style={styles.contentContainerStyle}>
        <FlatList
          data={downloadHraReport}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
    </View>
  );
};

export default HraReport;
