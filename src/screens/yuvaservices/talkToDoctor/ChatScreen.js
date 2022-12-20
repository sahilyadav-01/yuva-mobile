import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Backbutton from '../../../components/Backbutton';

const ChatScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View className="flex flex-row items-center h-[60px] bg-[#1D2334] px-[10px] mt-[20px]">
        <Backbutton color="white" onPress={goBack} size={22} />
        <Text className="text-center text-white text-xl ml-[20px]">
          ChatScreen
        </Text>
      </View>
      <Text>ChatScreen</Text>
    </SafeAreaView>
  )
}

export default ChatScreen;
