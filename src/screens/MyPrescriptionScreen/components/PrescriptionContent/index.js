import React from 'react';
import {View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from '../../styles';
import ReportCard from '../../../../ReportCard';
import {EMPTY_TEXT, ERROR_TEXT, VIEW_ALL_PRESCRIPTIONS} from '../../constants';
import {useMyPrescription} from '../../hooks/useMyPrescription';
import { MARINER } from '../../../../styles/colors';

export const PrescriptionContent = ({prescriptionId,redirect,serviceUuid}) => {
  const {
    prescriptionLoading,
    prescriptionError,
    dropdownData,
    onItemSelect,
    listData,
    onEndReached,
    dataAvailable,
    pageNo,
    onViewAll,
    redirectData
  } = useMyPrescription({prescriptionId,redirect,serviceUuid});
  const defaultValue = redirect ? dropdownData.find(item=>{if(item.uuid === serviceUuid) return item}) : dropdownData[0];
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

  const RenderListFooter = () => {
    if (dataAvailable) {
      return (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size="small" color={MARINER} />
        </View>
      );
    }
    if (redirectData?.redirect && redirectData?.prescriptionId) {
      return (
        <TouchableOpacity onPress={onViewAll} style={styles.viewAll}>
          <View style={styles.viewAllContainer}>
          <Text style={styles.viewAllText}>{VIEW_ALL_PRESCRIPTIONS}</Text>
          </View>
        </TouchableOpacity>
  
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
          <ActivityIndicator size={'large'} color={MARINER} />
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
          ListFooterComponent={<RenderListFooter/>}
          ListEmptyComponent={listEmptyComponent}
        />
        <View style={styles.listOffset} />
      </>
    );
  };
  return (
    <View style={styles.listContainer}>
      <SelectList
        boxStyles={styles.boxStyles}
        inputStyles={styles.inputStyles}
        dropdownStyles={styles.dropdownStyles}
        dropdownTextStyles={styles.inputStyles}
        setSelected={onItemSelect}
        search={false}
        data={dropdownData}
        defaultOption={defaultValue}
      />
      <RenderContent />
    </View>
  );
};
