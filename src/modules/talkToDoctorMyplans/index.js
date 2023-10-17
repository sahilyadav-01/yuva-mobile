import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  AVAILABLE,
  CHAT_NOW,
  USED,
  VALIDITY,
} from './constant';
import {SVG} from '../../../assets';
import {usePatient} from './hooks/usePatient';
import {getPlanDate} from '../../utils/utils';
import { AMBER, CYAN_BLUE, DEEP_RED, ORANGE, WHITE } from '../../styles/colors';
import { NOT_AVAILABLE } from '../../components/constants';

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
            <View>
              <Text style={[styles.Available, { color: i.available === 0 ? DEEP_RED : CYAN_BLUE }]}>{i.available === 0 ? NOT_AVAILABLE : ''}</Text>
            </View>
            <TouchableOpacity   style={[styles.buttonStyle,{backgroundColor: i.available===0 ?AMBER :ORANGE}]} onPress={() => onSelectMember(item)} disabled={!i.available}>
            <Text style={[styles.textStyle, { color: i.available === 0 ? CYAN_BLUE : WHITE }]}>{CHAT_NOW}</Text>
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
