import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { SVG } from '../../../assets';
import { DARK_GRAY } from '../../styles/colors';
import {
  ENTER_MOBILE,
  NO_DATA_FOUND,
  NURSE_TEXT,
  PLEASE_ENTER_CORRECT_NUMBER,
  REQUEST,
  SEARCH,
  SEARCH_TEST_PACKAGE,
} from './constants';
import {useHomeSearch} from './hooks/useHomeSearch';
import {styles} from './styles';
import Header from '../../components/Header';
const HomeSearch = () => {
  const renderItem4 = ({item}) => {
    const navigate = () => {
      onNavigate(item);
    };
    return (
      <View style={styles.textList}>
        <TouchableOpacity onPress={navigate} style={styles.touchableOpactiy}>
          <Text style={styles.textColor}>{item?.name}</Text>
          <Text style={styles.textColorEnum}>{item?.productTypeEnum}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderView = item => {
    const renderList = item => {
      const onPackPress= () => onPackagePress(item)
      return (
        <TouchableOpacity onPress={onPackPress}>
          <Text style={styles.listText}>{item?.item?.packageName}</Text>
        </TouchableOpacity>
      );
    };
    const renderList2 = item => {
      const onTestPress = () => onPackagePress(item);
      return (
        <TouchableOpacity onPress={onTestPress}>
          <Text style={styles.listText}>{item?.item?.testName}</Text>
        </TouchableOpacity>
      );
    };
    const renderList3 = item => {
      const onPress = () => onPressPlan(item);
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.listText}>{item?.item?.name}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.testView}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{item?.item?.header}</Text>
        </View>
        <ScrollView nestedScrollEnabled={true}>
          <FlatList
            renderItem={renderList}
            data={item?.item?.data?.popularPackageResponseDtoList}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
          <FlatList
            renderItem={renderList2}
            data={item?.item?.data?.popularTestResponseDtoList}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
          <FlatList
            renderItem={renderList3}
            data={item?.item?.data}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </ScrollView>
      </View>
    );
  };
  const {
    onNavigate,
    data,
    onChangeContact,
    errorState,
    onRequestCall,
    onChangeSearch,
    filteredData,
    testPackageSearch,
    onPressPlan,
    onPackagePress,
  } = useHomeSearch();
  return (
    <View>
      <Header
        title={SEARCH}
        hideMenu={false}
        showCart={true}
        showBackButton={true}
        showSearch={true}
        searchPlaceholder={SEARCH_TEST_PACKAGE}
        onSearch={onChangeSearch}
        onSubmitEditing={filteredData}
      />
      {filteredData?.length > 2 && testPackageSearch?.length > 0 ? (
        <View style={styles.dropDown}>
          <FlatList
            data={testPackageSearch}
            renderItem={renderItem4}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={styles.dropDown}>
          {filteredData?.length > 2 && (
            <View style={styles.textList}>
              <Text style={styles.textColor}>{NO_DATA_FOUND}</Text>
            </View>
          )}
        </View>
      )}
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        nestedScrollEnabled={true}>
        <View>
          <FlatList
            renderItem={renderView}
            data={data}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </View>
        <View style={styles.expert}>
          <View style={styles.nurse}>
            <SVG.NurseComponent style={styles.nurseImage} />
            <Text style={styles.nurseText}>{NURSE_TEXT}</Text>
          </View>
          <View style={styles.nurse}>
            <View>
              <TextInput
                multiline={false}
                keyboardType="number-pad"
                style={styles.textInputStyle}
                placeholder={ENTER_MOBILE}
                placeholderTextColor={DARK_GRAY}
                onChangeText={onChangeContact}
              />
              {errorState && (
                <Text style={styles.errorContact}>
                  {PLEASE_ENTER_CORRECT_NUMBER}
                </Text>
              )}
            </View>
            <View>
              <TouchableOpacity style={styles.Button} onPress={onRequestCall}>
                <Text style={styles.touchableOpacityTextStyle}>{REQUEST}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeSearch;
