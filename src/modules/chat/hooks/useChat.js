import {useEffect, useState} from 'react';
import {Linking, Alert} from 'react-native';
import {Freshchat, FreshchatUser} from 'react-native-freshchat-sdk';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  CONTACT_NUMBER,
  ERROR_MESSAGE,
  REQUEST_ERROR,
  VIDEO_MESSAGE,
} from '../constant';
import {
  addRequestThunk,
  clearRequest,
} from '../../../store/reducers/TalkToDoctorSlice';

export const useChat = requestedData => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const [requestType, setRequestType] = useState('');
  const {userDetails} = useSelector(state => state.profile);
  const {isRequested, requestError} = useSelector(state => state.talkToDoctor);

  useEffect(() => {
    onInitChat();
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert(ERROR_MESSAGE);
      setError(!error);
    }
  }, [error]);

  useEffect(() => {
    if (isRequested && requestType === 'CHAT') Freshchat.showConversations();
    else if (isRequested && requestType === 'VIDEO')
      Alert.alert('Alert', VIDEO_MESSAGE, [
        {
          text: 'Ok',
          onPress: () =>
            navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]}),
        },
      ]);
    return () => dispatch(clearRequest());
  }, [isRequested]);

  useEffect(() => {
    if (requestError)
      Alert.alert('Alert', REQUEST_ERROR, [
        {
          text: 'Ok',
        },
      ]);
  }, [requestError]);

  const onInitChat = () => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = userDetails?.name;
    freshchatUser.email = userDetails?.email;
    freshchatUser.phoneCountryCode = '+91';
    freshchatUser.phone = userDetails?.number;
    Freshchat.setUser(freshchatUser, error => {
      setError(true);
    });
  };

  const onPressChat = () => {
    const data = {...requestedData, requestType: 'CHAT'};
    setRequestType('CHAT');
    dispatch(addRequestThunk({data}));
  };

  const onPressTalk = () => {
    Linking.openURL(`tel:${CONTACT_NUMBER}`);
  };

  const onPressCall = () => {
    const data = {...requestedData, requestType: 'VIDEO'};
    setRequestType('VIDEO');
    dispatch(addRequestThunk({data}));
  };

  return {
    onPressChat,
    onPressTalk,
    onPressCall,
  };
};
