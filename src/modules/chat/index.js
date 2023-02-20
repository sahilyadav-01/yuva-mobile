import React from 'react'
import { View, Text } from 'react-native'
import CardButton from '../../components/CardButton';
import { CHAT_NOW, TALK_TO_DOCTOR } from './constant';
import { useChat } from './hooks/useChat';
import { styles } from './styles';
import Header from '../../components/Header';

const Chat = () => {
  const { onPressChat} = useChat();
  return (
    <View style={styles.container}>
      <Header title={TALK_TO_DOCTOR} showBackButton={true}/>
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
