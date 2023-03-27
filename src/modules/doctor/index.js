import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import DoctorCard from '../../components/DoctorCard';
import {useDoctor} from './hooks/useDoctor';
import {styles} from './styles';
import {SEARCH} from './constant';
import {useRoute} from '@react-navigation/native';
import Search from '../../components/Search';

const Doctor = () => {
  const {params} = useRoute();
  const {plan, userVersion, uuid, version} = params;
  const {onChangeSearch, searchQuery, data} = useDoctor();
  const renderItem = ({item, index}) => {
    return (
      <DoctorCard
        key={item.id}
        doctorId={item.id}
        name={item.name}
        specialization={item.speciality}
        address={item.address}
        rating={item.rating}
        exp={item.experience}
        img={item.img}
        qual={item.qual == undefined ? 'MBBS' : item.qual}
        plan={plan}
        userVersion={userVersion}
        uuid={uuid}
        version={version}
        hospital={item.hospital}
      />
    );
  };
  return (
    <ScrollView>
      <View>
        <View style={styles.search}>
          <Search
            placeholder={SEARCH}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Doctor;
