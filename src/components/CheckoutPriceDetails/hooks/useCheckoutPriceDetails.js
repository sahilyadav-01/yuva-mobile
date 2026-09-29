import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setTermsAndCondtionChecked,
  removeCouponCart,
} from '../../../store/reducers/CartSlice';
import {
  removePlaneCoupon,
  selectedPlaneCouponCode,
} from '../../../store/reducers/CouponSlice';
import {planAmountThunk} from '../../../store/reducers/ProgramAndPlanSlice';
import {resetPaymentMethod} from '../../../store/reducers/PaymentSlice';

export const useCheckoutPriceDetails = isPrice => {
  const dispatch = useDispatch();
  const {amountToBePaid, totalCost, totalDiscount, Quantity, processingCharge} =
    isPrice?.isPrice || {};
  const {plan} = isPrice?.isplan || {};
  const [checked, setChecked] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(true);
  const [price, setPrice] = useState();
  const [discountBeforeCoupon, setDiscountBeforeCoupon] = useState();
  const [costAfterDiscount, setCostAfterDiscount] = useState();
  const [finalamountToBePaid, setFinalAmountToBePaid] = useState();
  const [couponFinalAmount, setCouponFinalAmount] = useState();
  const [couponDiscount, setCouponDiscount] = useState();
  const {
    planAmountToBePaid,
    planCostAfterDiscount,
    planDiscountBeforeCoupon,
    planDiscountForCoupon,
    planPrice,
    mainItem,
    setItemName,
  } = useSelector(state => state.programAndPlan);
  const {planCouponDiscount, planCouponFinalAmount, planeCouponCode} =
    useSelector(state => state.coupon);
  const crossAction = () => {
    dispatch(selectedPlaneCouponCode({couponCode: null}));
    dispatch(planAmountThunk({planUuid: mainItem?.planUuid}));
    dispatch(removeCouponCart());
  };
  const onSelect = () => {
    if (selectedOption1 === true) {
      setSelectedOption1(false);
      setSelectedOption2(true);
    } else {
      setSelectedOption1(true);
      setSelectedOption2(false);
    }
  };
  useEffect(() => {
    dispatch(resetPaymentMethod(selectedOption1));
  }, [selectedOption1]);

  useEffect(() => {
    dispatch(removePlaneCoupon());
  }, [setItemName]);
  useEffect(() => {
    if (setItemName === 'Annually') {
      setPrice(planPrice?.ANNUALLY?.price);
      setDiscountBeforeCoupon(
        planDiscountBeforeCoupon?.ANNUALLY?.discountBeforeCoupon,
      );
      setCostAfterDiscount(planCostAfterDiscount?.ANNUALLY?.costAfterDiscount);
      setFinalAmountToBePaid(planAmountToBePaid?.ANNUALLY?.amountToBePaid);
      setCouponFinalAmount(planCouponFinalAmount?.ANNUALLY?.amountToBePaid);
      setCouponDiscount(planCouponDiscount?.ANNUALLY?.discountForCoupon);
    } else if (setItemName === 'Quarterly') {
      setPrice(planPrice?.QUARTERLY?.price);
      setDiscountBeforeCoupon(
        planDiscountBeforeCoupon?.QUARTERLY?.discountBeforeCoupon,
      );
      setCostAfterDiscount(planCostAfterDiscount?.QUARTERLY?.costAfterDiscount);
      setFinalAmountToBePaid(planAmountToBePaid?.QUARTERLY?.amountToBePaid);
      setCouponFinalAmount(planCouponFinalAmount?.QUARTERLY?.amountToBePaid);
      setCouponDiscount(planCouponDiscount?.QUARTERLY?.discountForCoupon);
    } else if (setItemName === 'Half Yearly') {
      setPrice(planPrice?.HALF_YEARLY?.price);
      setDiscountBeforeCoupon(
        planDiscountBeforeCoupon?.HALF_YEARLY?.discountBeforeCoupon,
      );
      setCostAfterDiscount(
        planCostAfterDiscount?.HALF_YEARLY?.costAfterDiscount,
      );
      setFinalAmountToBePaid(planAmountToBePaid?.HALF_YEARLY?.amountToBePaid);
      setCouponFinalAmount(planCouponFinalAmount?.HALF_YEARLY?.amountToBePaid);
      setCouponDiscount(planCouponDiscount?.HALF_YEARLY?.discountForCoupon);
    }
  }, [
    setItemName,
    planCouponDiscount,
    planCouponFinalAmount,
    planAmountToBePaid,
    planCostAfterDiscount,
    planPrice,
    planDiscountBeforeCoupon,
  ]);
  useEffect(() => {
    dispatch(setTermsAndCondtionChecked(checked));
  }, [checked]);
  return {
    amountToBePaid,
    checked,
    setChecked,
    price: isPrice?.price,
    totalCost,
    totalDiscount,
    Quantity,
    planAmountToBePaid,
    planCostAfterDiscount,
    planDiscountBeforeCoupon,
    planDiscountForCoupon,
    planPrice,
    price,
    planCouponDiscount,
    planCouponFinalAmount,
    crossAction,
    planeCouponCode,
    plan,
    processingCharge,
    onSelect,
    selectedOption1,
    selectedOption2,
    discountBeforeCoupon,
    costAfterDiscount,
    finalamountToBePaid,
    couponFinalAmount,
    couponDiscount,
  };
};
