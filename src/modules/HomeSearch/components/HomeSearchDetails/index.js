import React from 'react';
import {ScrollView, Text, View, ActivityIndicator} from 'react-native';
import Header from '../../../../components/Header';
import {NO_DATA_FOUND, PACKAGE, SEARCH, SEARCH_RESULT, TEST} from './constants';
import {useRoute} from '@react-navigation/native';
import {useHomeSearchDetails} from './hooks/useHomeSearchDetails';
import {styles} from './styles';
import Packages from '../../../../components/PackagesList/packages';
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
  } = useHomeSearchDetails(route);
  const {
    ScrollViewContainerStyle,
    SearchText,
    SearchTextView,
    packageContainerStyle,
    screenContainer,
    childContainerStyle,
    addToCartLoader,
  } = styles(addToCartLoad);
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
                  emptyText={NO_DATA_FOUND}
                  showHeading={true}
                  heading={PACKAGE}
                />
              </View>
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
                </View>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeSearchDetails;
