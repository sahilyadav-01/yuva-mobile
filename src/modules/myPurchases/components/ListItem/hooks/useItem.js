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
      purchasesItemDetails[`${item.orderNumber}`] !== undefined
    ) {
      setExpanded(true);
    }
  }, [purchasesDetailLoading, arrowPress]);
  const onArrowPress = orderId => {
    if (purchasesTab === 0) setExpanded(!expanded);
    else if (purchasesTab === 1 && expanded === true) setExpanded(false);
    else if (purchasesTab === 1 && expanded === false) {
      dispatch(getPurchaseItemDetails({orderId}));
      setArrowPress(true);
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
    : purchasesItemDetails[`${item.orderNumber}`]?.itemDetails.map(item => {
        return {
          name: item?.itemName,
          totalAmount: item?.itemCost,
          amountPaid: item?.itemDiscountedCost,
          discount: item?.itemCost !== item?.itemDiscountedCost,
        };
      });
  return {expanded, onArrowPress, priceBreakUpArray};
};
