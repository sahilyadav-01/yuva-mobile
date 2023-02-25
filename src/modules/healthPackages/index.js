import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { CONTINUE, SEARCH_PACKAGES } from './constants';
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
  // const mockData = [
  //   {packageName: 'Yuva Prime', discount: '1500', price: '1000'},
  //   {packageName: 'Yuva Advance', discount: '1500', price: '1000'},
  //   {packageName: 'Basic Package'},
  // ];

  const [selectedDropdownValue, setSelectedDropdownValue] = useState('Health Checkup Packages');
  const { data, dropdownData, onPackageSelect, onPackagePress } = usePackage(selectedDropdownValue);

  if (data && data.length > 0) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        bounces={false}
      >

        <Header showSearch={true} searchPlaceholder={SEARCH_PACKAGES} />
        <View style={screenContainer}>
          <SelectList
            setSelected={setSelectedDropdownValue}
            selected={selectedDropdownValue}
            search={false}
            data={dropdownData}
            placeholder={'Select'}
            boxStyles={dropdownContainerStyle}
            inputStyles={dropdownTextStyle}
          />
          <Packages
            extraStyles={packageContainerStyle}
            onPackageSelect={arg => onPackageSelect(arg)}
            onPackagePress={obj => onPackagePress(obj)}
            data={data}
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
