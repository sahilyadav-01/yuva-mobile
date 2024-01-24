import React from 'react';
import {View, Image, ScrollView, Text, ActivityIndicator} from 'react-native';
import Header from '../../../components/Header';
import ProductHub from '../../../components/ProductHub';
import {getDimensions} from '../../../utils/utils';
import {styles as style} from './styles';
import {useCategoryDetails} from './hooks/useCategoryDetails';

const CategoryDetails = ({navigation, params}) => {
  const {subCategories, onAdd} = useCategoryDetails(
    navigation,
    params,
  );
  const {width, height} = getDimensions();
  const styles = style();
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
            onAdd={onAdd}
          />
          </ScrollView>
        )}
    </View>
  );
};

export default CategoryDetails;
