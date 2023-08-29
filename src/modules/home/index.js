import React, { useCallback, useMemo, useRef, useState } from 'react';
import { styles as style } from './style';
import { useHome } from './hooks/useHome';
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Dimensions, View, Alert } from 'react-native';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';
import OurPlan from './components/OurPlan'
import PopularHeathCheckupCarousel from './components/PopularHeathCheckupCarousel';
import PopularTestPackageCarousel from './components/PopularTestPackageCarousel.js';
import { PNG } from '../../../assets';
import { Text } from 'react-native';
import OfferBanner1 from './components/OfferBanner';
import PackagesOffer from './components/PackagesOffer';

export const HomeScreen = () => {
  const { name, renderservicesItem, renderLifeStyleItem, onPackagePress, popularPackageName, onHealthPackagePress, popularTest } = useHome();
  const styles = style();
  const data = [0,0,0,0];
  return (
    <SafeAreaView style={styles.container}>
      <Header initial={name ?? null} showSearch={true} showLocation={true} searchPlaceholder='Search'/>
      <ScrollView nestedScrollEnabled={true}>
        <OfferBanner1 data={data}/>
        <Services renderservicesItem={renderservicesItem} />
        <OurPlan/>
        <PopularHeathCheckupCarousel popularPackageName={popularPackageName} onHealthPackagePress={onHealthPackagePress} />
        <PackagesOffer data={data}/>
        <PopularTestPackageCarousel popularTest={popularTest} onHealthPackagePress={onHealthPackagePress} />
        <LifeStyle renderLifeStyleItem={renderLifeStyleItem} onPackagePress={onPackagePress} />
      </ScrollView>
    </SafeAreaView>
  );
};