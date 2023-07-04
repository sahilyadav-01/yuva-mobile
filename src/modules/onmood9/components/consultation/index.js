import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {BUTTON_TEXT, HEADING_TEXT} from './constants';

const OnMood9Consult = () => {
  const style = styles();
  return (
    <View>
      <Text style={style.headingText}>{HEADING_TEXT}</Text>
      <TouchableOpacity style={style.buttonContainer}>
        <Text style={style.buttonText}>{BUTTON_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnMood9Consult;
