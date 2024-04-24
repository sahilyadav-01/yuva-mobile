import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header';
import {
  CONTINUE,
  DIAGNOSTIC_TESTS,
  PLACEHOLDER_TEXT,
  SEARCH_PACKAGES,
  TITLE,
} from './constants';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from './style';
import Packages from '../../components/PackagesList/packages';
import {usePackage} from './hooks/usePackage';
import { BLACK, DARK_GRAY } from '../../styles/colors';

const HealthPackages = props => {
  const {
    data,
    index,
    isMoreData,
    onEndReached,
    testData,
    dropdownData,
    setSelectedDropdownValue,
    onPackageSelect,
    onPackagePress,
    onSearch,
    renderData,
    addToCartLoad,
    onContinuePress,
  } = usePackage(props?.index);
  const {
    screenContainer,
    dropdownContainerStyle,
    dropdownTextStyle,
    buttonContainer,
    buttonText,
    packageContainerStyle,
    screenStyle,
    addToCartLoader,
    childContainerStyle,
  } = styles(addToCartLoad);
  if (renderData) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        bounces={false}
        contentContainerStyle={screenStyle}>
        <Header
          showSearch={true}
          searchPlaceholder={SEARCH_PACKAGES}
          showBackButton={true}
          title={TITLE}
          onSearch={onSearch}
          showCart={true}
        />
        <View style={[screenContainer, childContainerStyle]}>
          {addToCartLoad ? (
            <View style={[childContainerStyle, addToCartLoader]}>
              <ActivityIndicator size={'small'} />
            </View>
          ) : (
            <>
              <SelectList
                setSelected={setSelectedDropdownValue}
                search={false}
                data={dropdownData}
                placeholder={index === 0 ? PLACEHOLDER_TEXT : DIAGNOSTIC_TESTS}
                placeholderTextColor={BLACK}
                boxStyles={dropdownContainerStyle}
                inputStyles={dropdownTextStyle}
                dropdownTextStyles={dropdownTextStyle}
              />
              <Packages
                extraStyles={packageContainerStyle}
                onPackageSelect={arg => onPackageSelect(arg)}
                onPackagePress={obj => onPackagePress(obj)}
                data={index === 0 ? data : testData}
                onEndReached={onEndReached}
                isMoreData={isMoreData}
                emptyText="No data found"
              />
              {((index === 0 && data.length > 0) ||
                (index === 1 && testData.length > 0)) && (
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

export default HealthPackages;
