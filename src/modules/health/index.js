import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Backbutton from '../../components/Backbutton';
import CardButton from '../../components/CardButton';
import Header from '../../components/Header';
import { CYAN_BLUE_OPACITY } from '../../styles/colors';
import SecureView from '../patient/components/secureView';
import HealthCard from './components/healthCard';
import { DESCRIPTION_HEADER, DESCRIPTION_PLACEHOLDER, HEALTH_LIST, SELECT_HEALTH_CONCERN, START_CONSULTATION } from './constant';
import {useHealth} from './hooks/useHealth';
import { styles } from './styles';

const Health = () => {

  const {goBack, selected, setSelected, onChange, description, onPressConsultation} = useHealth();
  const renderItem = (item) => {
    const onHealthCardPress = () => setSelected(item?.index);
    return <HealthCard item={item} selected={selected} onHealthCardPress={onHealthCardPress} />;
  }
  return (
    <View>
      <Header isRightIcon={true} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{SELECT_HEALTH_CONCERN}</Text>
        </View>
        <FlatList 
          data={HEALTH_LIST}
          keyExtractor={(item, index) => index + ''}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.healthContainer}
          contentContainerStyle={styles.contentContainer} 
        />
        { !isNaN(selected)  &&
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
          }
      </ScrollView>
    </View>
  );
};

export default Health;