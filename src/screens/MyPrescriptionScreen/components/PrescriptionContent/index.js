import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from '../../styles';
import ReportCard from '../../../../ReportCard';
import {EMPTY_TEXT, ERROR_TEXT} from '../../constants';
import {useMyPrescription} from '../../hooks/useMyPrescription';

export const PrescriptionContent = props => {
  const {
    prescriptionLoading,
    prescriptionError,
    dropdownData,
    onItemSelect,
    listData,
    onEndReached,
    dataAvailable,
    pageNo,
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
    if (dataAvailable) {
      return (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size="small" />
        </View>
      );
    }
  };
  const listEmptyComponent = () => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>{EMPTY_TEXT}</Text>
      </View>
    );
  };
  const RenderContent = () => {
    if (prescriptionLoading && pageNo === 1)
      return (
        <View style={styles.emptyView}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    if (!prescriptionLoading && prescriptionError && pageNo === 1)
      return (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>{ERROR_TEXT}</Text>
        </View>
      );
    return (
      <>
        <View style={styles.listOffset} />
        <FlatList
          data={listData}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          style={styles.listContainer}
          onEndReachedThreshold={0.01}
          onEndReached={onEndReached}
          ListFooterComponent={renderListFooter}
          ListEmptyComponent={listEmptyComponent}
        />
        <View style={styles.listOffset} />
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
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
      <RenderContent />
    </View>
  );
};
