import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getElasticSearchResult} from '../../../../../store/reducers/PopularTestsSlice ';

export const useHomeSearchDetails = props => {
  const {name, attributeUuid, item} = props?.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {elasticResult} = useSelector(state => state.popularTests);

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
 
  const onPackagePress = obj => {
    navigation.navigate('ProductDetails', {
      headerName: 'details',
      packageName: obj?.item?.packageUuid,
      uuid: obj?.item?.packageUuid,
      showCartButton: true,
      isTest: false,
      name: obj?.item.packageName ?? null,
      cost: obj?.item?.cost ?? null,
    });
  };
  return {
    name,
    packageData: elasticResult?.popularPackageResponseDtoList,
    item,
    onPackagePress,
  };
};
