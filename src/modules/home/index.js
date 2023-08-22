import React from 'react';
import OurPlan from './Components/OurPlan';
import {SafeAreaView} from 'react-native';
import {styles as style} from './style';
import {useHome} from './hooks/useHome';
import Header from '../../components/Header';

export const HomeScreen = () => {
  useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header showSearch={true}/>
      <OurPlan/>
    </SafeAreaView>
  );
};
