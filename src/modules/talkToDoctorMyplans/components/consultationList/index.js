import React from 'react';
import {View, Text, SectionList} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {COMPLETED} from '../../constant';
import ConsultationCard from './ConsultationCard';
import {styles} from './styles';

const ConsultationList = props => {
  const {data, onConsult, onDownload} = props;

  const renderItem = ({item, index}) => {
    return (
      <ConsultationCard
        key={index}
        item={item}
        onConsult={onConsult}
        onDownload={onDownload}
      />
    );
  };
  if (!data || data?.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>{COMPLETED}</Text> */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index + ''}
        renderItem={renderItem}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default ConsultationList;
