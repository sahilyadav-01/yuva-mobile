import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPurchaseItemDetails} from '../../../../../store/reducers/PurchasesSlice';

export const useItem = item => {
  const dispatch = useDispatch();
  const {purchasesTab, purchasesItemDetails, purchasesDetailLoading} =
    useSelector(state => state.purchases);
  const [expanded, setExpanded] = useState(false);
  const [arrowPress, setArrowPress] = useState(false);
  useEffect(() => {
    if (
      arrowPress &&
      purchasesDetailLoading === false &&
      purchasesItemDetails !== null && purchasesItemDetails[`${item?.orderNumber}`] !== undefined 
    ) {
      setExpanded(true);
    }
  }, [purchasesDetailLoading, arrowPress]);
  const onArrowPress = orderId => {
    if (purchasesTab === 0) setExpanded(!expanded);
    else if (purchasesTab === 1 && expanded === true) {setExpanded(false);
    setArrowPress(false);
    }
    else if (purchasesTab === 1 && expanded === false) {
      dispatch(getPurchaseItemDetails({orderId}));
      item?.orderNumber === orderId.toString() && setArrowPress(true);
    }
  };
  const priceBreakUpArray = item?.plan
    ? [
        {
          name: item?.planName,
          totalAmount: item?.totalAmount,
          amountPaid: item?.amountPaid,
          discount: item?.totalAmount !== item?.amountPaid,
        },
      ]
    : expanded
    ? purchasesItemDetails[`${item.orderNumber}`]?.itemDetails.map(i => {
        return {
          name: i?.itemName,
          totalAmount: i?.itemCost,
          amountPaid: i?.itemDiscountedCost,
          discount: `${purchasesItemDetails[`${item.orderNumber}`]?.couponAmount}`,
          couponName:purchasesItemDetails[`${item.orderNumber}`]?.couponName ?? null,
          totalDiscount: `${purchasesItemDetails[`${item.orderNumber}`]?.discount}`,
          processingCharge:purchasesItemDetails[`${item.orderNumber}`]?.processingCharge
        };
      })
    : null;
  return {
    expanded,
    onArrowPress,
    priceBreakUpArray,
    purchasesTab
  };
};
