export const usePlan = () => {
  const plans = {
    '1dbcc55e-3dec-4e07-8c2a-e222631afebb': {
      name: 'Health Risk Assessment',
      icon: 'HraSvg',
    },
    'bb4385d4-7f92-11ed-a1eb-0242ac120002': {
      name: 'Online Consultations',
      icon: 'TalkToDoctorSvg',
    },
    'ee5413dd-eb09-4a99-92d0-a4fc6d92a5e9': {
      name: 'My Tests',
      icon: 'Scientist',
    },
    '0641b94d-16c4-430e-93ce-7877123d0574': {
      name: 'Opd Consultations',
      icon: 'OPDIcon',
    },
    'b5aaaf86-e1f3-4acb-97a2-d5198ee4e7bb': {
      name: 'Pharmacy',
      icon: 'PharmacyIcon',
    },
    '7cb4491e-f058-4f9b-b14e-76dc04802136': {
      name: 'Mental Wellness',
      icon: 'Mental_wellness_svg_icon2',
    },
    '3ec08601-c446-4de7-99e1-fa246e5662bb': {
      name: '80 D  Benefit',
      icon: 'Eighty_d_benefit_svg_icon2',
    },
    '61cef9e9-5e7b-4082-aaf8-89606accfc4a': {
      name: 'Insurance claim Support',
      icon: 'Insurance_claim_support_svg_icon2',
    },
    '7d9a2b3c-905d-4830-b468-84755b7ba5bf': {
      name: 'Ambulance',
      icon: 'Ambulance_svg_icon2',
    },
    '5fa298d7-afda-44ea-b452-8aeced24eca6': {
      name: 'EMRM',
      icon: 'Emrm_svg_icon2',
    },
    '3089855d-85a1-4c2f-9538-c8276cd76768': {
      name: 'Discount',
      icon: 'Discount_svg_icon2',
    },
  };
  const getTests = item => {
    return item?.assignedAttributeResponseDtoList.map((item, index) => {
      return {
        ...item,
        key: index.toString(),
        value: `${item.name}\nUsed -${item.used} Available -${item.available}`,
      };
    });
  };
  return {plans, getTests};
};
