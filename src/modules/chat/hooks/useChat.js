import { useEffect, useState } from "react";
import { Alert } from "react-native";
import {Freshchat, FreshchatUser} from 'react-native-freshchat-sdk';
import { useSelector } from "react-redux";
import { ERROR_MESSAGE } from "../constant";

export const useChat = () => {
  const [error, setError] = useState(false);
  const {profile} = useSelector(state => state.profile);

  useEffect(() => {
    onInitChat();
  }, []);

  useEffect(() => {
    if(error) {
      Alert.alert(ERROR_MESSAGE);
      setError(!error);
    } else {
      onPressChat();
    };
  }, [error]);
  const onInitChat = () => {
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

  const onPressChat = () => {
    Freshchat.showConversations();
  };

  return {
    onPressChat,
  };
};