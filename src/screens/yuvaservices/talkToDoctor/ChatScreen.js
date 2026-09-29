import React from 'react';
import {SafeAreaView} from 'react-native';
import Chat from '../../../modules/chat';

const ChatScreen = props => {
  return (
    <SafeAreaView>
      <Chat data={props?.route?.params?.data} />
    </SafeAreaView>
  );
};

export default ChatScreen;
