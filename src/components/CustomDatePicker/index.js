import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useDatePicker} from './hooks/useDatePicker';
import {styles} from './style';
import DateItem from './DateItem';
import Slots from './Slots';
import {NO_SLOTS, SELECT_DATE, SELECT_TIME} from './constants';

function CustomDatePicker(props) {
  const {onDateTimeSelect, OPD} = props;
  const {
    getSlots,
    getDaysOfMonth,
    onSelectDay,
    onTimeSlotPress,
    activeIndex,
    selectedItem,
  } = useDatePicker(onDateTimeSelect, OPD);
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const availableSlots = getSlots().filter(item => {
    if (typeof item?.length === 'number') return item;
  });
  const availableDaySlots = getSlots(year,month,date).filter(item => {
    if (typeof item?.length === 'number') return item;
  });
  const unavailable =
    availableDaySlots[0]?.length === 0 &&
    availableDaySlots[1]?.length === 0 &&
    availableDaySlots[2]?.length === 0;
  const style = styles();
  const RenderDateItem = ({item, index}) => (
    <DateItem
      item={item}
      index={index}
      activeIndex={activeIndex}
      onSelectDay={() => onSelectDay(item, index)}
      unavailable={unavailable}
    />
  );
  const RenderSlots = ({item, index}) => {
    return (
      <Slots
        slotIndex={index}
        item={item}
        onTimeSlotPress={(item, index, slotIndex) =>
          onTimeSlotPress(item, index, slotIndex)
        }
        selectedItem={selectedItem}
      />
    );
  };

  return (
    <>
    <Text style={[style.emptyView,style.emptyText]}>{SELECT_DATE}</Text>
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
      <View style={style.separatorContainer} />
      {activeIndex === 0 && unavailable ? (
        <View style={style.emptyView}>
          <Text style={style.emptyText}>{NO_SLOTS}</Text>
        </View>
      ) : (
        <>
        <Text style={[style.emptyView,style.emptyText]}>{SELECT_TIME}</Text>
        <FlatList
          nestedScrollEnabled
          contentContainerStyle={style.timeContentContainer}
          keyExtractor={(item, index) => `Time${index}`}
          data={availableSlots}
          renderItem={RenderSlots}
        />
        </>
      )}
    </>
  );
}

export default CustomDatePicker;
