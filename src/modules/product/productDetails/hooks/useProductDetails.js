import {useFocusEffect} from '@react-navigation/native';
import {useState, useRef, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetails} from '../../../../store/reducers/ProductSlice';

export const useProductDetails = () => {
  let flatListRef = useRef();
  const dispatch = useDispatch();
  const {productDetails} = useSelector(state => state.product);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  useFocusEffect(
    useCallback(() => {
      dispatch(getProductDetails(1));
    }, []),
  );
  const onArrowPress = (next, index) => {
    const scrollable =
      typeof productDetails?.data?.productImageList === 'object';
    if (scrollable) {
      let newIndex;
      if (next && index < productDetails?.data?.productImageList?.length - 1) {
        newIndex += 1;
        flatListRef.current?.scrollToIndex({index: newIndex, animated: true});
      } else if (!next && index > 0) {
        newIndex -= 1;
        flatListRef.current?.scrollToIndex({index: newIndex, animated: true});
      }
    }
  };
  const onSelectSize = index => setActiveIndex(index);
  const onSelectQuantity = increment => {
    if (increment) setQuantity(quantity + 1);
    else if (!increment && quantity > 1) setQuantity(quantity - 1);
  };
  const onAddToCartPress = () => {};
  const onHeadingPress = index => {
    console.log('Index', index);
  };
  return {
    productDetails,
    flatListRef,
    onArrowPress,
    activeIndex,
    onSelectSize,
    onSelectQuantity,
    quantity,
    onAddToCartPress,
    onHeadingPress,
  };
};
