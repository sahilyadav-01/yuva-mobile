import { useEffect, useState } from "react";
import { Alert } from "react-native";
import {Freshchat, FreshchatUser} from 'react-native-freshchat-sdk';
import { useSelector } from "react-redux";
import { ERROR_MESSAGE } from "../constant";

export const useChat = () => {
  const [error, setError] = useState(false);
  const {profile} = useSelector(state => state.profile);

  useEffect(() => {
    onPressChat();
  }, []);

  useEffect(() => {
    if(error) {
      Alert.alert(ERROR_MESSAGE);
      setError(!error);
    } else {
      Freshchat.showConversations();
    };
  }, [error]);
  const onPressChat = () => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = profile?.name;
    freshchatUser.email = profile?.email;
    freshchatUser.phoneCountryCode = '+91';
    freshchatUser.phone = profile?.number;
    Freshchat.setUser(freshchatUser, (error) =>
    {
      setError(true);
    });
  };

  return {
    onPressChat,
  };
};