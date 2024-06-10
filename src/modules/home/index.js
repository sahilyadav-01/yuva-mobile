import React from 'react';
import {styles as style} from './style';
import {useHome} from './hooks/useHome';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
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
import { MARINER } from '../../styles/colors.js';
import { CENTER } from '../../styles/constants.js';
import { Text } from 'react-native';

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
    homePackages,
    onViewAllServices,
    enableGps,
    currentCityDetails
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
      {enableGps && <View style={{marginBottom:8,paddingHorizontal:16,alignItems:'center'}}>
        <Text>Please turn on GPS in settings to access the current location</Text>
        </View>}
        {!enableGps && currentCityDetails?.value?.toUpperCase() === 'CITY NOT FOUND'  && <View style={{marginBottom:8,paddingHorizontal:16,alignItems:'center'}}>
        <Text>Unable to fetch the current location</Text>
        </View>}
      <ScrollView nestedScrollEnabled={true}>
        <View style={{backgroundColor:'white'}}>
          <OfferBanner1 bannerData={banner1} />
          <AppointmentTag />
          <Services renderservicesItem={renderservicesItem} onViewAllServices={onViewAllServices}/>
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
