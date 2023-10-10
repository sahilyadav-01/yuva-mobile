import React from 'react';
import {styles as style} from './style';
import {useHome} from './hooks/useHome';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';
import OurPlan from './components/OurPlan';
import PopularHeathCheckupCarousel from './components/PopularHeathCheckupCarousel';
import PopularTestPackageCarousel from './components/PopularTestPackageCarousel.js';
import OfferBanner1 from './components/OfferBanner';
import PackagesOffer from './components/PackagesOffer';
import AppointmentTag from './components/appointmentTag';
import PromotionalBanner from './components/PromotionalOffer';
import { SVG } from '../../../assets';
import { HomeSearch } from './components/homeSearch';

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
    banner3,
    loggedIn,
    showSearchView,
    onBackPress
  } = useHome();
  const styles = style();
  if(showSearchView) {
    return (
      <SafeAreaView style={[styles.container,styles.searchHomeContainer]}>
        <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
        onBackPress={onBackPress}
      />
      <ScrollView nestedScrollEnabled={true}>
      <HomeSearch/>
      </ScrollView>
    </SafeAreaView>
    );
  }
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
        <AppointmentTag />
        <Services renderservicesItem={renderservicesItem} />
        <OurPlan />
        <PromotionalBanner/>
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
          loggedIn={loggedIn}
          onPackagePress={onPackagePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
