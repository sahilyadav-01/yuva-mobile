import React from 'react'
import { View, Text } from 'react-native'
import Backbutton from '../../components/Backbutton';
import CardButton from '../../components/CardButton';
import { CHAT_NOW } from './constant';
import { useChat } from './hooks/useChat';
import { styles } from './styles';

const Chat = () => {
  const {goBack, onPressChat} = useChat();
  return (
    <View style={styles.container}>
      <View className="flex flex-row items-center h-[60px] bg-[#1D2334] px-[10px] mt-[20px]">
        <Backbutton color="white" onPress={goBack} size={22} />
        <Text className="text-center text-white text-xl ml-[20px]">
          ChatScreen
        </Text>
      </View>
      <View style={styles.buttonView}>
          <CardButton 
            text={CHAT_NOW} 
            containerStyle={styles.containerStyle} 
            textStyle={styles.textStyle}
            onPress={onPressChat} 
          />
      </View>
    </View>
  )
}

export default Chat;
