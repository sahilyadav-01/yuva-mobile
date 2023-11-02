import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';

const TextBold = props => {
  const {textData, textStyle} = props;
  const style = styles();
  let result = [];
  const splitString = textData.split(/<b>/);
  result.push(splitString[0]);
  splitString.forEach((item, index) => {
    if (index > 0) {
      result.push(
        <Text style={[textStyle, style.boldText]}>
          {item.split('</b>')[0]}
        </Text>,
      );
      result.push(item.split('</b>')[1]);
    }
  });
  return <Text children={result} style={textStyle} />;
};

export default TextBold;
