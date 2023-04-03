import { View, FlatList} from 'react-native';
import React from 'react';
import ReportCard from '../../ReportCard';
import { styles } from './styles';
import { useMyPrescription } from './hooks/useMyPrescription';
import Header from '../../components/Header';
import { MY_PRESCRIPTIONS } from './constants';

const MyPrescription = () => {
  const renderItem = ({ item }) => {
    return <ReportCard name={item?.name} date={item?.createdAt} filePath={item?.filePath} />;
  };
  const {myPrescriptionReport}=useMyPrescription();

  return (
    <View style={styles.contentContainerStyle}>
       <Header title={MY_PRESCRIPTIONS} showBackButton={true} hideMenu={true}/>
        <FlatList
          data={myPrescriptionReport}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
    </View>
  );
};

export default MyPrescription;
