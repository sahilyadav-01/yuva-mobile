import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SVG} from '../../assets';
import {useReportCard} from './hooks/useReportCard';

const ReportCard = props => {
  const {name, date, filePath} = props;
  const {getPlanDate, downloadReport} = useReportCard(filePath, name);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SVG.Pdf />
        <Text style={styles.reportTextStyle}>{name}</Text>
        <TouchableOpacity
          style={styles.downloadReportStyle}
          onPress={downloadReport}>
          <SVG.Download />
        </TouchableOpacity>
      </View>
      <Text style={styles.dateStyle}>{getPlanDate(date)}</Text>
    </View>
  );
};

export default ReportCard;
