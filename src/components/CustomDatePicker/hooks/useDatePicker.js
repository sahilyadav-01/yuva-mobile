import moment from 'moment';
import {useEffect, useState} from 'react';
import _ from 'lodash';

export const useDatePicker = (onDateTimeSelect,OPD) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDateObj, setSelectedDateObj] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedTime === null)
      onDateTimeSelect({
        status: false,
        message: 'Please select a time slot',
        value: null,
      });
    else {
      const unixTime = Date.parse(
        new Date(
          selectedDateObj.getFullYear(),
          selectedDateObj.getMonth(),
          selectedDateObj.getDate(),
          selectedTime,
        ),
      ).toString();
      onDateTimeSelect({
        status: true,
        message: 'Date and time selected',
        value: unixTime,
      });
    }
  }, [selectedDateObj, selectedTime]);

  useEffect(() => {
    setSelectedItem(null);
  }, [activeIndex]);

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
        selectedDateObj.getDate(),
        23,
        59,
        59,
      ),
    );
    let arr = [];
    let gap = parseInt(moment().diff(dayEnd, 'hours')) * -1;
    gap = gap > 24 ? 24 : gap;
    let dayGap = selectedDateObj.getDate() - new Date().getDate();
    for (let i = dayGap === 0 ? 3 : 1; i <= gap; i++) {
      if (dayGap === 0) {
        arr.push(`${moment().add(i, 'hours').format('h')}`);
      } else {
        arr.push(
          `${moment()
            .add(dayGap, 'day')
            .startOf('day')
            .add(i, 'hours')
            .format('h')}`,
        );
      }
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
        ((noonIndex === arr.length - 1 && parseInt(item) > 5) ||
          (noonIndex < arr.length - 1 &&
            parseInt(item) > 5 &&
            index > noonIndex)) &&
        OPD
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
          } else if (index === morningSlots.length - 1) {
            slots.push({
              from: '12',
              to: '1',
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
              type: 'Afternoon Slot',
            });
          } else if (index === afternoonSlots.length - 1) {
            slots.push({
              from: '5',
              to: '6',
              type: 'Afternoon Slot',
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
              type: 'Evening Slot',
            });
          }
        });
        return slots;
      },
    };
    return [morning(), afternoon(), evening()];
  };

  const onSelectDay = (item, index) => {
    setSelectedTime(null);
    setSelectedDateObj(item.toDate());
    setActiveIndex(index);
  };

  const onTimeSlotPress = (item, index, slotIndex) => {
    setSelectedItem(item[index]);
    const startTime = parseInt(item[index]?.from.replace(':00', ''));
    const after12 = item[index]?.type === 'Morning' ? false : true;
    setSelectedTime(after12 ? startTime + 12 : startTime);
  };
  return {
    getDaysOfMonth,
    getSlots,
    onSelectDay,
    onTimeSlotPress,
    activeIndex,
    selectedItem,
  };
};
