import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './style';
import {HEADING_TEXT} from './constants';

const OnMood9Layers = () => {
  const style = styles();
  const data = [
    {
      text: 'Mindful movements & Gestures to control intense emotions and behaviour',
      heading: 'Body',
    },
    {
      text: 'Breathing exercises & Self-healing to cultivate positive energy and emotions',
      heading: 'Energy',
    },
    {
      text: 'Guided Meditation to manage Moods & reprogram the subconscious',
      heading: 'Wisdom',
    },
    {text: 'Contemplation & Self-help Cognitive techniques to manage negative thoughts',
      heading: 'Mind'
    }
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={style.rowView}>
        <View style={style.indexContainer}>
          <Text style={style.indexText}>{index+1}</Text>
        </View>
        <View style={style.detailsContainer}>
          <Text style={style.heading}>{item.heading}</Text>
          <Text style={style.body}>
            {item.text}
          </Text>
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
