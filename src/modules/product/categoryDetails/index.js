import React from 'react';
import {View, Image, ScrollView, Text, ActivityIndicator} from 'react-native';
import {styles as style} from './styles';
import {useCategoryDetails} from './hooks/useCategoryDetails';
import ProductHub from '../productHub';
import {getDimensions} from '../../../utils/utils';
import Header from '../../../components/Header';
import { MARINER } from '../../../styles/colors';

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
            <ActivityIndicator size={'large'} color={MARINER} />
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
          <ScrollView style={styles.container}>
            <View style={{width:'100%',height:height*0.2,paddingHorizontal: 16}}>
          <Image
            source={{uri: params?.item?.imageFilepath}}
            style={{width: '100%', height: '100%'}}
            resizeMethod="auto"
            resizeMode="stretch"
          />
          </View>
          <ProductHub
            onCategoryViewAllPress={() => {}}
            showHeading={false}
            data={subCategories?.subCategoryData}
            onAdd={onAdd}
            categories={[]}
            categoryId={params?.item?.id}
          />
          </ScrollView>
        )}
    </View>
  );
};

export default CategoryDetails;
