import React, {useEffect, useState, useCallback} from 'react';
import { View, Text } from 'react-native';

const Timer = (props) => {
  const interval = props?.interval || 30;
  const [duration, setDuration] = useState(interval);
  const durationCallback = useCallback(() => setDuration(duration => duration -1), []);

  useEffect(() => {
    duration > 0 && setTimeout(durationCallback, 1000);
  }, [duration, durationCallback]);
  return (
    <View>
      <Text>
        {duration>0? duration: 0}
      </Text>
    </View>
  );
};

export default Timer;