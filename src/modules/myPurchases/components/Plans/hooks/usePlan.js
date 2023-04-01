export const usePlan = () => {
  const plans = {
    '1dbcc55e-3dec-4e07-8c2a-e222631afebb': {
      name: 'Health Risk Assessment',
      icon: 'HraSvg',
      buttonText: 'Attempt Now',
    },
    'bb4385d4-7f92-11ed-a1eb-0242ac120002': {
      name: 'Talk To Doctor',
      icon: 'TalkToDoctorSvg',
      buttonText: 'Chat Now',
    },
    'ee5413dd-eb09-4a99-92d0-a4fc6d92a5e9': {
      name: 'My Tests',
      icon: 'Scientist',
      buttonText: 'Select this Package',
    },
    '0641b94d-16c4-430e-93ce-7877123d0574': {
      name: 'Opd Consultations',
      icon: 'OPDIcon',
      buttonText: 'Consult Now',
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
