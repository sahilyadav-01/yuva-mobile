import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSubCategories} from '../../../../store/reducers/ProductSlice';

export const useCategoryDetails = (navigation,params) => {
  const dispatch = useDispatch();
  const {subCategories} = useSelector(state => state.product);

  const onCategoryPress = (params) => {
    console.log('Params',params)
  };

  useFocusEffect(
    useCallback(() => {
        console.log('Params',params);
      dispatch(getAllSubCategories(1));
    }, []),
  );
  return {subCategories, onCategoryPress};
};
