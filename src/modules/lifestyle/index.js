import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import EmptyList from './EmptyList';
import Header from '../../components/Header';
import Packages from '../../components/PackagesList/packages';
import {CONTINUE} from '../healthPackages/constants';
import {styles} from './style';
import {useLifestyle} from './hooks/useLifestyle';
import {
  LIFESTYLE_PACKAGES,
  PACKAGES,
  SEARCH_PACKAGES_TESTS,
  TESTS,
} from './constants';
import { BLACK } from '../../styles/colors';

const LifestyleTestsAndPackages = props => {
  const {
    packages,
    select,
    packageData,
    testData,
    renderData,
    addToCartLoad,
    onPackagePress,
    onPackageSelect,
    onContinuePress,
    onSearch,
    placeholder,
  } = useLifestyle(props?.enumName, props?.name);
  const {
    container,
    boxStyles,
    dropdownInputStyles,
    dropdownStyles,
    buttonContainer,
    buttonText,
    testsContainer,
    packagesContainer,
    scrollContainer,
    childContainerStyle,
    addToCartLoader,
    screenStyle,
  } = styles(addToCartLoad,packageData.length === 0 && testData.length === 0);
  if (renderData) {
    return (
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={scrollContainer}
        contentContainerStyle={screenStyle}>
        <Header
          showBackButton={true}
          title={LIFESTYLE_PACKAGES}
          showSearch={true}
          searchPlaceholder={SEARCH_PACKAGES_TESTS}
          onSearch={onSearch}
          showCart={true}
        />
        <View style={[container, childContainerStyle]}>
          {addToCartLoad ? (
            <View style={[childContainerStyle, addToCartLoader]}>
              <ActivityIndicator size={'small'} />
            </View>
          ) : (
            <>
              <SelectList
                setSelected={select}
                search={false}
                data={packages}
                placeholder={placeholder}
                placeholderTextColor={BLACK}
                boxStyles={boxStyles}
                inputStyles={dropdownInputStyles}
                dropdownStyles={dropdownStyles}
                dropdownTextStyles={{color:BLACK}}
              />
              {packageData.length > 0 && (
                <Packages
                  extraStyles={packagesContainer}
                  showHeading={true}
                  heading={PACKAGES}
                  data={packageData}
                  onPackagePress={onPackagePress}
                  onPackageSelect={onPackageSelect}
                />
              )}
              {testData.length > 0 && (
                <Packages
                  extraStyles={testsContainer}
                  showHeading={true}
                  heading={TESTS}
                  data={testData}
                  onPackagePress={onPackagePress}
                  onPackageSelect={onPackageSelect}
                />
              )}
              {packageData.length === 0 && testData.length === 0 && (
                <EmptyList emptyText={'No Data'} />
              )}
              {(packageData.length > 0 || testData.length > 0) && (
                <TouchableOpacity
                  onPress={onContinuePress}
                  style={buttonContainer}>
                  <Text style={buttonText}>{CONTINUE}</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      </ScrollView>
    );
  }
};

export default LifestyleTestsAndPackages;
