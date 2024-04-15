import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setProductFilter} from '../../../../store/reducers/ProductSlice';

export const useProductList = (productList) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onViewAll = item => {
    const productFilter = {
      categoryIdList: [item?.categoryId],
      subCategoryIdList: [item?.subCategoryId],
    };
    const productDto = {
      pageNo: 1,
      pageSize: 20,
      productFilter,
      totalDocuments: 0,
      totalPages: 0,
      data: [],
    };
    dispatch(setProductFilter(productDto));
    navigation.navigate('Products');
  };
  return {onViewAll};
};
