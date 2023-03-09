import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {MY_REPORTS} from './constant';
import {SVG} from '../../../assets';
import ReportCard from '../../ReportCard';

const MyReports = props => {
  const {bookingId, title, data} = props;
  const [isReportVisible, setIsReportVisible] = useState(false);
  const renderItem = ({item}) => {
    return <ReportCard name={item.reportName} date={item.date} />;
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <View>
          <Text style={styles.bookingIdStyle}>Booking Id - {bookingId}</Text>
          <Text style={styles.textStyle}> {title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsReportVisible(!isReportVisible);
          }}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle1}> View Reports</Text>
        </TouchableOpacity>
      </View>

      {isReportVisible && (
        <View style={styles.reportContainer}>
          <FlatList
            data={data}
            keyExtractor={index => `${index}`}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
};

export default MyReports;
