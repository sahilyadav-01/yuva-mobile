import React from 'react';
import { View, Text } from 'react-native';
import { TIME_FORMATE } from './constant';
import { useTimer } from './hooks/useTimer';
import { styles } from './styles';
import { BLACK, RED } from '../../styles/colors';

const Timer = (props) => {

  const { duration, minutes, seconds } = useTimer(props);

  return (
    <View style={styles.mainContainer}>
      {props.HRA ? (
        <Text style={styles.HraTimerStyle}>
          {duration > 0 ? `${minutes}.${seconds}` : TIME_FORMATE}
        </Text>
      ) : (
        <Text style={{ color: (duration > 0 ? RED : BLACK) }}>
          {duration > 0 ? `0:${duration}` : 0}
        </Text>
      )}
    </View>
  );
};

export default Timer;