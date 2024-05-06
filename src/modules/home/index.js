import React from 'react';
import {styles as style} from './style';
import {useHome} from './hooks/useHome';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';
import OurPlan from './components/OurPlan';
import PopularHeathCheckupCarousel from './components/PopularHeathCheckupCarousel';
import PopularTestPackageCarousel from './components/PopularTestPackageCarousel.js';
import OfferBanner1 from './components/OfferBanner';
import AppointmentTag from './components/appointmentTag';
import PromotionalBanner from './components/PromotionalOffer';
import {HomeSearch} from './components/homeSearch';
import ProductHub from '../product/productHub/index.js';

export const HomeScreen = () => {
  const {
    activeIndex,
    name,
    renderservicesItem,
    renderLifeStyleItem,
    onPackagePress,
    popularPackageName,
    onHealthPackagePress,
    onCategoryViewAllPress,
    popularTest,
    banner1,
    banner3,
    loggedIn,
    showSearchView,
    onBackPress,
    topProducts,
    onSelectCategory,
    onAdd,
    homeTests,
    homePackages
  } = useHome();

  const styles = style();
  if (showSearchView) {
    return (
      <SafeAreaView style={[styles.container, styles.searchHomeContainer]}>
        <Header
          initial={null}
          showSearch={false}
          showLocation={false}
          homeSearch={true}
          onBackPress={onBackPress}
          title='Search'
          showSearchBox={true}
        />
        <HomeSearch />
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
        showLogin={loggedIn !== 'loggedIn'}
        homeScreen={true}
        hideTitle={true}
      />
      <ScrollView nestedScrollEnabled={true}>
        <View>
          <OfferBanner1 bannerData={banner1} />
          <AppointmentTag />
          <Services renderservicesItem={renderservicesItem} />
          {topProducts?.data?.length > 0 && <ProductHub
            onCategoryViewAllPress={onCategoryViewAllPress}
            data={topProducts}
            activeIndex={activeIndex}
            onSelectCategory={onSelectCategory}
            onAdd={onAdd}
            hideFooter={true}
          />}
          <OurPlan />
          {/* <PromotionalBanner /> */}
          <PopularHeathCheckupCarousel
            popularPackageName={homePackages}
            onHealthPackagePress={onHealthPackagePress}
          />
          {/* <OfferBanner1 bannerData={banner3} /> */}
          <PopularHeathCheckupCarousel
            popularPackageName={homeTests}
            onHealthPackagePress={onHealthPackagePress}
            isTest={true}
          />
          <LifeStyle
            renderLifeStyleItem={renderLifeStyleItem}
            loggedIn={loggedIn}
            onPackagePress={onPackagePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
