import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header/index';
import {
  FIND_HEALTH_CHECKUP,
  PACKAGE,
  HEALTH_CHECKUP_PACKAGE,
  POPULAR_TEST,
  SEARCH_PLACEHOLDER,
} from './constant';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from './styles';
import Description from './components/description';
import {SVG} from '../../../assets';
import PopularPackages from './components/popularPackages';
import PopularTests from './components/popularTests';
import Search from '../../components/Search/index';
const HealthCheckUP = ({navigation}) => {
  const mockData = [
    {
      value: 'arjun',
    },
    {
      value: 'hhvm',
    },
  ];
  const PARAMS = [
    {
      DIABETES_SCREENING: 'Diabetes Screening',
      CBC: 'CBC',
      OLD_PRICE: '₹2000/-',
      NEW_PRICE: '₹1400/-',
      DISCOUNT: '40%',
    },
  ];

  const TEST_PARAMS = [
    {
      LIPID_PROFILE: 'Lipid Profile',
      OLD_PRICE: '₹2000/-',
      NEW_PRICE: '₹1400/-',
      DISCOUNT: '40%',
    },
  ];
  return (
    <View>
      <Header showBackButton={true} title={HEALTH_CHECKUP_PACKAGE} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headTitle}>{FIND_HEALTH_CHECKUP}</Text>
        <SelectList
          search={false}
          data={mockData}
          placeholder={'Select'}
          boxStyles={styles.dropdownContainerStyle}
          inputStyles={styles.dropdownTextStyle}
        />
        <View style={styles.searchContainer}>
          <Search placeholder={SEARCH_PLACEHOLDER} />
        </View>
        <Text style={styles.title}>{PACKAGE}</Text>
        <PopularPackages from="Packages" item={PARAMS} />
        <Text style={styles.title}>{POPULAR_TEST}</Text>
        <PopularPackages from="Tests" item={TEST_PARAMS} />
        <Description />
      </ScrollView>
    </View>
  );
};

export default HealthCheckUP;
