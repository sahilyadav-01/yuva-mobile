import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import SelectList from 'react-native-dropdown-select-list';
import ReportCard from '../../ReportCard';
import {styles} from './styles';
import {useMyPrescription} from './hooks/useMyPrescription';
import Header from '../../components/Header';
import {EMPTY_TEXT, ERROR_TEXT, MY_PRESCRIPTIONS} from './constants';

const MyPrescription = () => {
  const {
    prescriptionLoading,
    prescriptionError,
    dropdownData,
    onItemSelect,
    listData,
    onEndReached,
    dataAvailable,
  } = useMyPrescription();
  const renderItem = ({item, index}) => {
    return (
      <ReportCard
        name={item?.fileName}
        date={item?.timeSlot}
        filePath={item?.filePath}
        key={index}
      />
    );
  };

  const renderListFooter = () => {
    if (dataAvailable)
      return (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size="small" />
        </View>
      );
  };
  return (
    <SafeAreaView style={styles.contentContainerStyle}>
      <Header title={MY_PRESCRIPTIONS} showBackButton={true} hideMenu={true} />
      <SelectList
        boxStyles={styles.boxStyles}
        inputStyles={styles.inputStyles}
        dropdownStyles={styles.dropdownStyles}
        dropdownTextStyles={styles.inputStyles}
        setSelected={onItemSelect}
        search={false}
        data={dropdownData}
        defaultOption={dropdownData[0]}
      />
      {prescriptionLoading && listData?.length === 0 && (
        <View style={styles.emptyView}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {!prescriptionLoading && prescriptionError && listData?.length === 0 && (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>{ERROR_TEXT}</Text>
        </View>
      )}
      {!prescriptionLoading &&
        !prescriptionError &&
        (listData?.length === 0 ? (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>{EMPTY_TEXT}</Text>
          </View>
        ) : (
          <FlatList
            data={listData}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            style={styles.listContainer}
            onEndReachedThreshold={0}
            onMomentumScrollBegin={onEndReached}
            ListFooterComponent={renderListFooter}
          />
        ))}
    </SafeAreaView>
  );
};

export default MyPrescription;
