import React from 'react';
import {View} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from './style';
import Header from '../../components/Header';
import {useLifestyle} from './hooks/useLifestyle';
import Packages from '../../components/PackagesList/packages';

const LifestyleTestsAndPackages = props => {
  const {container, boxStyles, dropdownInputStyles, dropdownStyles} = styles();
  const {packages, select, packageData, testData, renderData, onPackagePress, onPackageSelect} =
    useLifestyle(props?.enumName);
  if (renderData) {
    return (
      <View style={{flex: 1}}>
        <Header
          canGoBack={true}
          title="LifeStyle Packages"
          showSearch={true}
          searchPlaceholder="Search for Packages/Tests"
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
          <Packages
            extraStyles={{marginTop: 48}}
            showHeading={true}
            heading={'Packages'}
            data={packageData}
            onPackagePress={onPackagePress}
            onPackageSelect={onPackageSelect}
          />
          <Packages
            extraStyles={{marginTop: 36}}
            showHeading={true}
            heading={'Tests'}
            data={testData}
            onPackagePress={onPackagePress}
            onPackageSelect={onPackageSelect}
          />
        </View>
      </View>
    );
  }
};

export default LifestyleTestsAndPackages;
