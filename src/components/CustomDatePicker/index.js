import React from 'react';
import {FlatList, View} from 'react-native';
import {useDatePicker} from './hooks/useDatePicker';
import {styles} from './style';
import DateItem from './DateItem';
import Slots from './Slots';

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
