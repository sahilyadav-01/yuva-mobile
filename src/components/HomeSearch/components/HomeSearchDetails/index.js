import React from 'react';
import {ScrollView, Text, View} from 'react-native';
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
  } = useHomeSearchDetails(route);
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
        contentContainerStyle={styles.ScrollViewContainerStyle}
        nestedScrollEnabled={true}>
        <View style={styles.SearchTextView}>
          <Text style={styles.SearchText}>{SEARCH_RESULT}</Text>
        </View>
        <View>
          <Packages
            extraStyles={styles.packageContainerStyle}
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
            extraStyles={styles.packageContainerStyle}
            onPackageSelect={arg => onTestSelect(arg)}
            onPackagePress={obj => onPackagePress(obj)}
            data={testData || []}
            emptyText="No data found"
            showHeading={true}
            heading={'Tests'}
          />
        </View>}
      </ScrollView>
    </View>
  );
};
export default HomeSearchDetails;
