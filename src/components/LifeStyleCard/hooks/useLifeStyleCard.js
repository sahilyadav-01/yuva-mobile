
import { useNavigation } from '@react-navigation/native';
import { PNG } from '../../../../assets';
export const useLifeStyleCard = ({ screenName }) => {

    const navigation = useNavigation();
    const imageData = {
        OPD_Consultation: PNG.OPD_Consultation,
        Health_Risk_Assessment: PNG.Health_Risk_Assessment,
        Health_Checkup_Packages: PNG.Health_Checkup_Packages,
        Talk_To_Doctor: PNG.Talk_To_Doctor,
        My_Health_Checkup: PNG.MY_HEALTH_CHECKUP
      };
    const onpress = () => {
        navigation.navigate(`${screenName}`);
    };
    return {
        onpress,
        imageData
    };
};