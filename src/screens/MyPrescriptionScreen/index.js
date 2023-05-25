import { FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import ReportCard from '../../ReportCard';
import { styles } from './styles';
import { useMyPrescription } from './hooks/useMyPrescription';
import Header from '../../components/Header';
import { MY_PRESCRIPTIONS } from './constants';

const MyPrescription = () => {
  const renderItem = ({ item, index }) => {
    return <ReportCard name={item?.customerName} date={item?.createdAt} filePath={item?.filePath} key={index}/>;
  };
  const {myPrescriptionReport}=useMyPrescription();

  return (
    <SafeAreaView style={styles.contentContainerStyle}>
       <Header title={MY_PRESCRIPTIONS} showBackButton={true} hideMenu={true}/>
        <FlatList
          data={myPrescriptionReport}
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
          renderItem={renderItem}
        />
    </SafeAreaView>
  );
};

export default MyPrescription;
