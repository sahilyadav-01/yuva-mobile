import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { popularPackageNameThunk } from '../../../store/reducers/ProgramAndPlanSlice';
import { popularTestsSliceThunk } from '../../../store/reducers/PopularTestsSlice ';

export const usePackage = (selectedDropdownValue) => {
  const dispatch = useDispatch();
  const { popularPackageName } = useSelector(state => state.programAndPlan);
  const { popularTest } = useSelector(state => state.popularTests);

  useEffect(() => {
    dispatch(popularPackageNameThunk());
    dispatch(popularTestsSliceThunk());
  }, []);

console.log("popularPackageName",popularPackageName);
console.log("popularTest",popularTest);

  const [packageData, setPackageData] = useState(selectedDropdownValue === 'Health Checkup Packages'
    ? popularPackageName?.popularPackageResponseDtoList?.map(item => ({ ...item, selected: false }))
    : selectedDropdownValue === 'Diagnostic Tests'
      ? popularTest?.popularTestResponseDtoList
?.map(item => ({ ...item, selected: false }))
      : []
  );

  const [packageItem, setPackageItem] = useState(null);

  const dropdownData = [
    { key: '0', value: 'Health Checkup Packages' },
    { key: '1', value: 'Diagnostic Tests' },
  ];

  const onPackageSelect = obj => {
    const updatedData = packageData.map((item, index) => {
      if (index === obj.index) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setPackageData(updatedData);
  };

  const onPackagePress = obj => setPackageItem(obj);

  return { data: packageData, onPackageSelect, onPackagePress, dropdownData };
};
