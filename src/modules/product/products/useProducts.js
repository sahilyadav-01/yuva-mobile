import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProducts,
  resetProductList,
  setFilterList,
} from '../../../store/reducers/ProductSlice';

export const useProducts = navigation => {
  const dispatch = useDispatch();
  const {
    productList,
    categories: {data: categories},
  } = useSelector(state => state.product);
  const [applyFilter, setApplyFilter] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  useFocusEffect(
    useCallback(() => {
      const {productFilter} = productList;
      if(!applyFilter)
      dispatch(fetchProducts({productFilter, pageNo:1, pageSize:20, paginate:false}));
     }, [productList?.productFilter]),
  );

  useEffect(() => {
    if (applyFilter) {
      const {productFilter, pageNo, pageSize} = productList;
      dispatch(fetchProducts({productFilter, pageNo, pageSize}));
    }
  }, [applyFilter, productList?.productFilter]);

  useEffect(() => {
    if (!productList?.loading && !productList?.error && applyFilter) {
      //This occurs when the fetchProduct API has finished excluding the first time
      setApplyFilter(false);
    }
  }, [productList]);

  const onAdd = item => {};

  const onFilterPress = item => {
    let categoryList = productList?.productFilter?.categoryIdList;
    if (
      item?.id !== null &&
      categoryList.includes(item?.id) &&
      categoryList?.length > 1
    ) {
      let updatedCategories = categoryList?.filter(
        category => category !== item?.id,
      );
      dispatch(
        setFilterList({
          ...productList.productFilter,
          categoryIdList: updatedCategories,
        }),
      );
      setApplyFilter(true);
    } else if (
      item?.id !== null &&
      categoryList.includes(item?.id) &&
      categoryList?.length === 1
    ) {
      Alert.alert('Alert', 'Need to have atleast one category');
    } else if (item?.id !== null && !categoryList.includes(item?.id)) {
      dispatch(
        setFilterList({
          ...productList.productFilter,
          categoryIdList: [...categoryList, item?.id],
        }),
      );
      setApplyFilter(true);
    }
  };

  const onAdvanceFiltersPress = () => {
    navigation?.navigate('ProductFilter');
  };

  return {
    productList,
    categories,
    applyFilter,
    onAdd,
    onFilterPress,
    onAdvanceFiltersPress,
  };
};
