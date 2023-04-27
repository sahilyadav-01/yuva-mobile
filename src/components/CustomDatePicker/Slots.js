import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './style';
import { FLEX_END, FLEX_START } from '../../styles/constants';

const Slots = (props) => {
  const {item, onTimeSlotPress} = props;
  const style = styles();
  const RenderTime = ({i, index}) => {
    return (
      <View
        style={[
          style.item,
          {alignItems: index % 2 === 0 ? FLEX_START : FLEX_END},
        ]}>
        <TouchableOpacity
          onPress={() => onTimeSlotPress(item, index)}
          style={style.itemView}>
          <Text>
            {`${item[index]?.from}:00`}-{`${item[index]?.to}:00`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={style.timeContainer}>
      <Text>{item[0]?.type}</Text>
      <View style={style.itemContainer}>
        <FlatList
          numColumns={2}
          keyExtractor={index => index}
          data={item}
          renderItem={RenderTime}
        />
      </View>
    </View>
  );
}

export default Slots;
