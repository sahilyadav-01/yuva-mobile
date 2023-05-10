import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {FLEX_END, FLEX_START} from '../../styles/constants';
import {CURIOUS_BLUE} from '../../styles/colors';

const Slots = props => {
  const {item, onTimeSlotPress, slotIndex, selectedItem} = props;
  const style = styles();
  const RenderTime = ({itemm, index}) => {
    return (
      <View
        style={[
          style.item,
          {alignItems: index % 2 === 0 ? FLEX_START : FLEX_END},
        ]}>
        <TouchableOpacity
          onPress={() => onTimeSlotPress(item, index, slotIndex)}
          style={[
            style.itemView,
            {
              borderColor:
                JSON.stringify(item[index]) === JSON.stringify(selectedItem)
                  ? CURIOUS_BLUE
                  : style.itemView.borderColor,
            },
          ]}>
          <Text style={style.slotText}>
            {`${item[index]?.from}:00`}-{`${item[index]?.to}:00`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={style.timeContainer}>
      {item?.length > 0 && 
      <>
      <View style={{flexDirection:'row'}}>
      <Text style={{...style.slotText,marginBottom:16,marginRight:13}}>{item[0]?.type}</Text>
      {item[0]?.Icon()}
      </View>
      <View style={style.itemContainer}>
        <FlatList
          numColumns={2}
          keyExtractor={(item,index) => index}
          data={item}
          renderItem={RenderTime}
        />
      </View>
      </>}
    </View>
  );
};

export default Slots;
