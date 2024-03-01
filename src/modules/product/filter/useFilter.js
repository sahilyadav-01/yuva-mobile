import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {
  fetchBrands,
  fetchCategories,
  fetchSubCategories,
  setFilterList,
} from '../../../store/reducers/ProductSlice';
import {Alert} from 'react-native';

export const useFilter = navigation => {
  const dispatch = useDispatch();
  const {productList, categoryDropdown, subCategoryDropdown, brandsDropdown} =
    useSelector(state => state.product);
  const [fetchSubCategory, setFetchSubCategory] = useState(false);
  const [data, setData] = useState([]);
  const [applyFilter, setApplyFilter] = useState(false);
  
  useFocusEffect(
    useCallback(() => {
      dispatch(fetchCategories());
      dispatch(fetchBrands());
    }, []),
  );

  useEffect(() => {
    if (!categoryDropdown.loading && !categoryDropdown.error) {
      categoryDropdown.data.length > 0 &&
        dispatch(
          fetchSubCategories(
            categoryDropdown.data?.map(item => parseInt(item?.id)),
          ),
        );
      setFetchSubCategory(true);
      setData(data => {
        if (data?.length > 0 && data?.map(item => item?.id).includes(0)) {
          let updatedData = data.map(item => {
            if (item.id !== 0) return item;
            else
              return {
                ...item,
                data:
                  categoryDropdown.data?.length === 0
                    ? []
                    : categoryDropdown.data.map(item => {
                        return {...item, status: 'unchecked'};
                      }),
              };
          });
          return updatedData;
        } else
          return [
            ...data,
            {
              title: 'Categories',
              id: 0,
              data:
                categoryDropdown.data?.length === 0
                  ? []
                  : categoryDropdown.data.map(item => {
                      return {...item, status: 'unchecked'};
                    }),
            },
          ];
      });
    }
  }, [categoryDropdown.loading, categoryDropdown.error]);

  useEffect(() => {
    if (
      !subCategoryDropdown.loading &&
      !subCategoryDropdown.error &&
      fetchSubCategory
    ) {
      setData(data => {
        if (data?.length > 0 && data?.map(item => item?.id).includes(1)) {
          let updatedData = data.map(item => {
            if (item.id !== 1) return item;
            else
              return {
                ...item,
                data:
                  subCategoryDropdown.data?.length === 0
                    ? []
                    : subCategoryDropdown.data.map(item => {
                        return {...item, status: 'unchecked', disabled: true};
                      }),
              };
          });
          return updatedData;
        } else
          return [
            ...data,
            {
              title: 'Sub Categories',
              id: 1,
              data:
                subCategoryDropdown.data?.length === 0
                  ? []
                  : subCategoryDropdown.data.map(item => {
                      return {...item, status: 'unchecked'};
                    }),
            },
          ];
      });
    }
  }, [
    subCategoryDropdown.loading,
    subCategoryDropdown.error,
    fetchSubCategory,
  ]);

  useEffect(() => {
    if (!brandsDropdown.loading && !brandsDropdown.error) {
      setData(data => {
        if (data?.length > 0 && data?.map(item => item?.id).includes(2)) {
          let updatedData = data.map(item => {
            if (item.id !== 2) return item;
            else
              return {
                ...item,
                data:
                  brandsDropdown.data?.length === 0
                    ? []
                    : brandsDropdown.data.map(item => {
                        return {...item, status: 'unchecked'};
                      }),
              };
          });
          return updatedData;
        } else
          return [
            ...data,
            {
              title: 'Brands',
              id: 2,
              data:
                brandsDropdown.data?.length === 0
                  ? []
                  : brandsDropdown.data.map(item => {
                      return {...item, status: 'unchecked'};
                    }),
            },
          ];
      });
    }
  }, [brandsDropdown.loading, brandsDropdown.error]);

  const fetchIds = (data, id) => {
    const categoryData = data.find(item => item.id === id)?.data;
    if (categoryData?.length === 0) return [];
    const selectedItems = categoryData.filter(
      item => item?.status === 'checked',
    );
    if (selectedItems?.length === 0) return [];
    return selectedItems.map(item => parseInt(item?.id));
  };

  const onApplyFilter = () => {
    const categoryIdList = fetchIds(data, 0);
    const subCategoryIdList = fetchIds(data, 1);
    const brandIdList = fetchIds(data, 2);
    if (
      categoryIdList?.length === 0 &&
      subCategoryIdList?.length === 0 &&
      brandIdList?.length === 0
    ) {
      Alert.alert('Alert', 'Please select data');
    } else {
      dispatch(
        setFilterList({
          ...productList.productFilter,
          categoryIdList,
          subCategoryIdList,
          brandIdList,
        }),
      );
      navigation?.goBack();
    }
  };

  const onClearFilter = () => {
    const clearedData = data.map(item => {
      if (item?.data?.length === 0) return item;
      else {
        return {
          ...item,
          data: item?.data?.map(i => {
            return {...i, status: 'unchecked'};
          }),
        };
      }
    });
    setData(clearedData);
  };

  const getListEmptyText = id => {
    switch (id) {
      case 0:
        return 'No Categories';
      case 1:
        return 'No Sub Categories';
      case 2:
        return 'No Brands';
    }
  };

  const onCheck = ({id, index}) => {
    let newData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          data: item.data.map((element, i) => {
            if (i === index) {
              return {
                ...element,
                status: element.status === 'checked' ? 'unchecked' : 'checked',
              };
            }
            return element;
          }),
        };
      } else return item;
    });
    if(id === 0){
    const categories = newData?.find(item=>item?.id === 0)?.data;
    let subCategories = newData?.find(item=>item?.id === 1)?.data;
    const activeCategories = categories?.length === 0 ? [] : categories?.filter(item=>item?.status === 'checked').map(item=>item?.id);
    const inActiveCategories = categories?.length === 0 ? [] : categories?.filter(item=>item?.status === 'unchecked').map(item=>item?.id);
    if((activeCategories?.length > 0 || inActiveCategories?.length > 0) && subCategories?.length > 0) {
      subCategories = subCategories?.map((item)=>{
        if(activeCategories?.includes(item?.secondId)) return {...item,disabled:false}
        else return {...item,disabled:true}
      })
      newData = newData.map(item=>{
        if(item?.id !== 1) return item;
        else {
          return {...item,data:subCategories}
        }
      })
    }
  }
    setData(newData);
  };

  return {
    onCheck,
    data,
    categoryDropdown,
    subCategoryDropdown,
    brandsDropdown,
    onApplyFilter,
    onClearFilter,
    getListEmptyText,
  };
};
