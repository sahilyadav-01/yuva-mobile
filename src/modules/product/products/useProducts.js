import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../../store/reducers/ProductSlice';

export const useProducts = () => {
  const dispatch = useDispatch();
  const {productList} = useSelector(state => state.product);
  const [pageNo, setPageNo] = useState(1);
  useFocusEffect(
    useCallback(() => {
      const {productFilter, pageNo, pageSize} = productList;
      dispatch(fetchProducts({productFilter, pageNo, pageSize}));
    }, []),
  );

  const onAdd = (item) => {}
  return {productList,onAdd};
};
