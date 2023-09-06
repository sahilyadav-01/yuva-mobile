import { useNavigation } from "@react-navigation/native";

export const usePackagesOffer = () => {
  const navigation = useNavigation();
  const onPackagePress = itemDetails => {
    if (itemDetails?.contentType === 'TEST') {
      navigation.navigate('ProductDetails', {
        headerName: 'health',
        packageName: itemDetails?.itemId,
        uuid: itemDetails?.itemId,
        showCartButton: true,
        isTest: true,
        name: null,
        cost: itemDetails?.cost ?? null,
      });
    } else if (itemDetails?.contentType === 'PACKAGE') {
      navigation.navigate('ProductDetails', {
        headerName: 'health',
        packageName: itemDetails?.itemId,
        uuid: itemDetails?.itemId,
        showCartButton: true,
        isTest: false,
        name: null,
        cost: itemDetails?.cost ?? null,
      });
    }
  };
  return {onPackagePress};
};
