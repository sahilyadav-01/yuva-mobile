import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {getElasticSearchResult} from '../../../../../store/reducers/PopularTestsSlice ';
import {useCart} from '../../../../../modules/cart/hooks/useCart';
import {DETAILS} from '../constants';

export const useHomeSearchDetails = props => {
  const {name, attributeUuid, item} = props?.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {elasticResult} = useSelector(state => state.popularTests);
  const [packageData, setPackageData] = useState([]);
  const [testData, setTestData] = useState([]);
  const {addToCart, onRemove} = useCart();
  const {existingIds, addToCartLoad} = useSelector(state => state.cart);
  useEffect(() => {
    if (item) {
      dispatch(getElasticSearchResult({search: `search=${item}`, uuid: ''}));
    }
    if (attributeUuid) {
      dispatch(
        getElasticSearchResult({search: '', uuid: `uuid=${attributeUuid}`}),
      );
    }
  }, [item, attributeUuid]);

  useEffect(() => {
    if (
      elasticResult &&
      elasticResult?.popularPackageResponseDtoList.length > 0
    ) {
      setPackageData(
        _.uniqBy(
          packageData.concat(
            elasticResult?.popularPackageResponseDtoList.map(item => ({
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
    if (elasticResult && elasticResult?.popularTestResponseDtoList.length > 0) {
      setTestData(
        _.uniqBy(
          testData.concat(
            elasticResult?.popularTestResponseDtoList.map(item => ({
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
  }, [elasticResult]);
  useEffect(() => {
    if (
      elasticResult &&
      elasticResult?.popularPackageResponseDtoList?.length >= 0
    ) {
      setPackageData(
        packageData.map(item => {
          if (existingIds.includes(item.packageUuid.toString()))
            return {...item, selected: true};
          else return {...item, selected: false};
        }),
      );
    }
    if (
      elasticResult &&
      elasticResult?.popularTestResponseDtoList?.length >= 0
    ) {
      setTestData(
        testData.map(item => {
          if (existingIds.includes(item.testId.toString()))
            return {...item, selected: true};
          else return {...item, selected: false};
        }),
      );
    }
  }, [existingIds]);
  const onPackageSelect = arg => {
    const data = packageData;
    const updateFunc = setPackageData;
    const updatedData = data.map((item, i) => {
      if (i === arg.index) {
        if (item.selected === false) {
          addToCart(
            {
              name: item?.packageName,
              cost: item?.cost,
              productId: item?.packageUuid.toString(),
            },
            'PACKAGE',
          );
        } else if (item.selected === true) {
          onRemove({
            productId: item?.packageUuid.toString(),
          });
        }
        return item;
      }
      return item;
    });
    updateFunc(updatedData);
  };
  const onTestSelect = arg => {
    const data = testData;
    const updateFunc = setTestData;
    const updatedData = data.map((item, i) => {
      if (i === arg.index) {
        if (item.selected === false) {
          addToCart(
            {
              name: item?.testName,
              cost: item?.cost,
              productId: item?.testId.toString(),
            },
            'TEST',
          );
        } else if (item.selected === true) {
          onRemove({
            productId: item?.testId.toString(),
          });
        }
        return item;
      }
      return item;
    });
    updateFunc(updatedData);
  };
  const onPackagePress = obj => {
    navigation.navigate('ProductDetails', {
      headerName: DETAILS,
      packageName: obj?.item?.packageUuid ?? obj?.item?.testId,
      uuid: obj?.item?.packageUuid ?? obj?.item?.testId,
      showCartButton: true,
      isTest: obj?.item?.testId ? true : false,
      name: obj?.item.packageName ?? obj?.item.testName ?? null,
      cost: obj?.item?.cost ?? null,
    });
  };
  return {
    name,
    packageData,
    item,
    onPackagePress,
    onPackageSelect,
    testData,
    onTestSelect,
    addToCartLoad,
  };
};
