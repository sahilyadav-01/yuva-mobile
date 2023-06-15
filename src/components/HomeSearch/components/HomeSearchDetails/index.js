import React from 'react';
import {ScrollView, Text, View,ActivityIndicator} from 'react-native';
import Header from '../../../Header';
import {SEARCH, SEARCH_RESULT} from './constants';
import {useRoute} from '@react-navigation/native';
import {useHomeSearchDetails} from './hooks/useHomeScreenDetails';
import {styles} from './styles';
import Packages from '../../../PackagesList/packages';

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
    addToCartLoad
  } = useHomeSearchDetails(route);
  const{
    ScrollViewContainerStyle,
    SearchText,
    SearchTextView,
    packageContainerStyle,
    screenContainer,
    childContainerStyle,
    addToCartLoader
  }=styles(addToCartLoad)
  return (
    <View>
      <Header
        title={SEARCH}
        hideMenu={false}
        showCart={true}
        showBackButton={true}
        showSearch={true}
        searchPlaceholder={name || item}
        editable={false}
      />
      <ScrollView
        contentContainerStyle={ScrollViewContainerStyle}
        nestedScrollEnabled={true}>
        <View style={SearchTextView}>
          <Text style={SearchText}>{SEARCH_RESULT}</Text>
        </View>
        <View style={[screenContainer, childContainerStyle]}>
        {addToCartLoad ? (
            <View style={[childContainerStyle, addToCartLoader]}>
              <ActivityIndicator size={'small'} />
            </View>
          ) : (
            <>
        <View>
          <Packages
            extraStyles={packageContainerStyle}
            onPackageSelect={arg => onPackageSelect(arg)}
            onPackagePress={obj => onPackagePress(obj)}
            data={packageData || []}
            emptyText="No data found"
            showHeading={true}
            heading={'Package'}
          />
        </View>
        {(testData && testData.length >0) &&
        <View>
          <Packages
            extraStyles={packageContainerStyle}
            onPackageSelect={arg => onTestSelect(arg)}
            onPackagePress={obj => onPackagePress(obj)}
            data={testData || []}
            emptyText="No data found"
            showHeading={true}
            heading={'Tests'}
          />
        </View>}</>)}
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeSearchDetails;
