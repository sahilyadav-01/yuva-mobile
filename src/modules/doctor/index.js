import React, { useEffect, useCallback } from 'react'
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native'
import DoctorCard from '../../components/DoctorCard';
import { Searchbar } from 'react-native-paper';
import { useDoctor } from './hooks/useDoctor';
import SearchLabel from '../../components/SearchLabel';
import { styles } from './styles';


const DoctorScreen = () => {
    const {
        onChangeSearch,
        searchQuery,
        data } = useDoctor();
    return (
        <View className>

            <Searchbar
                style={styles.search}
                placeholder="Search for Doctor or Specialization"
                onChangeText={onChangeSearch}
                value={searchQuery}
                theme={{ colors: { text: "black" } }}
                placeholderTextColor="#1D2334"
                label={SearchLabel}
            />
            <View className=" mb-[15px]">
                <ScrollView
                    bounces={false}
                    style={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}>
                    {data.map((item) => {
                        return <DoctorCard
                            key={item.id}
                            doctorId={item.id}
                            name={item.name}
                            specialization={item.speciality}
                            address={item.address}
                            rating={item.rating}
                            exp={item.experience}
                            ViewAppointmentHooks                   img={item.img}
                            qual={item.qual == undefined ? "MBBS" : item.qual}
                        />
                    })

                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default DoctorScreen
