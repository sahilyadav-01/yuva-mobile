import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CardButton from '../../components/CardButton';
import { CHAT_WITH_DOCTOR, SPEAK_WITH_DOCTOR, TALK_TO_DOCTOR, VIDEO_CALL } from './constant';
import { useChat } from './hooks/useChat';
import { styles } from './styles';
import Header from '../../components/Header';
import TalkToDoctorCard from '../talkToDoctorMyplans/components/talkToDoctorCard';

const Chat = (props) => {
  const { onPressChat, onPressTalk, onPressCall} = useChat(props?.data);
  return (
    <View style={styles.container}>
      <Header title={TALK_TO_DOCTOR} showBackButton={true}/>
      <TalkToDoctorCard />
      <ScrollView>
      <View style={styles.buttonView}>
        <CardButton 
          text={SPEAK_WITH_DOCTOR} 
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
          onPress={onPressTalk} 
        />
        <CardButton 
          text={CHAT_WITH_DOCTOR} 
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
          onPress={onPressChat} 
        />
        <CardButton 
          text={VIDEO_CALL} 
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
          onPress={onPressCall} 
        />
      </View>
      </ScrollView>
    </View>
  )
}

export default Chat;
