import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {MY_REPORTS} from './constant';
import {SVG} from '../../../assets';
import ReportCard from '../../ReportCard';

const MyReports = props => {
  const {title, data} = props;
  const [isReportVisible, setIsReportVisible] = useState(false);
  const renderItem = ({item}) => {
    return (
      // <View style={styles.renderItemStyle}>
      //   <SVG.Pdf />
      //   <Text style={styles.reportTextStyle}>{item.reportName}</Text>
      //   <TouchableOpacity>
      //     <SVG.Download />
      //   </TouchableOpacity>
      //   <Text style={styles.dateStyle}>{item.date}</Text>
      // </View>

      <ReportCard name={item.reportName} date={item.date} />
    );
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}> {title}</Text>
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
