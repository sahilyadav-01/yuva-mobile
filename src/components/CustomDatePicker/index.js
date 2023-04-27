import React from 'react';
import {FlatList, View} from 'react-native';
import {useDatePicker} from './hooks/useDatePicker';
import {styles} from './style';
import DateItem from './DateItem';
import Slots from './Slots';

function CustomDatePicker() {
  const {getSlots, getDaysOfMonth, onSelectDay, onTimeSlotPress, activeIndex} =
    useDatePicker();
  console.log('Date', getDaysOfMonth(), getSlots());
  const style = styles();
  const RenderDateItem = ({item, index}) => (
    <DateItem item={item} index={index} activeIndex={activeIndex} onSelectDay={() => onSelectDay(item,index)} />
  );
  const RenderSlots = ({item}) => (
    <Slots
      item={item}
      onTimeSlotPress={(item, index) => onTimeSlotPress(item, index)}
    />
  );

  return (
    <>
      <FlatList
        contentContainerStyle={style.dateContainer}
        ItemSeparatorComponent={() => (
          <View style={style.horizontalSeparator} />
        )}
        horizontal={true}
        keyExtractor={(item, index) => index}
        data={getDaysOfMonth()}
        renderItem={RenderDateItem}
      />
      <FlatList
        contentContainerStyle={style.timeContentContainer}
        keyExtractor={(item, index) => index}
        data={getSlots().filter(item => {
          if (typeof item?.length === 'number') return item;
        })}
        renderItem={RenderSlots}
      />
    </>
  );
}

export default CustomDatePicker;
