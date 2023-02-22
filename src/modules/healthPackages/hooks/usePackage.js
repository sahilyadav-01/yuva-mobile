import {useState} from 'react';

export const usePackage = data => {
  const [packageData, setPackageData] = useState(data);
  const [packageItem, setPackageItem] = useState(null);
  const onPackageSelect = obj => {
    const updatedData = packageData.map((item, index) => {
      if (index === obj.index) {
        return {...item, selected: !item.selected};
      }
      return item;
    });
    setPackageData(updatedData);
  };
  const onPackagePress = obj => setPackageItem(obj);
  return {data: packageData, onPackageSelect, onPackagePress};
};
