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
import ProductHub from '../../components/ProductHub';

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
    topCategories,
    onSelectCategory,
    onAdd
  } = useHome();
  const mock =
    '{"status":true,"message":null,"id":null,"errorCode":null,"data":{"categoryId":1,"categoryName":"FitnessHub","imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705644917839-productHero.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=5c5175b627eb57b474e1f4baa3491ae530595cea16951d4ec0a22abf650d88e5","productList":[{"subCategoryId":1,"subCategoryName":"FoodSupplement","productResponseDtoForUserList":[{"productId":1,"name":"LowGIRice","originalPrice":900,"finalPrice":900,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"},{"productId":2,"name":"LowGIRice","originalPrice":200,"finalPrice":200,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"}]},{"subCategoryId":2,"subCategoryName":"OilSupplement","productResponseDtoForUserList":[{"productId":3,"name":"LowGIRice","originalPrice":200,"finalPrice":200,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"},{"productId":4,"name":"LowGIRice","originalPrice":200,"finalPrice":200,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"}]}]}}';
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
      />
      <ScrollView nestedScrollEnabled={true}>
        <View>
          <OfferBanner1 bannerData={banner1} />
          <AppointmentTag />
          <Services renderservicesItem={renderservicesItem} />
          {topCategories?.data?.length > 0 && <ProductHub
            onCategoryViewAllPress={onCategoryViewAllPress}
            data={topCategories?.data[activeIndex]}
            categories={topCategories?.data.map(item=>item.categoryName)}
            activeIndex={activeIndex}
            onSelectCategory={onSelectCategory}
            onAdd={onAdd}
          />}
          <OurPlan />
          <PromotionalBanner />
          <PopularHeathCheckupCarousel
            popularPackageName={popularPackageName}
            onHealthPackagePress={onHealthPackagePress}
          />
          <OfferBanner1 bannerData={banner3} />
          <PopularTestPackageCarousel
            popularTest={popularTest}
            onHealthPackagePress={onHealthPackagePress}
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
