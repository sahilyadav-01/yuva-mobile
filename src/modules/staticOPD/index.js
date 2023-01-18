import {View, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import {styles} from './styles';
import OpdCard from './components/opdCard';
import SpecialityCard from './components/specialityCard';
const CashlessOPD = () => {
  return (
    <View>
      <MainHeader />
      <ScrollView
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
