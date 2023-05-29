import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, Text, ScrollView, TextInput, KeyboardAvoidingView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardButton from '../../components/CardButton';
import Header from '../../components/Header';
import {CYAN_BLUE_OPACITY} from '../../styles/colors';

import SecureView from '../talkToDoctorMyplans/components/secureView';
import HealthCard from './components/healthCard';
import {
  DESCRIPTION_HEADER,
  DESCRIPTION_PLACEHOLDER,
  HEALTH_LIST,
  SELECT_HEALTH_CONCERN,
  START_CONSULTATION,
  TALK_TO_DOCTOR,
} from './constant';
import {useHealth} from './hooks/useHealth';
import {styles} from './styles';

const Health = () => {
  const route=useRoute();
  const {selected, setSelected, onChange, description, onPressConsultation} =
    useHealth(route);
  const renderItem = item => {
    const onHealthCardPress = () => setSelected(item?.index);
    return (
      <HealthCard
        key={item?.index}
        item={item}
        selected={selected}
        onHealthCardPress={onHealthCardPress}
      />
    );
  };
  return (
    <View style={styles.screenContainer}>
      <Header title={TALK_TO_DOCTOR} showBackButton={true} />
      <KeyboardAvoidingView behavior='position' style={styles.screenContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{SELECT_HEALTH_CONCERN}</Text>
        </View>
        <FlatList
          data={HEALTH_LIST}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.healthContainer}
          contentContainerStyle={styles.contentContainer}
          nestedScrollEnabled={true}
        />
        {!isNaN(selected) && (
          <>
            <View style={styles.descriptionHView}>
              <Text style={styles.descriptionHText}>{DESCRIPTION_HEADER}</Text>
            </View>
            <View style={styles.descriptionView}>
              <TextInput
                style={styles.descriptionText}
                multiline={true}
                onChangeText={onChange}
                placeholder={DESCRIPTION_PLACEHOLDER}
                placeholderTextColor={CYAN_BLUE_OPACITY}
                value={description}
              />
            </View>
            <View style={styles.buttonView}>
              <CardButton
                text={START_CONSULTATION}
                containerStyle={styles.containerStyle}
                textStyle={styles.textStyle}
                onPress={onPressConsultation}
              />
            </View>
            <View style={styles.secureView}>
              <SecureView />
            </View>
          </>
        )}
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Health;
