import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Backbutton from '../../components/Backbutton';
import HealthCard from './components/healthCard';
import { HEALTH_LIST, SELECT_HEALTH_CONCERN } from './constant';
import {useHealth} from './hooks/useHealth';
import { styles } from './styles';

const Health = () => {

  const {goBack, selected, setSelected} = useHealth();
  const renderItem = (item) => {
    const onHealthCardPress = () => setSelected(item?.index);
    return <HealthCard item={item} selected={selected} onHealthCardPress={onHealthCardPress} />;
  }
  return (
    <View>
      <View className="flex flex-row items-center h-[60px] bg-[#1D2334] px-[10px] mt-[20px]">
        <Backbutton color="white" onPress={goBack} size={22} />
        <Text className="text-center text-white text-xl ml-[20px]">
          Health
        </Text>
      </View>
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
      </ScrollView>
    </View>
  );
};

export default Health;