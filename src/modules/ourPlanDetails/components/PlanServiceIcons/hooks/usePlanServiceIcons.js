
import { SVG } from "../../../../../../assets";

export const usePlanServiceIcons = (data) => {
  const servicesArray = [
    { name: 'OPD Consultation',  icon: SVG['OPD_SVG_ICON'],text:data[0]?.allocatedCount},
    { name: 'Health Risk Assessment',  icon: SVG['HRA_SVG_ICON'],text:data[2]?.allocatedCount},
    { name: 'Pharmacy',  icon: SVG['PHARMACY_SVG_ICON'],text:data[4]?.allocatedCount},
    { name: 'Mental Wellness',  icon: SVG['MENTAL_WELLNESS_SVG_ICON'],text:data[5]?.allocatedCount},
    { name: 'My Tests', icon: SVG['MY_TEST_SVG_ICON'],text:data[1]?.allocatedCount},
    { name: 'EMRM',  icon: SVG['EMRM_SVG_ICON'],text:data[6]?.allocatedCount},
    { name: 'Online Consultation',  icon: SVG['ONLINE_CONSULTATION_SVG_ICON'],text:data[3]?.allocatedCount},
    { name: 'Ambulance',  icon: SVG['AMBULANCE_SVG_ICON'],text:data[9]?.allocatedCount},
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