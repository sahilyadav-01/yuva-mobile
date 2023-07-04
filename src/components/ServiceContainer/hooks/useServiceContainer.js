import { OPD, HRA, DIAGNOSTICS, Talk_TO_DOCTOR, OPD_CONSULTATION, HEALTH_RISK_ASSESSMENT, HEALTH_CHECKUP_PACKAGES, TALK_TO_DOCTOR_NAME, OPD_CONSULTATION_IMAGE, HEALTH_RISK_ASSESSMENT_IMAGE, HEALTH_CHECKUP_PACKAGES_IMAGE, TALK_TO_DOCTOR_IMAGE, MY_TESTS, MY_HEALTH_CHECKUP_IMAGE, OBESITY, THYROID, WOMEN_HEALTH, SMOKING_AND_ALCOHOL, DIABETES, HYPER_TENSION, HEALTH_CHECKUP, PHARMACY, PHARMACY_NAME } from '../constant';

export const useServiceContainer = (props) => {
  const LifeStyleCardData = props?.data;
  const services = [
    { name: OPD_CONSULTATION, screenName: OPD, image: OPD_CONSULTATION_IMAGE },
    { name: HEALTH_RISK_ASSESSMENT, screenName: HRA, image: HEALTH_RISK_ASSESSMENT_IMAGE },
    { name: MY_TESTS, screenName: DIAGNOSTICS, image: MY_HEALTH_CHECKUP_IMAGE },
    { name: TALK_TO_DOCTOR_NAME, screenName: Talk_TO_DOCTOR, image: TALK_TO_DOCTOR_IMAGE },
    { name: HEALTH_CHECKUP_PACKAGES, screenName: HEALTH_CHECKUP, image: HEALTH_CHECKUP_PACKAGES_IMAGE },
    { name: 'Mental Wellness', screenName: 'MentalWellness', image: HEALTH_CHECKUP_PACKAGES_IMAGE },
    // { name: PHARMACY_NAME, screenName: PHARMACY, image: PHARMACY },
  ];

  const lifeStyle = LifeStyleCardData && LifeStyleCardData.length ? LifeStyleCardData.map(item => {
    let image;
    switch (item.enumName) {
      case 'OBESITY':
        image = OBESITY;
        break;
      case 'THYROID':
        image = THYROID;
        break;
      case 'WOMEN_HEALTH':
        image = WOMEN_HEALTH;
        break;
      case 'SMOKING_AND_ALCOHOL':
        image = SMOKING_AND_ALCOHOL;
        break;
      case 'DIABETES':
        image = DIABETES;
        break;
      case 'HYPER_TENSION':
        image = HYPER_TENSION;
        break;
      default:
        image = "";
    }
    return { name: item.displayName, image: image, enumName: item.enumName };
  }) : [];
  return {
    services,
    lifeStyle
  };
};