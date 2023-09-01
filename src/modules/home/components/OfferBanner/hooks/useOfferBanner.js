import {useNavigation} from '@react-navigation/native';

export const useOfferBanner = () => {
  const navigation = useNavigation();
  const onBannerPress = itemDetails => {
    if (itemDetails?.contentType === 'TEST') {
      navigation.navigate('ProductDetails', {
        headerName: 'health',
        packageName: itemDetails?.itemId,
        uuid: itemDetails?.itemId,
        showCartButton: true,
        isTest: true,
        name: itemDetails?.innerBannerName ?? null,
        cost: itemDetails?.cost ?? null,
      });
    }
  };
  return {onBannerPress};
};
