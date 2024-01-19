import React from 'react';
import {View, Image, ScrollView, Text, ActivityIndicator} from 'react-native';
import Header from '../../../components/Header';
import ProductHub from '../../../components/ProductHub';
import {getDimensions} from '../../../utils/utils';
import {styles as style} from './styles';
import {useCategoryDetails} from './hooks/useCategoryDetails';

const CategoryDetails = ({navigation, params}) => {
  const {subCategories, onCategoryPress} = useCategoryDetails(
    navigation,
    params,
  );
  const {width, height} = getDimensions();
  const styles = style();
  console.log('SC', subCategories);
  const mock =
    '{"status":true,"message":null,"id":null,"errorCode":null,"data":{"categoryId":1,"categoryName":"FitnessHub","imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705644917839-productHero.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=5c5175b627eb57b474e1f4baa3491ae530595cea16951d4ec0a22abf650d88e5","productList":[{"subCategoryId":1,"subCategoryName":"FoodSupplement","productResponseDtoForUserList":[{"productId":1,"name":"LowGIRice","originalPrice":900,"finalPrice":900,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"},{"productId":2,"name":"LowGIRice","originalPrice":200,"finalPrice":200,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"}]},{"subCategoryId":2,"subCategoryName":"OilSupplement","productResponseDtoForUserList":[{"productId":3,"name":"LowGIRice","originalPrice":200,"finalPrice":200,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"},{"productId":4,"name":"LowGIRice","originalPrice":200,"finalPrice":200,"discountPercentage":0,"imageFilepath":"https://yuva-dev.s3.ap-south-1.amazonaws.com/1705645137562-productInfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T120749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIARHXUMIISTF6OPY65%2F20240119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42142bfc0730f731083f7169d5c745b6f24a0f9ceb368fa2365a64cab9302462"}]}]}}';
  return (
    <View style={{flex: 1}}>
      <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
        title={params?.item?.name}
      />
        {subCategories.loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
        {subCategories.error && (
          <View style={styles.loaderContainer}>
            <Text style={styles.errorText}>Error Fetching Categories</Text>
          </View>
        )}
        {!subCategories.loading && subCategories?.subCategoryData?.productList?.length === 0 && (
          <View style={styles.loaderContainer}>
            <Text style={styles.errorText}>No Categories</Text>
          </View>
        )}
        {!subCategories.loading && subCategories?.subCategoryData?.productList?.length > 0 && (
          <ScrollView style={{flex: 1}}>
          <Image
            source={{uri: params?.item?.imageFilepath}}
            style={{width, height: height * 0.2}}
            resizeMethod="scale"
            resizeMode="stretch"
          />
          <ProductHub
            onCategoryViewAllPress={() => {}}
            showHeading={false}
            data={subCategories?.subCategoryData}
          />
          </ScrollView>
        )}
    </View>
  );
};

export default CategoryDetails;
