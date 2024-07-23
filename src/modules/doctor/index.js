import React from 'react';
import {View, FlatList, Text} from 'react-native';
import DoctorCard from '../../components/DoctorCard';
import {useDoctor} from './hooks/useDoctor';
import {styles} from './styles';
import {SEARCH} from './constant';
import {useRoute} from '@react-navigation/native';
import Search from '../../components/Search';
import {DARK_GRAY} from '../../styles/colors';

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
        qual={item.qual == undefined ? '' : item.qual}
        plan={plan}
        userVersion={userVersion}
        uuid={uuid}
        version={version}
        hospital={item.hospital}
      />
    );
  };
  if (data?.length > 0) {
    return (
      <View style={styles.contentContainerStyle}>
        <View style={styles.search}>
          <Search
            placeholder={SEARCH}
            placeholderTextColor={DARK_GRAY}
            onChangeText={onChangeSearch}
            value={searchQuery}
            searchStyle={styles.searchStyle}
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
  }
  return (
    <View style={styles.listEmptyStyles}>
      <Text style={styles.emptyText}>
        No Doctors available in the Selected City
      </Text>
    </View>
  );
};

export default Doctor;
