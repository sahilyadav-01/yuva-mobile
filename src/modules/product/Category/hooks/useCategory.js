import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories} from '../../../../store/reducers/ProductSlice';

export const useCategory = navigation => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.product);

  const onCategoryPress = item => {
    navigation.navigate('CategoryDetails', {item});
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllCategories());
    }, []),
  );
  return {categories, onCategoryPress};
};
