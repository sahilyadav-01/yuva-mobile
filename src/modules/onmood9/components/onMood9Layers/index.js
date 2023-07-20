import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './style';
import {
  DESCRIPTION_1,
  DESCRIPTION_2,
  DESCRIPTION_3,
  DESCRIPTION_4,
  HEADING_TEXT,
  SUB_HEADING_1,
  SUB_HEADING_2,
  SUB_HEADING_3,
  SUB_HEADING_4,
} from './constants';

const OnMood9Layers = () => {
  const style = styles();
  const data = [
    {
      text: DESCRIPTION_1,
      heading: SUB_HEADING_1,
    },
    {
      text: DESCRIPTION_2,
      heading: SUB_HEADING_2,
    },
    {
      text: DESCRIPTION_3,
      heading: SUB_HEADING_3,
    },
    {
      text: DESCRIPTION_4,
      heading: SUB_HEADING_4,
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={style.rowView}>
        <View style={style.indexContainer}>
          <Text style={style.indexText}>{index + 1}</Text>
        </View>
        <View style={style.detailsContainer}>
          <Text style={style.heading}>{item.heading}</Text>
          <Text style={style.body}>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text style={style.headingText}>{HEADING_TEXT}</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={style.separatorLine} />}
        keyExtractor={(item, index) => index}
        data={data}
        renderItem={renderItem}
        contentContainerStyle={style.listContainerStyle}
      />
    </View>
  );
};

export default OnMood9Layers;
