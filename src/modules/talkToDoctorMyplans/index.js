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
import { usePatient } from './hooks/usePatient';

const Patient = () => {
  const {onSelectMember}=usePatient();
  const renderItem = ({item, index}) => {
    return (
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={styles.head}>{item.title}</Text>

          <Text style={styles.expiry}>
            {VALIDITY} {item.validity}
          </Text>

          <View style={styles.sideBySide}>
            <SVG.Stethoscope />
            <View style={styles.text1}>
              <Text style={styles.doctorText}>{TALK_TO_DOCTOR}</Text>
              <Text style={styles.text2}>
                {USED} {item.used} {AVAILABLE} {item.available}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonStyle} onPress={onSelectMember}>
            <Text style={styles.textStyle}>{CHAT_NOW}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  return (
    <FlatList
      data={PLANS}
      renderItem={renderItem}
      keyExtractor={index => `${index}`}
    />
  );
};

export default Patient;
