import React from 'react';
import {ScrollView, Text, View, ActivityIndicator, FlatList} from 'react-native';
import Header from '../../../../components/Header';
import {NO_DATA_FOUND, PACKAGE, SEARCH, SEARCH_RESULT, TEST} from './constants';
import {useRoute} from '@react-navigation/native';
import {useHomeSearchDetails} from './hooks/useHomeSearchDetails';
import {styles} from './styles';
import Packages from '../../../../components/PackagesList/packages';
import RenderProducts from '../../../product/productHub/productList/ProductItem';
import { MARINER } from '../../../../styles/colors';
const HomeSearchDetails = () => {
  const route = useRoute();
  const {
    name,
    item,
    packageData,
    onPackagePress,
    onPackageSelect,
    testData,
    onTestSelect,
    addToCartLoad,
    productData,
    onAddProduct
  } = useHomeSearchDetails(route);
  const {
    ScrollViewContainerStyle,
    SearchText,
    SearchTextView,
    packageContainerStyle,
    screenContainer,
    childContainerStyle,
    addToCartLoader,
    subCategoryList,
    itemSeparator
  } = styles(addToCartLoad);

  const SearchContent = () => {
    const type = route?.params?.type;
    if(addToCartLoad) {
      return (
        <View style={[childContainerStyle, addToCartLoader]}>
        <ActivityIndicator size={'small'} color={MARINER} />
      </View>
      );
    }
    else if(type === 'TEST' || type === 'PACKAGE') {
      return (
        <>
        {testData && testData.length > 0 && (
          <View>
            <Packages
              extraStyles={packageContainerStyle}
              onPackageSelect={arg => onTestSelect(arg)}
              onPackagePress={obj => onPackagePress(obj)}
              data={testData || []}
              emptyText={NO_DATA_FOUND}
              showHeading={true}
              heading={TEST}
            />
          </View>)}
        <View>
          <Packages
            extraStyles={packageContainerStyle}
            onPackageSelect={arg => onPackageSelect(arg)}
            onPackagePress={obj => onPackagePress(obj)}
            data={packageData || []}
            emptyText={NO_DATA_FOUND}
            showHeading={true}
            heading={PACKAGE}
          />
        </View>
      </>
      );
    }
    else if(type === 'PRODUCT') {
      return (
        <FlatList
            key={(_, index) => `product${index}`}
            numColumns={2}
            style={subCategoryList}
            ItemSeparatorComponent={() => <View style={itemSeparator} />}
            data={productData}
            renderItem={({item, index}) => (
              <RenderProducts index={index} item={item} onAdd={() => onAddProduct(item)} />
            )}
          />
      );
    }
  }
  return (
    <View>
      <Header
        title={name || item}
        hideMenu={false}
        showCart={true}
        showBackButton={true}
        editable={false}
      />
      <ScrollView
        contentContainerStyle={ScrollViewContainerStyle}
        nestedScrollEnabled={true}>
        <View style={SearchTextView}>
          <Text style={SearchText}>{SEARCH_RESULT}</Text>
        </View>
        <View style={[screenContainer, childContainerStyle]}>
          <SearchContent/>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeSearchDetails;
