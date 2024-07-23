import {useState} from 'react';

export const useSection10 = () => {
  const [isResend, setIsResend] = useState(false);
  const onResetEnable = isReset => {
    setIsResend(isReset);
  };
  return {
    onResetEnable,
  };
};
