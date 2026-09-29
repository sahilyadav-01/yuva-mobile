import {useSelector} from 'react-redux';

export const useOrderDetails = () => {
  const {cart} = useSelector(state => state.cart);
  const {itemDtoList} = cart || {};
  return {
    itemDtoList,
  };
};
