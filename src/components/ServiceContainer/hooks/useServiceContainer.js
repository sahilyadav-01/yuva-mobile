import { OPD, HRA, DIAGNOSTICS, Talk_TO_DOCTOR, OPD_CONSULTATION, HEALTH_RISK_ASSESSMENT, HEALTH_CHECKUP_PACKAGES, TALK_TO_DOCTOR_NAME, OPD_CONSULTATION_IMAGE, HEALTH_RISK_ASSESSMENT_IMAGE, HEALTH_CHECKUP_PACKAGES_IMAGE, TALK_TO_DOCTOR_IMAGE, MY_HEALTH_CHECKUP, MY_HEALTH_CHECKUP_IMAGE } from './constant';

export const useServiceContainer = () => {
    const services = [
        { name: OPD_CONSULTATION, screenName: OPD, image: OPD_CONSULTATION_IMAGE },
        { name: HEALTH_RISK_ASSESSMENT, screenName: HRA, image: HEALTH_RISK_ASSESSMENT_IMAGE },
        { name: MY_HEALTH_CHECKUP, screenName: 'ProfessionalServices', image: MY_HEALTH_CHECKUP_IMAGE },
        { name: TALK_TO_DOCTOR_NAME, screenName: Talk_TO_DOCTOR, image: TALK_TO_DOCTOR_IMAGE },
        { name: HEALTH_CHECKUP_PACKAGES, screenName: DIAGNOSTICS, image: HEALTH_CHECKUP_PACKAGES_IMAGE },
    ];

    return {
        services
    };
};