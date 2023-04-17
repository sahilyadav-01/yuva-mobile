import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SectionPicker from '../../../../components/SectionPicker';
import {CYAN_BLUE, WHITE} from '../../../../styles/colors';
import {
  AGE_BRACKET,
  GENDER,
  GENDER_BRACKET,
  PATIENT_AGE,
  PATIENT_DATA,
  WHO_IS_THE_PATIENT,
} from '../../constant';
import {usePatientDetails} from './hooks/usePatientDetails';
import {styles} from './styles';

const PatientDetails = () => {
  const {activeIndex, setAge, setGender, onPatientPress} = usePatientDetails();

  const onAgeCallback = item => setAge(item);
  const onGenderCallback = item => setGender(item);

  const renderItem = item => {
    const onPress = () => onPatientPress(item);
    return (
      <TouchableOpacity
        key={item.index}
        style={[
          styles.patientItem,
          {
            backgroundColor: item.index === activeIndex ? CYAN_BLUE : WHITE,
            marginLeft: item.index === 0 ? 0 : 12,
            marginRight: item.index === PATIENT_DATA.length - 1 ? 0 : 12,
          },
        ]}
        onPress={onPress}>
        <Text
          style={[
            styles.patientItemText,
            {color: item.index === activeIndex ? WHITE : CYAN_BLUE},
          ]}>
          {item?.item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{WHO_IS_THE_PATIENT}</Text>
      </View>
      <FlatList
        data={PATIENT_DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        nestedScrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      />
      <SectionPicker
        key={0}
        text={PATIENT_AGE}
        data={AGE_BRACKET}
        defaultAnswer={AGE_BRACKET[0]}
        callBack={onAgeCallback}
        questionId={0}
        headerStyle={styles.patientFormHeader}
      />
      <SectionPicker
        key={0}
        text={GENDER}
        data={GENDER_BRACKET}
        defaultAnswer={GENDER_BRACKET[0]}
        callBack={onGenderCallback}
        questionId={0}
        headerStyle={styles.patientFormHeader}
      />
    </View>
  );
};

export default PatientDetails;
