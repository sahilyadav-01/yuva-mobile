import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PNG} from '../../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import { resetPackages } from '../../../store/reducers/ProgramAndPlanSlice';
import { resetTests } from '../../../store/reducers/PopularTestsSlice ';
export const useServiceCard = ({screenName}) => {
  const {profileUpdated} = useSelector(state => state.profile);
  const {loggedIn} = useSelector(state => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const imageData = {
    OPD_Consultation: PNG.OPD_Consultation,
    Health_Risk_Assessment: PNG.Health_Risk_Assessment,
    Health_Checkup_Packages: PNG.Health_Checkup_Packages,
    Talk_To_Doctor: PNG.Talk_To_Doctor,
    My_Health_Checkup: PNG.MY_HEALTH_CHECKUP,
    PHARMACY:PNG.PHARMACY,
    EMRM:PNG.EMRM,
  };
  const onpress = () => {
    if(screenName === 'HealthCheckupsTests'){
      dispatch(resetPackages());
      dispatch(resetTests());
      navigation.navigate(`${screenName}`,{index:0});
    }
    else if(loggedIn !== 'loggedIn' && screenName !== 'HealthCheckupsTests'){
      navigation.navigate(`${screenName}`);
    }
    else if(loggedIn === 'loggedIn' && !profileUpdated){
      Alert.alert('Alert', 'Please update your details in the Profile');
    }
    else if(loggedIn === 'loggedIn' && profileUpdated){
      navigation.navigate(`${screenName}`);
    }
  };
  return {
    onpress,
    imageData,
  };
};