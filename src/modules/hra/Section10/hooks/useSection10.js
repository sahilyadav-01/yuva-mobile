import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux';

export const useSection10 = () => {
  const navigation = useNavigation()
  const { loggedIn } = useSelector(state => state.auth);
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //The logic for opening the drawer should be added here
    }
  };

  return {
    loggedIn,
    onPressRightIcon,
  };
};