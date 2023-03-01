import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { CONTINUE, PLACEHOLDER_TEXT, SEARCH_PACKAGES, TITLE } from './constants';
import SelectList from 'react-native-dropdown-select-list';
import { styles } from './style';
import Packages from '../../components/PackagesList/packages';
import { usePackage } from './hooks/usePackage';

const HealthPackages = props => {

  const {
    screenContainer,
    dropdownContainerStyle,
    dropdownTextStyle,
    buttonContainer,
    buttonText,
    packageContainerStyle,
  } = styles();

  const { data, index, isMoreData, onEndReached, testData, dropdownData, setSelectedDropdownValue, onPackageSelect, onPackagePress, onSearch, renderData } = usePackage();
  if (renderData) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        bounces={false}
      >

        <Header showSearch={true} searchPlaceholder={SEARCH_PACKAGES} showBackButton={true} title={TITLE} onSearch={onSearch}/>
        <View style={screenContainer}>
          <SelectList
            setSelected={setSelectedDropdownValue}
            search={false}
            data={dropdownData}
            placeholder={PLACEHOLDER_TEXT}
            boxStyles={dropdownContainerStyle}
            inputStyles={dropdownTextStyle}
          />
          <Packages
            extraStyles={packageContainerStyle}
            onPackageSelect={arg => onPackageSelect(arg)}
            onPackagePress={obj => onPackagePress(obj)}
            data={index === 0 ? data : testData}
            onEndReached={onEndReached}
            isMoreData={isMoreData}
          />
          <TouchableOpacity style={buttonContainer}>
            <Text style={buttonText}>{CONTINUE}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

export default HealthPackages;
