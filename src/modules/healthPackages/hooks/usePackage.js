import {useEffect} from 'react';
import _ from 'lodash';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {popularTestsSliceThunk} from '../../../store/reducers/PopularTestsSlice ';
import {popularPackageNameThunk} from '../../../store/reducers/ProgramAndPlanSlice';
import {useCart} from '../../cart/hooks/useCart';
import { HEALTH } from '../constants';

export const usePackage = (initialIndex) => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const {addToCart,onRemove} = useCart();
  const {popularPackageName} = useSelector(state => state.programAndPlan);
  const {popularTest} = useSelector(state => state.popularTests);
  const {existingIds, addToCartLoad} = useSelector(state => state.cart);
  const [index, setIndex] = useState(initialIndex);
  const [packageData, setPackageData] = useState([]);
  const [testData, setTestData] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [isMoreData, setIsMoreData] = useState(false);
  const [search, setSearch] = useState('');
  const [renderData, setRenderData] = useState(false);
  useEffect(() => {
    if (focused && search === '' && currentPageNo === 1) {
      dispatch(
        popularPackageNameThunk({pageNo: currentPageNo, pageSize: 10, search}),
      );
      dispatch(
        popularTestsSliceThunk({pageNo: currentPageNo, pageSize: 10, search}),
      );
    }
  }, [focused, currentPageNo, search]);

  useEffect(() => {
    if (
      popularPackageName &&
      popularPackageName.popularPackageResponseDtoList.length > 0
    ) {
      setPackageData(
        _.uniqBy(
          packageData.concat(
            popularPackageName.popularPackageResponseDtoList.map(item => ({
              ...item,
              selected:
                existingIds.length > 0 &&
                existingIds.includes(item.packageUuid.toString()),
            })),
          ),
          'packageUuid',
        ),
      );
    }
  }, [popularPackageName]);

  useEffect(() => {
    if (popularTest && popularTest.popularTestResponseDtoList.length > 0) {
      setTestData(
        _.uniqBy(
          testData.concat(
            popularTest.popularTestResponseDtoList.map(item => ({
              ...item,
              selected:
                existingIds.length > 0 &&
                existingIds.includes(item.testId.toString()),
            })),
          ),
          'testId',
        ),
      );
    }
  }, [popularTest]);

  useEffect(() => {
    if (index === 0 && packageData.length > 0) {
      setPackageData(
        packageData.map(item => {
          if (existingIds.includes(item.packageUuid.toString()))
            return {...item, selected: true};
          else return {...item, selected: false};
        }),
      );
    } else if (index === 1 && testData.length > 0) {
      setTestData(
        testData.map(item => {
          if (existingIds.includes(item.testId.toString()))
            return {...item, selected: true};
          else return {...item, selected: false};
        }),
      );
    }
  }, [existingIds]);

  useEffect(() => {
    const dispatcher =
      index === 0 ? popularPackageNameThunk : popularTestsSliceThunk;
    if (isMoreData) {
      dispatch(dispatcher({pageNo: currentPageNo, pageSize: 10, search}));
    }
  }, [isMoreData]);

  useEffect(() => {
    if (currentPageNo > 1) setIsMoreData(true);
  }, [currentPageNo]);

  useEffect(() => {
    if (
      search.length > 0 &&
      currentPageNo === 1 &&
      packageData.length === 0 &&
      testData.length === 0
    ) {
      dispatch(
        popularPackageNameThunk({pageNo: currentPageNo, pageSize: 10, search}),
      );
      dispatch(
        popularTestsSliceThunk({pageNo: currentPageNo, pageSize: 10, search}),
      );
    }
  }, [search, currentPageNo, packageData, testData]);

  useEffect(() => {
    if (packageData.length > 0 && testData.length > 0) setRenderData(true);
  }, [packageData, testData]);

  const dropdownData = [
    {key: '0', value: 'Health Checkup Packages'},
    {key: '1', value: 'Diagnostic Tests'},
  ];

  const setSelectedDropdownValue = a => {
    let dropDownValue = dropdownData.find((item, index) => {
      if (item.key === a.toString()) {
        return item;
      }
    }).value;
    switch (dropDownValue) {
      case 'Health Checkup Packages':
        setCurrentPageNo(1);
        setIndex(0);
        setIsMoreData(false);
        setPackageData(
          popularPackageName.popularPackageResponseDtoList.map(item => ({
            ...item,
            selected:
              existingIds.length > 0 &&
              existingIds.includes(item.packageUuid.toString()),
          })),
        );
        break;
      case 'Diagnostic Tests':
        setCurrentPageNo(1);
        setIndex(1);
        setIsMoreData(false);
        setTestData(
          popularTest.popularTestResponseDtoList.map(item => ({
            ...item,
            selected:
              existingIds.length > 0 &&
              existingIds.includes(item.testId.toString()),
          })),
        );
        break;
    }
  };

  const onPackageSelect = obj => {
    const data = index === 0 ? packageData : testData;
    const updateFunc = index === 0 ? setPackageData : setTestData;
    const updatedData = data.map((item, i) => {
      if (i === obj.index) {
        if (item.selected === false) {
          addToCart(
            {
              name: item?.packageName ?? item?.testName,
              cost: item?.cost,
              productId: item?.packageUuid
                ? item?.packageUuid.toString()
                : item?.testId.toString(),
            },
            index === 0 ? 'PACKAGE' : 'TEST',
          );
        } else if (item.selected === true) {
          onRemove({productId:item?.packageUuid
            ? item?.packageUuid.toString()
            : item?.testId.toString()})
        }
        return item;
      }
      return item;
    });
    updateFunc(updatedData);
  };

  const onPackagePress = arg => {
    navigation.navigate('ProductDetails', {
      headerName:HEALTH,
      packageName: arg?.item?.packageUuid ?? arg?.item?.testId,
      uuid: arg?.item?.packageUuid ?? arg?.item?.testId,
      showCartButton: true,
      isTest: arg?.item?.testId ? true : false,
      name:arg?.item.packageName ?? arg?.item.testName ?? null,
      cost: arg?.item?.cost ?? null
    });
  };

  const onEndReached = () => {
    if (
      index === 0 &&
      popularPackageName &&
      currentPageNo < popularPackageName.totalPages
    ) {
      setCurrentPageNo(currentPageNo + 1);
    } else if (
      index === 0 &&
      popularPackageName &&
      currentPageNo >= popularPackageName.totalPages
    ) {
      setIsMoreData(false);
    }
    if (index === 1 && popularTest && currentPageNo < popularTest.totalPages) {
      setCurrentPageNo(currentPageNo + 1);
    } else if (
      index === 1 &&
      popularTest &&
      currentPageNo >= popularTest.totalPages
    ) {
      setIsMoreData(false);
    }
  };

  const onSearch = text => {
    setCurrentPageNo(1);
    setIsMoreData(false);
    setPackageData([]);
    setTestData([]);
    if (text.trim().length === 0) setSearch('');
    else if (text.trim().length > 3) setSearch(text);
  };

  const onContinuePress = () => navigation.navigate('CartScreen')

  return {
    onSearch,
    data: packageData,
    onEndReached,
    isMoreData,
    testData,
    index,
    onPackageSelect,
    onPackagePress,
    dropdownData,
    setSelectedDropdownValue,
    renderData,
    addToCartLoad,
    onContinuePress
  };
};
