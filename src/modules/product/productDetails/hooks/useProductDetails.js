import {useFocusEffect} from '@react-navigation/native';
import {useState, useRef, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetails} from '../../../../store/reducers/ProductSlice';

export const useProductDetails = (productId, navigation) => {
  let flatListRef = useRef();
  const dispatch = useDispatch();
  const {productDetails} = useSelector(state => state.product);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [htmlDescription, setHtmlDescription] = useState('');
  useFocusEffect(
    useCallback(() => {
      dispatch(getProductDetails(productId));
    }, []),
  );
  useEffect(() => {
    if (!productDetails.loading && productDetails?.data !== null) {
      setHtmlDescription(`<html>
      <body>
      ${productDetails?.data?.description ?? `<div></div>`}
      </body>
      </html>`);
    }
  }, [productDetails]);
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
    if (increment) setQuantity(quantity + 1);
    else if (!increment && quantity > 1) setQuantity(quantity - 1);
  };
  const onAddToCartPress = () => {};
  const onHeadingPress = index => {
    const productData = [
      productDetails?.data?.description ?? '',
      productDetails?.data?.nutritional ?? '',
    ];
    const html = `<html>
    <body>
    ${productData[index] ?? `<div></div>`}
    </body>
    </html>`;
    setHtmlDescription(html);
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
    onHeadingPress,
  };
};
