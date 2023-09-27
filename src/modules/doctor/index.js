import React from 'react';
import {View, FlatList} from 'react-native';
import DoctorCard from '../../components/DoctorCard';
import {useDoctor} from './hooks/useDoctor';
import {styles} from './styles';
import {SEARCH} from './constant';
import {useRoute} from '@react-navigation/native';
import Search from '../../components/Search';
import { DARK_GRAY } from '../../styles/colors';

const Doctor = () => {
  const {params} = useRoute();
  const {plan, userVersion, uuid, version} = params;
  const {onChangeSearch, searchQuery, data} = useDoctor();
  const renderItem = ({item, index}) => {
    return (
      <DoctorCard
        key={index}
        doctorId={item.id}
        name={item.name}
        specialization={item.speciality}
        address={item.address}
        rating={item.rating}
        exp={item.experience}
        img={item.img}
        qual={item.qual == undefined ? '\n-MBBS' : item.qual}
        plan={plan}
        userVersion={userVersion}
        uuid={uuid}
        version={version}
        hospital={item.hospital}
      />
    );
  };
  return (
  
      <View style={styles.contentContainerStyle}>
        <View style={styles.search}>
          <Search
            placeholder={SEARCH}
            placeholderTextColor={DARK_GRAY}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
      </View>
  );
};

export default Doctor;
