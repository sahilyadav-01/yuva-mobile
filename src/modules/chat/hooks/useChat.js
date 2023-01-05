import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {Freshchat} from 'react-native-freshchat-sdk';

export const useChat = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    onPressChat();
  }, []);

  const onPressChat = () => {
    Freshchat.showConversations();
  };

  return {
    goBack,
    onPressChat,
  };
};