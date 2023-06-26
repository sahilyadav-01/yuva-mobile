import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ReportCard from '../../ReportCard';
import {BOOKING, VIEW_REPORTS} from './constant';
import {useMyReport} from './hooks/useMyreports';

const MyReports = props => {
  const {bookingId, title, data} = props;

  const renderItem = ({item, index}) => {
    return (
      <ReportCard
        key={index}
        name={item?.fileName}
        date={item?.generatedAt}
        filePath={item?.filePath}
      />
    );
  };
  const {isReportVisible, setIsReportVisible} = useMyReport();
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <View>
          <Text style={styles.bookingIdStyle}>
            {BOOKING}
            {bookingId}
          </Text>
          <Text style={styles.textStyle}> {title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsReportVisible(!isReportVisible);
          }}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle1}>{VIEW_REPORTS}</Text>
        </TouchableOpacity>
      </View>

      {isReportVisible && (
        <View style={styles.reportContainer}>
          <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderItem}
            nestedScrollEnabled={true}
            ItemSeparatorComponent={()=><View style={styles.itemSeparator}/>}
          />
          </View>
        </View>
      )}
    </View>
  );
};

export default MyReports;
