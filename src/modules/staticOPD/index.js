import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import OpdCard from './components/opdCard';
import SpecialityCard from './components/specialityCard';
import Header from '../../components/Header/index';
import { OPD_CONSULTATION_PROGRAM } from './constant';
const CashlessOPD = ({navigation}) => {
  
  return (
    <View>
      <Header showBackButton={true} title={OPD_CONSULTATION_PROGRAM}/>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <OpdCard />
        <SpecialityCard />
      </ScrollView>
    </View>
  );
};

export default CashlessOPD;
