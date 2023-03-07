import React, { useRef, useEffect } from 'react';
import { View, Animated,Text } from 'react-native';
import { styles } from './styles';

const ProgressBar = ({ progress }) => {
  const progressBarWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressBarWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress, progressBarWidth]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.progress,
            { width: `${progress * 100}%` },
          ]}
        />
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.status}>
          <View
            style={[
              styles.statusDot,
              progress >= 0.33 && styles.statusDotActive,
            ]}
          />
          <View
            style={[
              styles.statusLabel,
              progress >= 0.33 && styles.statusLabelActive,
            ]}
          >
            <Text style={styles.statusText}>Address</Text>
          </View>
        </View>
        <View style={styles.status}>
          <View
            style={[
              styles.statusDot,
              progress >= 0.66 && styles.statusDotActive,
            ]}
          />
          <View
            style={[
              styles.statusLabel,
              progress >= 0.66 && styles.statusLabelActive,
            ]}
          >
            <Text style={styles.statusText}>Date and Time</Text>
          </View>
        </View>
        <View style={styles.status}>
          <View
            style={[
              styles.statusDot,
              progress >= 1 && styles.statusDotActive,
            ]}
          />
          <View
            style={[
              styles.statusLabel,
              progress >= 1 && styles.statusLabelActive,
            ]}
          >
            <Text style={styles.statusText}>Payment</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;