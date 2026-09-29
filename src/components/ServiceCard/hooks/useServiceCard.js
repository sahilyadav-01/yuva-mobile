import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetPackages} from '../../../store/reducers/ProgramAndPlanSlice';
import {resetTests} from '../../../store/reducers/PopularTestsSlice ';
export const useServiceCard = ({screenName}) => {
  const {profileUpdated} = useSelector(state => state.profile);
  const {loggedIn} = useSelector(state => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onpress = () => {
    if (screenName === 'HealthCheckupsTests') {
      dispatch(resetPackages());
      dispatch(resetTests());
      navigation.navigate(`${screenName}`, {index: 0});
    } else if (
      loggedIn !== 'loggedIn' &&
      screenName !== 'HealthCheckupsTests'
    ) {
      navigation.navigate(`${screenName}`);
    } else if (loggedIn === 'loggedIn' && !profileUpdated) {
      Alert.alert('Alert', 'Please update your details in the Profile');
    } else if (loggedIn === 'loggedIn' && profileUpdated) {
      navigation.navigate(`${screenName}`);
    }
  };
  return {
    onpress,
  };
};
