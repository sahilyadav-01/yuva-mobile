import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './style';

function RadioButton(props) {
  let containerStyle = [{...styles.radioContainer}];
  let buttonStyle = props?.selected ? [{...styles.radio}] : undefined;
  if (props?.extraContainerStyle) {
    containerStyle.push(props?.extraContainerStyle);
  }
  if (props?.extraRadioStyle && props?.selected) {
    containerStyle.push(props?.extraRadioStyle);
  }
  return (
    <TouchableOpacity style={containerStyle} onPress={props?.onRadioPress}>
      <View style={buttonStyle} />
    </TouchableOpacity>
  );
}

export default RadioButton;
