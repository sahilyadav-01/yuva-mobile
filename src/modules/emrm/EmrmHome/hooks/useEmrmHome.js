import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

export const useEmrmHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loggedIn} = useSelector(state => state.auth);
  const onPressButton = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      navigation.navigate('EmrmListing');
    }
  };
  return {onPressButton};
};
