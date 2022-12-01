import React from 'react';
import {View, Text,FlatList} from 'react-native';
import CarouselItem from './CarouselItem';
import { useSelector } from 'react-redux';

const CarouselContainer = () => {
  const data = [
    {id: 1, text: 'text1'},
    {id: 1, text: 'text2'},
  ];
  const renderItem = ({item}) => (
    <CarouselItem

     item={item}
    />
  );
  const {userAppointments} = useSelector(state => state?.appointment);
  return (
    <View className="flex items-center justify-center h-[170px] mt-2 mx-4 my-4">
      {/* <CarouselItem item={userAppointments}/>
      <View className="flex-row mt-[20px]">
        <View className="h-2 w-2 bg-gray-400 rounded-full ml-2"></View>
        <View className="h-2 w-2 bg-gray-400 rounded-full ml-2"></View>
        <View className="h-2 w-2 bg-gray-400 rounded-full ml-2"></View>
      </View> */}
       <FlatList
       horizontal={true}
        data={userAppointments}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};

export default CarouselContainer;
