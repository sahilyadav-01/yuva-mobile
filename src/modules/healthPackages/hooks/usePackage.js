import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { popularTestsSliceThunk } from '../../../store/reducers/PopularTestsSlice ';
import { popularPackageNameThunk } from '../../../store/reducers/ProgramAndPlanSlice';

export const usePackage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { popularPackageName } = useSelector(state => state.programAndPlan);
  const { popularTest } = useSelector(state => state.popularTests);
  useEffect(() => {
    if (navigation.isFocused()) {
      const isActive = 'true';
      dispatch(popularPackageNameThunk({ isActive, pageSize: 10 }));
      dispatch(popularTestsSliceThunk({ isActive, pageSize: 10 }));
    }
  }, []);

  useEffect(() => {

    if (popularPackageName && popularPackageName.popularPackageResponseDtoList.length > 0 && popularTest && popularTest.popularTestResponseDtoList.length > 0) {
      setPackageData(popularPackageName.popularPackageResponseDtoList.map(item => ({ ...item, selected: false })));
      setPackageData(popularTest.popularTestResponseDtoList.map(item => ({ ...item, selected: false })));
    }
  }, [popularPackageName, popularTest]);

  const [packageData, setPackageData] = useState([]);
  const dropdownData = [
    { key: '0', value: 'Health Checkup Packages' },
    { key: '1', value: 'Diagnostic Tests' },
  ];
  const setSelectedDropdownValue = (a) => {
    let dropDownValue = dropdownData.find((item, index) => {
      if (item.key === a.toString()) {
        return item
      }
    }).value
    switch (dropDownValue) {
      case 'Health Checkup Packages':
        setPackageData(popularPackageName.popularPackageResponseDtoList.map(item => ({ ...item, selected: false })))
        break;
      case 'Diagnostic Tests':
        setPackageData(popularTest.popularTestResponseDtoList.map(item => ({ ...item, selected: false })))
        break;
    }
  }


  const onPackageSelect = obj => {

    const updatedData = packageData.map((item, index) => {
      if (index === obj.index) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setPackageData(updatedData);
  };

  const onPackagePress = obj => {

    // setPackageItem(obj); // undefined variable, need to implement
    const params = {
      packageUuid: obj.item.packageUuid,
    }
    console.log("Package pressed: ", obj.item.packageUuid);
    navigation.navigate('packagesAndTestDetails');
  };


  return { data: packageData, onPackageSelect, onPackagePress, dropdownData, setSelectedDropdownValue };
};
