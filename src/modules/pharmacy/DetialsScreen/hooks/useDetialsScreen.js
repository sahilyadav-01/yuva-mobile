import {useSelector} from 'react-redux';

export const useDetialsScreen = () => {
  const {otpData} = useSelector(state => state.pharmacy);

  return {
    otpData,
  };
};
