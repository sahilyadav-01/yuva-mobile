import React, {useEffect, useState, useCallback} from 'react';
import { View, Text } from 'react-native';

const Timer = (props) => {
  const interval = props?.interval || 60;
  const resetEnable = (isReset) => props?.resetEnable(isReset);
  const [duration, setDuration] = useState(interval);
  const durationCallback = useCallback(() => setDuration(duration => duration -1), []);

  useEffect(() => {
    duration > 0 && setTimeout(durationCallback, 1000);
    resetEnable(duration === 0);
  }, [duration, durationCallback]);
  return (
    <View style={{alignItems: 'flex-end'}}>
      <Text style={{color: (duration>0? 'red': 'black')}}>
        {duration>0? `0:${duration}`: 0}
      </Text>
    </View>
  );
};

export default Timer;