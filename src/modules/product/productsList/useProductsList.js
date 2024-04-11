import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {fetchProducts} from '../../../store/reducers/ProductSlice';

export const useProductsList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    productList,
    categories: {data: categories},
  } = useSelector(state => state.product);
  const [applyFilter, setApplyFilter] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState({
    brandIdList: [],
    categoryIdList: [],
    productIdList: [],
    productName: '',
    subCategoryIdList: [],
  });
  useFocusEffect(
    useCallback(() => {
      if (!applyFilter)
        dispatch(
          fetchProducts({
            productFilter: productList?.productFilter,
            pageNo: 1,
            pageSize: 10,
            paginate: false,
          }),
        );
    }, [productList?.productFilter]),
  );

  useEffect(() => {
    if (!productList?.paginate) setData(productList?.data);
    else {
      setData(data => {
        const newData = data.concat(productList?.data);
        return newData;
      });
    }
    if (
      !productList?.loading &&
      !productList?.error &&
      applyFilter &&
      pageNo > 0
    ) {
      setApplyFilter(false);
    }
  }, [productList?.data]);

  useEffect(() => {
    if (pageNo > 1 && filterData.productName.length === 0)
      dispatch(
        fetchProducts({
          productFilter: filterData,
          pageNo,
          pageSize: 10,
          paginate: true,
        }),
      );
    else if (pageNo === 0 && filterData.productName.length === 0) setPageNo(1);
    else if (pageNo === 1 && applyFilter && filterData.productName.length === 0)
      dispatch(
        fetchProducts({
          productFilter: filterData,
          pageNo: 1,
          pageSize: 10,
        }),
      );
  }, [pageNo]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        productFilter: filterData,
        pageNo: 1,
        pageSize: 10,
      }),
    );
  }, [filterData]);

  const onAdd = item => {
    const {productId} = item;
    navigation.navigate('Product', {
      screen: 'ProductDetails',
      params: {productId},
    });
  };

  const onEndReached = () => {
    if (data?.length < productList?.totalDocuments && !applyFilter) {
      setPageNo(pageNo + 1);
    }
  };

  const onFilterPress = () => {};

  //   const onFilterPress = item => {
  //     let categoryList = productList?.productFilter?.categoryIdList;
  //     if (
  //       item?.id !== null &&
  //       categoryList.includes(item?.id) &&
  //       categoryList?.length > 1
  //     ) {
  //       setApplyFilter(true);
  //       setPageNo(0);
  //       let updatedCategories = categoryList?.filter(
  //         category => category !== item?.id,
  //       );
  //       dispatch(
  //         setFilterList({
  //           ...productList.productFilter,
  //           categoryIdList: updatedCategories,
  //         }),
  //       );
  //     } else if (
  //       item?.id !== null &&
  //       categoryList.includes(item?.id) &&
  //       categoryList?.length === 1
  //     ) {
  //       Alert.alert('Alert', 'Need to have atleast one category');
  //     } else if (item?.id !== null && !categoryList.includes(item?.id)) {
  //       setApplyFilter(true);
  //       setPageNo(0);
  //       dispatch(
  //         setFilterList({
  //           ...productList.productFilter,
  //           categoryIdList: [...categoryList, item?.id],
  //         }),
  //       );
  //     }
  //   };

  const onAdvanceFiltersPress = () => {
    navigation?.navigate('ProductFilter');
  };

  const onSearch = text => {
    if (text.trim().length > 2) {
      setPageNo(0);
      setFilterData({...filterData, productName: text});
    }
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
    onEndReached,
    onSearch,
    filterData,
  };
};
