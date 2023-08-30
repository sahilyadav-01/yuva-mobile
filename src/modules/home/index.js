import React from 'react';
import {styles as style} from './style';
import {useHome} from './hooks/useHome';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';
import OurPlan from './components/OurPlan';
import PopularHeathCheckupCarousel from './components/PopularHeathCheckupCarousel';
import PopularTestPackageCarousel from './components/PopularTestPackageCarousel.js';
import OfferBanner1 from './components/OfferBanner';
import PackagesOffer from './components/PackagesOffer';

export const HomeScreen = () => {
  const {
    name,
    renderservicesItem,
    renderLifeStyleItem,
    onPackagePress,
    popularPackageName,
    onHealthPackagePress,
    popularTest,
    banner1,
    banner2,
    banner3,
  } = useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header
        initial={name ?? null}
        showSearch={true}
        showLocation={true}
        searchPlaceholder="Search"
      />
      <ScrollView nestedScrollEnabled={true}>
        <OfferBanner1 bannerData={banner1} />
        <Services renderservicesItem={renderservicesItem} />
        <OurPlan />
        <PopularHeathCheckupCarousel
          popularPackageName={popularPackageName}
          onHealthPackagePress={onHealthPackagePress}
        />
        <PackagesOffer bannerData={banner3} />
        <PopularTestPackageCarousel
          popularTest={popularTest}
          onHealthPackagePress={onHealthPackagePress}
        />
        <LifeStyle
          renderLifeStyleItem={renderLifeStyleItem}
          onPackagePress={onPackagePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
