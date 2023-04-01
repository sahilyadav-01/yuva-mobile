import {useState} from 'react';

export const useItem = item => {
  const [expanded, setExpanded] = useState(false);
  const onArrowPress = () => setExpanded(!expanded);
  const priceBreakUpArray = item?.plan
    ? [
        {
          name: item?.planName,
          totalAmount: item?.totalAmount,
          amountPaid: item?.amountPaid,
          discount: item?.totalAmount !== item?.amountPaid,
        },
      ]
    : [0];
  return {expanded, onArrowPress, priceBreakUpArray};
};
