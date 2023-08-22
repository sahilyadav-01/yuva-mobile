import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles as style } from './style';
import { useHome } from './hooks/useHome';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';
import PopularHeathCheckupCarousel from './components/PopularHeathCheckupCarousel';

export const HomeScreen = () => {
  const { name, renderservicesItem, renderLifeStyleItem, onPackagePress, popularPackageName, onHealthPackagePress, popularTest } = useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header initial={name ?? null} showSearch={true} showLocation={true} />
      <ScrollView>
        <Services renderservicesItem={renderservicesItem} />
        <PopularHeathCheckupCarousel popularPackageName={popularPackageName} onHealthPackagePress={onHealthPackagePress} />
        <LifeStyle renderLifeStyleItem={renderLifeStyleItem} onPackagePress={onPackagePress} />
      </ScrollView>
    </SafeAreaView>
  );
};