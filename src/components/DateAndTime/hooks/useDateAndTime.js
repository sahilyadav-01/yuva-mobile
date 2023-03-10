import {useState} from 'react';

export const useDateAndTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleDate = date => {
    setDate(date);
  };

  const handleTime = time => {
    setTime(time);
  };
  return {
    handleDate,
    handleTime,
    date,
    time,
  };
};
