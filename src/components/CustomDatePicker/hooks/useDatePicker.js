import moment from 'moment';
import { useEffect, useState } from 'react';

export const useDatePicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDateObj, setSelectedDateObj] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(()=>{
    console.log('Selected',selectedDateObj,selectedTime)
  },[selectedDateObj,selectedTime])

  const getDaysOfMonth = () => {
    let nextMonth = new Date().getMonth() + 1;
    const year =
      nextMonth > 11 ? new Date().getFullYear() + 1 : new Date().getFullYear();
    nextMonth = nextMonth > 11 ? nextMonth % 12 : nextMonth;
    const monthEnd = moment(new Date(year, nextMonth, 1));
    const gap = parseInt(moment().diff(monthEnd, 'days')) * -1;
    let arr = [];
    for (let i = 0; i <= gap; i++) {
      arr.push(moment().add(i, 'days'));
    }
    return arr;
  };

  const getSlots = () => {
    const dayEnd = moment(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        23,
        59,
        59,
      ),
    );
    let gap = parseInt(moment().diff(dayEnd, 'hours')) * -1;
    gap = gap > 24 ? 24 : gap;
    let arr = [];
    for (let i = 1; i <= gap; i++) {
      arr.push(`${moment().add(i, 'hours').format('h')}`);
    }
    arr.push('12');
    const noonIndex = arr.findIndex(arg => {
      return arg === '12';
    });
    const morningSlots = arr.filter((item, index) => {
      if (
        parseInt(item) <= 12 &&
        index <= noonIndex &&
        noonIndex < arr.length - 1
      )
        return item;
    });
    const afternoonSlots = arr.filter((item, index) => {
      if (
        (noonIndex === arr.length - 1 && parseInt(item) <= 5) ||
        (noonIndex < arr.length - 1 &&
          parseInt(item) <= 5 &&
          index >= noonIndex)
      )
        return item;
    });
    const eveningSlots = arr.filter((item, index) => {
      if (
        (noonIndex === arr.length - 1 && parseInt(item) > 5) ||
        (noonIndex < arr.length - 1 && parseInt(item) > 5 && index >= noonIndex)
      )
        return item;
    });
    const {morning, afternoon, evening} = {
      morning: () => {
        let slots = [];
        morningSlots.forEach((item, index) => {
          if (index < morningSlots.length - 1) {
            slots.push({
              from: morningSlots[index],
              to: morningSlots[index + 1],
              type: 'Morning',
            });
          }
        });
        return slots;
      },
      afternoon: () => {
        let slots = [];
        afternoonSlots.forEach((item, index) => {
          if (index < afternoonSlots.length - 1) {
            slots.push({
              from: afternoonSlots[index],
              to: afternoonSlots[index + 1],
              type: 'Afternoon',
            });
          }
        });
        return slots;
      },
      evening: () => {
        let slots = [];
        eveningSlots.forEach((item, index) => {
          if (index < eveningSlots.length - 1) {
            slots.push({
              from: eveningSlots[index],
              to: eveningSlots[index + 1],
              type: 'Evening',
            });
          }
        });
        return slots;
      },
    };
    return [morning(), afternoon(), evening()];
  };

  const onSelectDay = (item,index) => {
    console.log('Item', item.toDate());
    setSelectedDateObj(item.toDate())
    setActiveIndex(index);
  };

  const onTimeSlotPress = (item, index) => {
    const startTime = parseInt(item[index]?.from.replace(':00', ''));
    const after12 = item[index]?.type === 'Morning' ? false : true;
    console.log('Item', after12 ? startTime + 12 : startTime);
    setSelectedTime(after12 ? startTime + 12 : startTime);
  };
  return {getDaysOfMonth, getSlots, onSelectDay, onTimeSlotPress, activeIndex};
};
