import React from 'react';
import { styles as style } from './style';
import { useHome } from './hooks/useHome';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';
import OurPlan from './components/OurPlan'
import PopularHeathCheckupCarousel from './components/PopularHeathCheckupCarousel';
import PopularTestPackageCarousel from './components/PopularTestPackageCarousel.js';
import AppointmentTag from './components/appointmentTag';

export const HomeScreen = () => {
  const { name, renderservicesItem, renderLifeStyleItem, onPackagePress, popularPackageName, onHealthPackagePress, popularTest } = useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header initial={name ?? null} showSearch={true} showLocation={true} />
      <ScrollView>
        <AppointmentTag />
        <Services renderservicesItem={renderservicesItem} />
        <OurPlan/>
        <PopularHeathCheckupCarousel popularPackageName={popularPackageName} onHealthPackagePress={onHealthPackagePress} />
        <PopularTestPackageCarousel popularTest={popularTest} onHealthPackagePress={onHealthPackagePress} />
        <LifeStyle renderLifeStyleItem={renderLifeStyleItem} onPackagePress={onPackagePress} />
      </ScrollView>
    </SafeAreaView>
  );
};