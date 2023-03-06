import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import DoctorCard from '../../components/DoctorCard';
import {Searchbar} from 'react-native-paper';
import {useDoctor} from './hooks/useDoctor';
import SearchLabel from '../../components/SearchLabel';
import {styles} from './styles';
import {SEARCH} from './constant';
import {PLACEHOLDER_TEXT_COLOR} from '../../styles/colors';
import {useRoute} from '@react-navigation/native';

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
      />
    );
  };
  return (
    <ScrollView>
      <View>
        <Searchbar
          multiline={false}
          style={styles.search}
          placeholder={SEARCH}
          onChangeText={onChangeSearch}
          value={searchQuery}
          theme={styles.theme}
          placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
          label={SearchLabel}
        />
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
