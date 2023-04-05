import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  AVAILABLE,
  CHAT_NOW,
  PLANS,
  TALK_TO_DOCTOR,
  USED,
  VALIDITY,
} from './constant';
import {SVG} from '../../../assets';
import {usePatient} from './hooks/usePatient';
import {getPlanDate} from '../../utils/utils';

const MyPlans = () => {
  const {programAndPlan, onSelectMember} = usePatient();
  const renderItem = ({item, index}) => {
    return item.assignedAttributeResponseDto.map(i => {
      return (
        <ScrollView key={index} nestedScrollEnabled={true}>
          <View style={styles.viewContainer}>
          <View style={styles.headViewContainer}>
            <View style={styles.headView}>
              <Text style={styles.head}>{item?.name.length > 26 ? item?.name.substring(0, 26) + '...' : item?.name}</Text>
            </View>

            <Text style={styles.expiry}>
              {VALIDITY} {getPlanDate(item.endDate)}
            </Text>
        </View>
            <View style={styles.sideBySide}>
              <SVG.Stethoscope />
              <View style={styles.text1}>
                <Text style={styles.doctorText}>{i.name}</Text>
                <Text style={styles.text2}>
                  {USED} {i.used} {AVAILABLE} {i.available}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => onSelectMember(item)}>
            <Text style={styles.textStyle}>{CHAT_NOW}</Text>
          </TouchableOpacity>
          </View>
  
        </ScrollView>
      );
    });
  };
  if(programAndPlan?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Active Plans left</Text>
        </View>
    );
  }
  return (
    <FlatList
      data={programAndPlan}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${index}`}
      nestedScrollEnabled={true}
      />
  );
};

export default MyPlans;
