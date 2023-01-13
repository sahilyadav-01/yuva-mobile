import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { styles, absoluteFillObject } from './styles';

const Gradient = (props) => {
  let x1 = '0%', x2 = '0%', y1 = '0%', y2 = '0%';
  const { startColor, stopColor, containerStyle, isHorizontal } = props;
  if (isHorizontal) {
    x2 = '100%';
    y2 = '0%';
  } else {
    x2 = '0%';
    y2 = '100%';
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <Svg height={'100%'} width={'100%'} style={absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1={x1} y1={y1} x2={x2} y2={y2}>
            <Stop offset="0" stopColor={startColor} />
            <Stop offset="1" stopColor={stopColor} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

export default Gradient;