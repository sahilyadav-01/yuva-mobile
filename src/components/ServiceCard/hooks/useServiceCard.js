import { useNavigation } from '@react-navigation/native';
import { PNG } from '../../../../assets';
export const useServiceCard = ({ screenname }) => {

    const navigation = useNavigation();
    const imageData = {
        OPD_Consultation: PNG.OPD_Consultation,
        Health_Risk_Assessment: PNG.Health_Risk_Assessment,
        Health_Checkup_Packages: PNG.Health_Checkup_Packages,
        Talk_To_Doctor: PNG.Talk_To_Doctor,
      };
    const onpress = () => {
        navigation.navigate(`${screenname}`);
    };
    return {
        onpress,
        imageData
    };
};
