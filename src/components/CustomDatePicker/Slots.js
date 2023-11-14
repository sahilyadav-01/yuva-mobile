import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {CURIOUS_BLUE} from '../../styles/colors';

const Slots = props => {
  const {item, onTimeSlotPress, slotIndex, selectedItem} = props;
  const style = styles(null);
  const RenderTime = ({_,index}) => {
    return (
      <>
      <View style={style.item}>
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
      <View style={styles({index}).horizontalSeparator}/>
      </>
    );
  };
  return (
    <View style={style.timeContainer}>
      {item?.length > 0 && 
      <>
      <View style={style.rowContainer}>
      <Text style={[style.slotText,style.slotTextExtraStyles]}>{item[0]?.type}</Text>
      {item[0]?.Icon()}
      </View>
      <View style={style.itemContainer}>
        <FlatList
          numColumns={4}
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
