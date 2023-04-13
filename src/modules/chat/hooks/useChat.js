import { useEffect, useState } from "react";
import { Alert } from "react-native";
import {Freshchat, FreshchatUser} from 'react-native-freshchat-sdk';
import { useSelector } from "react-redux";
import { ERROR_MESSAGE } from "../constant";

export const useChat = () => {
  const [error, setError] = useState(false);
  const {userDetails} = useSelector(state => state.profile);

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
    freshchatUser.firstName = userDetails?.name;
    freshchatUser.email = userDetails?.email;
    freshchatUser.phoneCountryCode = '+91';
    freshchatUser.phone = userDetails?.number;
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