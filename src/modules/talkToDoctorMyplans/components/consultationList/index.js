import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ConsultationCard from './ConsultationCard';
import {styles} from './styles';

const ConsultationList = props => {
  const {data, onConsult, onDownload} = props;

  const renderItem = ({item, index}) => {
    return <ConsultationCard key={index} item={item} onConsult={onConsult} />;
  };
  if (!data || data?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Consultations</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderItem}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default ConsultationList;
