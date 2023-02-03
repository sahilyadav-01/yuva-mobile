import React from 'react'
import { View, Text } from 'react-native'
import Backbutton from '../../components/Backbutton';
import CardButton from '../../components/CardButton';
import { CHAT_NOW } from './constant';
import { useChat } from './hooks/useChat';
import { styles } from './styles';
import Header from '../../components/Header';

const Chat = () => {
  const {goBack, onPressChat} = useChat();
  return (
    <View style={styles.container}>
      <Header isRightIcon={true} />
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
