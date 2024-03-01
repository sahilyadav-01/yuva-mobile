import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProducts,
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
  const [data, setData] = useState([]);
  useFocusEffect(
    useCallback(() => {
      if(!applyFilter)
      dispatch(fetchProducts({productFilter:productList?.productFilter, pageNo:1, pageSize:3, paginate:false}));
     }, [productList?.productFilter]),
  );

  useEffect(() => {
    if(!productList?.paginate) setData(productList?.data)
    else {
      setData((data)=>{
        const newData = data.concat(productList?.data);
        return newData;
      })
    }
    if (!productList?.loading && !productList?.error && applyFilter && pageNo > 0) {
      setApplyFilter(false);
    }
  }, [productList?.data]);

  useEffect(()=>{
    if(pageNo > 1) dispatch(fetchProducts({productFilter:productList?.productFilter, pageNo, pageSize:3, paginate:true}));
    else if(pageNo === 0) setPageNo(1)
    else if(pageNo === 1 && applyFilter) dispatch(fetchProducts({productFilter:productList?.productFilter, pageNo: 1, pageSize: 3}));
  },[pageNo]);

  const onAdd = item => {
    const {productId} = item;
    navigation.navigate('Product',{screen: 'ProductDetails',params:{productId}});
  };

  const onEndReached = () => {
    if(data?.length < productList?.totalDocuments && !applyFilter) {
    setPageNo(pageNo + 1);
    }
  }

  const onFilterPress = item => {
    let categoryList = productList?.productFilter?.categoryIdList;
    if (
      item?.id !== null &&
      categoryList.includes(item?.id) &&
      categoryList?.length > 1
    ) {
      setApplyFilter(true);
      setPageNo(0);
      let updatedCategories = categoryList?.filter(
        category => category !== item?.id,
      );
      dispatch(
        setFilterList({
          ...productList.productFilter,
          categoryIdList: updatedCategories,
        }),
      );
    } else if (
      item?.id !== null &&
      categoryList.includes(item?.id) &&
      categoryList?.length === 1
    ) {
      Alert.alert('Alert', 'Need to have atleast one category');
    } else if (item?.id !== null && !categoryList.includes(item?.id)) {
      setApplyFilter(true);
      setPageNo(0);
      dispatch(
        setFilterList({
          ...productList.productFilter,
          categoryIdList: [...categoryList, item?.id],
        }),
      );
    }
  };

  const onAdvanceFiltersPress = () => {
    navigation?.navigate('ProductFilter');
  };

  return {
    productList,
    categories,
    applyFilter,
    pageNo,
    data,
    onAdd,
    onFilterPress,
    onAdvanceFiltersPress,
    onEndReached
  };
};
