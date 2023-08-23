import React from 'react';
import OurPlan from './Components/OurPlan';
import {styles as style} from './style';
import {useHome} from './hooks/useHome';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';

export const HomeScreen = () => {
  const { name, renderservicesItem, renderLifeStyleItem, onPackagePress } = useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header initial={name ?? null} showSearch={true} showLocation={true}/>
      <ScrollView>
        <Services renderservicesItem={renderservicesItem} />
        <OurPlan/>
        <LifeStyle renderLifeStyleItem={renderLifeStyleItem} onPackagePress={onPackagePress} />
      </ScrollView>
    </SafeAreaView>
  );
};