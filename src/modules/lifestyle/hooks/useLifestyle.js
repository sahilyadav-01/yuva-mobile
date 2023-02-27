import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  diagnosisPackageDetailsThunk,
  diagnosisTestDetailsThunk,
} from '../../../store/reducers/DiagnosticsSlice';
import {lifeStyleEnumData} from '../../../store/reducers/LifeStyleSlice';
import {BOKINGTESTANDPACKAGE} from '../../diagnostic/BookingTestAndPackage/constants';

export const useLifestyle = initialEnum => {
  const {
    lifestylePackage,
    packageDataLoading,
    packageData: lifestylePackages,
    testData: lifestyleTests,
    packageDataError,
  } = useSelector(state => state.lifestylePackage);
  const {packageDetails, testDetails, loading} = useSelector(state => state.diagnostic);
  const focused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [packages, setPackages] = useState([]);
  const [enumMapping, setEnumMapping] = useState([]);
  const [selectedEnum, setSelectedEnum] = useState(initialEnum ?? '');
  const [packageData, setPackageData] = useState([]);
  const [testData, setTestData] = useState([]);
  const [renderData, setRenderData] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  useEffect(() => {
    if (focused && lifestylePackage.length > 0) {
      setEnumMapping(
        lifestylePackage.map((item, index) => {
          return {key: index.toString(), enumName: item.enumName};
        }),
      );
      setPackages(
        lifestylePackage.map((item, index) => {
          return {key: index.toString(), value: item.displayName};
        }),
      );
      setSelectedPackage(null);
    }
  }, [lifestylePackage, focused]);

  useEffect(() => {
    if (selectedEnum) dispatch(lifeStyleEnumData({enumName: selectedEnum}));
  }, [selectedEnum]);

  useEffect(() => {
    if (
      !packageDataLoading &&
      !packageDataError &&
      lifestylePackages.length > 0 &&
      lifestyleTests.length > 0
    ) {
      setPackageData(
        lifestylePackages.map(item => {
          return {...item, selected: false};
        }),
      );
      setTestData(
        lifestyleTests.map(item => {
          return {...item, selected: false, packageName: item.testName};
        }),
      );
      setRenderData(true);
    }
  }, [packageDataLoading]);

//   useEffect(() => {
//     if (packageDetails!=='' && testDetails === '' && selectedPackage && !loading) {
//       navigation.navigate('Diagnostics', {
//         screen: BOKINGTESTANDPACKAGE,
//         params: {
//           packageName: selectedPackage.name,
//           uuid: selectedPackage.id,
//         },
//       });
//     }
//     else if (packageDetails==='' && testDetails !== '' && selectedPackage && !loading) {
//         navigation.navigate('Diagnostics', {
//           screen: BOKINGTESTANDPACKAGE,
//           params: {
//             packageName: selectedPackage.name,
//             uuid: selectedPackage.id,
//           },
//         });
//       }
//   }, [packageDetails, testDetails, selectedPackage]);

  const select = arg => {
    setSelectedEnum(
      enumMapping.find(item => {
        if (item.key.toString() === arg.toString()) return item;
      }).enumName,
    );
  };
  const onPackagePress = arg => {
        navigation.navigate('Diagnostics', {
            screen: BOKINGTESTANDPACKAGE,
            params: {
              packageName: arg?.item?.packageUuid ?? arg?.item?.testId,
              uuid: arg?.item?.packageUuid ?? arg?.item?.testId,
            },
          });
  };
  const onPackageSelect = arg => {
    const id = arg?.item?.packageUuid ?? arg?.item?.testId;
    const objData = arg?.item?.packageUuid ? packageData : testData;
    const setObjData = arg?.item?.packageUuid ? setPackageData : setTestData;
    let data = objData.map(item => {
      if (item?.packageUuid && item?.packageUuid.toString() === id.toString())
        return {...item, selected: !item.selected};
      else if (
        item?.packageUuid &&
        item?.packageUuid.toString() !== id.toString()
      )
        return item;
      else if (item?.testId && item?.testId.toString() === id.toString())
        return {...item, selected: !item.selected};
      else if (item?.testId && item?.testId.toString() !== id.toString())
        return item;
    });
    setObjData(data);
  };
  return {
    packages,
    select,
    packageData,
    testData,
    renderData,
    onPackagePress,
    onPackageSelect,
  };
};
