import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useDatePicker} from './hooks/useDatePicker';
import {styles} from './style';
import DateItem from './DateItem';
import Slots from './Slots';
import { NO_SLOTS } from './constants';

function CustomDatePicker(props) {
  const {onDateTimeSelect, OPD} = props;
  const {
    getSlots,
    getDaysOfMonth,
    onSelectDay,
    onTimeSlotPress,
    activeIndex,
    selectedItem
  } = useDatePicker(onDateTimeSelect, OPD);
  const availableSlots = getSlots().filter(item => {
    if (typeof item?.length === 'number') return item;
  })
  const unavailable = availableSlots[0]?.length === 0 && availableSlots[0]?.length === 0 && availableSlots[0]?.length === 0 
  const style = styles();
  const RenderDateItem = ({item, index}) => (
    <DateItem
      item={item}
      index={index}
      activeIndex={activeIndex}
      onSelectDay={() => onSelectDay(item, index)}
    />
  );
  const RenderSlots = ({item, index}) => (
    <Slots
      slotIndex={index}
      item={item}
      onTimeSlotPress={(item, index, slotIndex) =>
        onTimeSlotPress(item, index, slotIndex)
      }
      selectedItem={selectedItem}
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
      <View style={style.separatorContainer}/>
      {!unavailable ? <FlatList
        contentContainerStyle={style.timeContentContainer}
        keyExtractor={(item, index) => index}
        data={availableSlots}
        renderItem={RenderSlots}
      /> : <View style={style.emptyView}><Text style={style.emptyText}>{NO_SLOTS}</Text></View>}
    </>
  );
}

export default CustomDatePicker;
