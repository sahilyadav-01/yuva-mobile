import {useState, useRef, useCallback, useEffect} from 'react';
import { Alert } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {getProductDetails} from '../../../../store/reducers/ProductSlice';
import {useCart} from '../../../cart/hooks/useCart';
import {setRedirectState} from '../../../../store/reducers/NotificationSlice';

export const useProductDetails = (productId, navigation) => {
  const comingSoon = true;
  let flatListRef = useRef();
  const dispatch = useDispatch();
  const {addToCart} = useCart();
  const {productDetails} = useSelector(state => state.product);
  const {
    cart: {itemDtoList},
    addToCartItem,
    updateCartLoading,
  } = useSelector(state => state.cart);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [htmlDescription, setHtmlDescription] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [addItem, setAddItem] = useState(false);
  useFocusEffect(
    useCallback(() => {
      dispatch(getProductDetails(productId));
    }, []),
  );
  useEffect(() => {
    if (!productDetails.loading && productDetails?.data !== null) {
      const productId =
        productDetails?.data?.productPriceResponseDtoForUserList[activeIndex]
          ?.productId ?? null;
      const priceId =
        productDetails?.data?.productPriceResponseDtoForUserList[activeIndex]
          ?.priceId;
      setHtmlDescription(`<html>
      <body>
      ${productDetails?.data?.description ?? '<div></div>'}
      </body>
      </html>`);
      fetchItemExists({productId, priceId});
    }
  }, [productDetails, activeIndex, quantity]);

  useEffect(() => {
    if (addItem && !updateCartLoading) {
      setAddItem(false);
      dispatch(setRedirectState(false));
      setDisabled(addToCartItem);
    }
  }, [updateCartLoading]);

  const fetchItemExists = ({productId, priceId}) => {
    if (itemDtoList?.length === 0) {
      setDisabled(false);
    } else {
      const exists =
        itemDtoList.filter(item => {
          const arg =
            item?.productType === 'PRODUCT' &&
            item?.productId?.toString() === productId.toString() &&
            item?.productPriceId !== null &&
            item?.productPriceId?.toString() === priceId?.toString() &&
            item?.count === quantity;
          if (arg) {
            return item;
          }
        })?.length > 0;
      setDisabled(exists);
    }
  };

  const onArrowPress = (next, index) => {
    const scrollable =
      typeof productDetails?.data?.productImageList === 'object';
    if (scrollable) {
      let newIndex;
      if (next && index < productDetails?.data?.productImageList?.length - 1) {
        newIndex += 1;
        flatListRef.current?.scrollToIndex({index: newIndex, animated: true});
        setCurrentIndex(newIndex);
      } else if (!next && index > 0) {
        newIndex -= 1;
        flatListRef.current?.scrollToIndex({index: newIndex, animated: true});
        setCurrentIndex(newIndex);
      }
    }
  };
  const onSelectSize = index => setActiveIndex(index);
  const onSelectQuantity = increment => {
    if (increment) {
      setQuantity(quantity + 1);
    } else if (!increment && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onAddToCartPress = () => {
    if(comingSoon) {
      Alert.alert('Alert','Coming Soon')
    }
    else {
    setDisabled(true);
    setAddItem(true);
    dispatch(setRedirectState(true));
    const {finalPrice, priceId} =
      productDetails?.data?.productPriceResponseDtoForUserList[activeIndex];
    addToCart(
      {
        name: productDetails?.data?.name,
        cost: finalPrice,
        productId,
        productPriceId: priceId,
      },
      'PRODUCT',
      quantity,
    );
  }
  };

  const fetchProductDetails = () => {
    if (productDetails?.data?.description?.length > 0) {
      return `<html>
    <body>
    ${productDetails?.data?.description}
    </body>
    </html>`;
    }
    return '';
  };

  const fetchNutritionalValue = () => {
    if (productDetails?.data?.nutritional?.length > 0) {
      return `<html>
    <body>
    ${productDetails?.data?.nutritional}
    </body>
    </html>`;
    }
    return '';
  };
  return {
    productDetails,
    flatListRef,
    onArrowPress,
    activeIndex,
    onSelectSize,
    onSelectQuantity,
    quantity,
    htmlDescription,
    currentIndex,
    onAddToCartPress,
    disabled,
    fetchProductDetails,
    fetchNutritionalValue,
  };
};
