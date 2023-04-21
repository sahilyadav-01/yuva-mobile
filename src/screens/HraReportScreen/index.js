import { View, FlatList } from 'react-native';
import React from 'react';
import ReportCard from '../../ReportCard';
import { useReportCard } from './hooks/useHraReport';
import { styles } from './styles';

const HraReport = () => {
  const { downloadHraReport } = useReportCard();
  const renderItem = ({ item, index }) => {
    return <ReportCard name={item?.name} date={item?.date} filePath={item?.filePath} key={index}/>;
  };
  return (
    <View style={styles.contentContainerStyle}>
        <FlatList
          data={downloadHraReport}
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
          renderItem={renderItem}
        />
    </View>
  );
};

export default HraReport;
