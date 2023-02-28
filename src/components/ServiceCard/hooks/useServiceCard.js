
import { useNavigation } from '@react-navigation/native';
import { PNG } from '../../../../assets';
import { useDispatch, } from 'react-redux';
import { resetPackages } from '../../../store/reducers/ProgramAndPlanSlice';
export const useServiceCard = ({ screenName }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const imageData = {
    OPD_Consultation: PNG.OPD_Consultation,
    Health_Risk_Assessment: PNG.Health_Risk_Assessment,
    Health_Checkup_Packages: PNG.Health_Checkup_Packages,
    Talk_To_Doctor: PNG.Talk_To_Doctor,
    My_Health_Checkup: PNG.MY_HEALTH_CHECKUP
  };
  const onpress = () => {
    if (
      screenName !== 'Diagnostics' &&
      !profileUpdated &&
      loggedIn === 'loggedIn'
    )
      Alert.alert('Alert', 'Please update your details in the Profile');
    else if (profileUpdated && screenName === 'HealthCheckupsTests' && loggedIn === 'loggedIn') {
      dispatch(resetPackages());
      navigation.navigate(`${screenName}`);
    }
    else navigation.navigate(`${screenName}`);

  };
  return {
    onpress,
    imageData
  };
};
