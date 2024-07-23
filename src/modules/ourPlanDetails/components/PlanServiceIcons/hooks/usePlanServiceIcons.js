import {SVG} from '../../../../../../assets';

export const usePlanServiceIcons = data => {
  const servicesArray = data.map(item => {
    let serviceName, icon, serviceUuid;
    if (item.serviceUuid === '0641b94d-16c4-430e-93ce-7877123d0574') {
      serviceName = 'OPD Consultation';
      icon = SVG.OPD_SVG_ICON;
      serviceUuid = '0641b94d-16c4-430e-93ce-7877123d0574';
    } else if (item.serviceUuid === '1dbcc55e-3dec-4e07-8c2a-e222631afebb') {
      serviceName = 'Health Risk Assessment';
      icon = SVG.HRA_SVG_ICON;
      serviceUuid = '1dbcc55e-3dec-4e07-8c2a-e222631afebb';
    } else if (item.serviceUuid === 'b5aaaf86-e1f3-4acb-97a2-d5198ee4e7bb') {
      serviceName = 'Pharmacy';
      icon = SVG.PHARMACY_SVG_ICON;
      serviceUuid = 'b5aaaf86-e1f3-4acb-97a2-d5198ee4e7bb';
    } else if (item.serviceUuid === '7cb4491e-f058-4f9b-b14e-76dc04802136') {
      serviceName = 'Mental\nWellness';
      icon = SVG.MENTAL_WELLNESS_SVG_ICON;
      serviceUuid = '7cb4491e-f058-4f9b-b14e-76dc04802136';
    } else if (item.serviceUuid === 'ee5413dd-eb09-4a99-92d0-a4fc6d92a5e9') {
      serviceName = 'My Tests';
      icon = SVG.MY_TEST_SVG_ICON;
      serviceUuid = 'ee5413dd-eb09-4a99-92d0-a4fc6d92a5e9';
    } else if (item.serviceUuid === '5fa298d7-afda-44ea-b452-8aeced24eca6') {
      serviceName = 'EMRM';
      icon = SVG.EMRM_SVG_ICON;
      serviceUuid = '5fa298d7-afda-44ea-b452-8aeced24eca6';
    } else if (item.serviceUuid === 'bb4385d4-7f92-11ed-a1eb-0242ac120002') {
      serviceName = 'Online Consultation';
      icon = SVG.ONLINE_CONSULTATION_SVG_ICON;
      serviceUuid = 'bb4385d4-7f92-11ed-a1eb-0242ac120002';
    } else if (item.serviceUuid === '7d9a2b3c-905d-4830-b468-84755b7ba5bf') {
      serviceName = 'Ambulance';
      icon = SVG.AMBULANCE_SVG_ICON;
      serviceUuid = '7d9a2b3c-905d-4830-b468-84755b7ba5bf';
    } else if (item.serviceUuid === '3ec08601-c446-4de7-99e1-fa246e5662bb') {
      serviceName = '80 D  Benefit';
      (icon = SVG.EIGHTY_D_BENEFIT_SVG_ICON),
        (serviceUuid = '3ec08601-c446-4de7-99e1-fa246e5662bb');
    } else if (item.serviceUuid === '61cef9e9-5e7b-4082-aaf8-89606accfc4a') {
      serviceName = 'Insurance Claim Support';
      icon = SVG.INSURANCE_CLAIM_SUPPORT_SVG_ICON;
      serviceUuid = '61cef9e9-5e7b-4082-aaf8-89606accfc4a';
    } else if (item.serviceUuid === '3089855d-85a1-4c2f-9538-c8276cd76768') {
      serviceName = 'Discount';
      icon = SVG.DISCOUNT_SVG_ICON;
      serviceUuid = '3089855d-85a1-4c2f-9538-c8276cd76768';
    } else {
      return null;
    }
    const serviceItem = {
      name: serviceName,
      icon,
      text: item.allocatedCount,
      props: {color: item.available ? undefined : 'red'},
      serviceUuid,
      available: item.available,
    };

    return serviceItem;
  });
  const filteredServicesArray = servicesArray.filter(item => item !== null);
  if (
    typeof filteredServicesArray === 'object' &&
    filteredServicesArray?.length > 0
  ) {
    const offset = 4 - (filteredServicesArray.length % 4);
    if (offset !== 4) {
      for (let i = 1; i <= offset; i++) {
        filteredServicesArray.push({
          ...filteredServicesArray[filteredServicesArray.length - 1],
          name: '',
          text: null,
          props: {color: 'white'},
        });
      }
    }
  }
  return {
    filteredServicesArray,
  };
};
