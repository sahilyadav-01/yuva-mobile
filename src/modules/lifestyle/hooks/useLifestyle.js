import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {lifeStyleEnumData} from '../../../store/reducers/LifeStyleSlice';
import { useCart } from '../../cart/hooks/useCart';
import {BOKINGTESTANDPACKAGE} from '../../diagnostic/BookingTestAndPackage/constants';

export const useLifestyle = (initialEnum,initialName) => {
  const {
    lifestylePackage,
    packageDataLoading,
    packageData: lifestylePackages,
    testData: lifestyleTests,
    packageDataError,
  } = useSelector(state => state.lifestylePackage);
  const {existingIds, addToCartLoad} = useSelector(state => state.cart);
  const focused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {addToCart} = useCart();
  const [packages, setPackages] = useState([]);
  const [enumMapping, setEnumMapping] = useState([]);
  const [selectedEnum, setSelectedEnum] = useState(initialEnum ?? '');
  const [packageData, setPackageData] = useState([]);
  const [testData, setTestData] = useState([]);
  const [renderData, setRenderData] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [placeholder,setPlaceholder] = useState(initialName);
  const [searchText, setSearchText] = useState('');
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
    if (selectedEnum && searchText.length === 0) dispatch(lifeStyleEnumData({enumName: selectedEnum}));
  }, [selectedEnum,searchText]);

  useEffect(() => {
    if (
      !packageDataLoading &&
      !packageDataError &&
      lifestylePackages.length > 0 &&
      lifestyleTests.length > 0
    ) {
      setPackageData(
        lifestylePackages.map(item => {
          return {...item, selected: existingIds.length > 0 &&
            existingIds.includes(item.packageUuid.toString())};
        }),
      );
      setTestData(
        lifestyleTests.map(item => {
          return {...item, selected: existingIds.length > 0 &&
            existingIds.includes(item.testId.toString()), packageName: item.testName};
        }),
      );
      setRenderData(true);
    }
    else if (
      !packageDataLoading &&
      !packageDataError &&
      lifestylePackages.length === 0 && 
      lifestyleTests.length > 0 
    ){
      setPackageData([]);
      setTestData(
        lifestyleTests.map(item => {
          return {...item, selected: existingIds.length > 0 &&
            existingIds.includes(item.testId.toString()), packageName: item.testName};
        }),
      );
    }
    else if (
      !packageDataLoading &&
      !packageDataError &&
      lifestylePackages.length > 0 &&
      lifestyleTests.length === 0 
    ){
      setTestData([]);
      setPackageData(
        lifestylePackages.map(item => {
          return {...item, selected: existingIds.length > 0 &&
            existingIds.includes(item.packageUuid.toString())};
        }),
      );
    }
  }, [packageDataLoading]);

  useEffect(()=>{
    if(packageData.length > 0) {
      setPackageData(
        packageData.map(item => {
          if (existingIds.includes(item.packageUuid.toString()))
            return {...item, selected: true};
          else return {...item, selected: false};
        }),
      );
    }
    if(testData.length > 0) {
      setTestData(
        testData.map(item => {
          if (existingIds.includes(item.testId.toString()))
            return {...item, selected: true};
          else return {...item, selected: false};
        }),
      );
    }
  },[existingIds])

  const onContinuePress = () => navigation.navigate('CartScreen')

  const onSearch = (arg) => {
    setSearchText(arg.trim());
    if(arg.trim().length > 3){
      dispatch(lifeStyleEnumData({enumName: selectedEnum, search:arg}));
    }
  }

  const select = arg => {
    setSelectedEnum(
      enumMapping.find(item => {
        if (item.key.toString() === arg.toString()) return item;
      }).enumName,
    );
    setPlaceholder(packages.find(item => {
      if (item.key.toString() === arg.toString()) return item;
    }).value)
  };
  const onPackagePress = arg => {
        navigation.navigate('ProductDetails', {
          packageName: arg?.item?.packageUuid ?? arg?.item?.testId,
          uuid: arg?.item?.packageUuid ?? arg?.item?.testId,
          showCartButton: true,
          isTest: arg?.item?.testId ? true : false, 
          name:arg?.item?.packageName ?? null,
          cost: arg?.item?.cost ?? null
        });
  };
  const onPackageSelect = arg => {
    const id = arg?.item?.packageUuid ?? arg?.item?.testId;
    const objData = arg?.item?.packageUuid ? packageData : testData;
    objData.forEach(item => {
      if (item?.packageUuid && item?.packageUuid.toString() === id.toString() && item.selected === false){
        addToCart({
          name: item?.packageName,
          cost: item?.cost,
          productId: item?.packageUuid.toString()
        },
        'PACKAGE')
      }
      if (item?.packageUuid && item?.packageUuid.toString() === id.toString() && item.selected === true){
        console.log('Package remove',item)
      }
      else if (item?.testId && item?.testId.toString() === id.toString() && item.selected === false){
        addToCart({
          name: item?.testName,
          cost: item?.cost,
          productId: item?.testId.toString()
        },
        'TEST')
      }
      else if (item?.testId && item?.testId.toString() === id.toString() && item.selected === true){
        console.log('Test remove',item)
      }
    });
  };
  return {
    packages,
    select,
    packageData,
    testData,
    renderData,
    addToCartLoad,
    onPackagePress,
    onPackageSelect,
    onContinuePress,
    onSearch,
    placeholder
  };
};
