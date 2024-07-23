import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSubCategories} from '../../../../store/reducers/ProductSlice';

export const useCategoryDetails = (navigation, params) => {
  const dispatch = useDispatch();
  const {subCategories} = useSelector(state => state.product);

  const onCategoryPress = params => {};

  const onAdd = productId => {
    navigation.navigate('Product', {
      screen: 'ProductDetails',
      params: {productId},
    });
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllSubCategories(params.item.id));
    }, []),
  );
  return {subCategories, onCategoryPress, onAdd};
};
