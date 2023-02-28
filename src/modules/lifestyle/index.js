import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from './style';
import Header from '../../components/Header';
import {useLifestyle} from './hooks/useLifestyle';
import Packages from '../../components/PackagesList/packages';
import {CONTINUE} from '../healthPackages/constants';
import {
  LIFESTYLE_PACKAGES,
  PACKAGES,
  SEARCH_PACKAGES_TESTS,
  TESTS,
} from './constants';

const LifestyleTestsAndPackages = props => {
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
  } = styles();
  const {
    packages,
    select,
    packageData,
    testData,
    renderData,
    onPackagePress,
    onPackageSelect,
    onContinuePress,
    onSearch,
    searchQuery
  } = useLifestyle(props?.enumName);
  if (renderData) {
    return (
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={scrollContainer}>
        <Header
         showBackButton={true}
          title={LIFESTYLE_PACKAGES}
          showSearch={true}
          searchPlaceholder={SEARCH_PACKAGES_TESTS}
          onSearch={onSearch}
        />
        <View style={container}>
          <SelectList
            setSelected={select}
            search={false}
            data={packages}
            placeholder={props?.name}
            boxStyles={boxStyles}
            inputStyles={dropdownInputStyles}
            dropdownStyles={dropdownStyles}
          />
          {packageData.length > 0 && <Packages
            extraStyles={packagesContainer}
            showHeading={true}
            heading={PACKAGES}
            data={packageData}
            onPackagePress={onPackagePress}
            onPackageSelect={onPackageSelect}
          />}
          {testData.length > 0 && <Packages
            extraStyles={testsContainer}
            showHeading={true}
            heading={TESTS}
            data={testData}
            onPackagePress={onPackagePress}
            onPackageSelect={onPackageSelect}
          />}
          <TouchableOpacity onPress={onContinuePress} style={buttonContainer}>
            <Text style={buttonText}>{CONTINUE}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

export default LifestyleTestsAndPackages;
