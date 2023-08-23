
import { SVG } from "../../../../../../assets";

export const usePlanServiceIcons = () => {
  const servicesArray = [
    { name: 'OPD Consultation',  icon: SVG['OPD_SVG_ICON'],text:'10 OPD'  },
    { name: 'Health Risk Assessment',  icon: SVG['HRA_SVG_ICON'],text:'Unlimited'  },
    { name: 'Pharmacy',  icon: SVG['PHARMACY_SVG_ICON'],text:'₹ 2000 Voucher'  },
    { name: 'Mental Wellness',  icon: SVG['MENTAL_WELLNESS_SVG_ICON'],text:'Unlimited'  },
    { name: 'My Tests', icon: SVG['MY_TEST_SVG_ICON'],text:'2 Full Body Checkup'  },
    { name: 'EMRM',  icon: SVG['EMRM_SVG_ICON'],text:'₹ 2000 Voucher'  },
    { name: 'Online Consultation',  icon: SVG['ONLINE_CONSULTATION_SVG_ICON'],text:'Unlimited'  },
    { name: 'Ambulance',  icon: SVG['AMBULANCE_SVG_ICON'],text:'Upto ₹5000/-'  },
  ];
  const servicesNumRows = Math.ceil(servicesArray.length / 4);
  const renderservicesItem = [];
  for (let i = 1; i <= servicesNumRows; i++) {
    renderservicesItem.push([]);
  }
  for (let i = 1; i <= servicesArray.length; i++) {
    renderservicesItem[Math.ceil(i / 4) - 1].push(servicesArray[i - 1]);
  }
  return {
    renderservicesItem
  };
};