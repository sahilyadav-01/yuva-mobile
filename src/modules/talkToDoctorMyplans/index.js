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

const Patient = () => {
  const {programAndPlan} = usePatient();

  const renderItem = ({item, index}) => {
    return item.assignedAttributeResponseDto.map(i => {
      return (
        <ScrollView>
          <View style={styles.viewContainer}>
            <View style={styles.headView}>
              <Text style={styles.head}>{item.name}</Text>
            </View>

            <Text style={styles.expiry}>
              {VALIDITY} {getPlanDate(item.endDate)}
            </Text>

            <View style={styles.sideBySide}>
              <SVG.Stethoscope />
              <View style={styles.text1}>
                <Text style={styles.doctorText}>{i.name}</Text>
                <Text style={styles.text2}>
                  {USED} {i.used} {AVAILABLE} {i.available}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.textStyle}>{CHAT_NOW}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    });
  };
  return (
    <FlatList
      data={programAndPlan}
      renderItem={renderItem}
      keyExtractor={index => `${index}`}
    />
  );
};

export default Patient;
