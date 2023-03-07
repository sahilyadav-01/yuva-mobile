import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

const ProgressBar = ({ progress }) => {
  console.log("progress",progress)

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        {/* <View
          style={[
            styles.progress,
            { width: `${progress * 100}%` },
          ]}
        /> */}
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.status}>
          {progress >= 0.33 && (
            <View style={[styles.statusDot, {backgroundColor: '#ffffff', borderColor: '#319B4B'}]}>
              <Icon name="check" size={12} color="#319B4B" />
            </View>
          )}
          <View
            style={[
              styles.statusLabel,
              progress >= 0.33 && styles.statusLabelActive,
            ]}
          >
            <Text style={styles.statusText}>Address</Text>
          </View>
         
        </View>
        <View
          style={[
            styles.progress,progress >= 0.33 && 
            { width: `${progress * 33}%` },
          ]}
        />
        <View style={styles.status}>
          {progress >= 0.66 && (
            <View style={[styles.statusDot, {backgroundColor: '#ffffff', borderColor: '#319B4B'}]}>
              <Icon name="check" size={12} color="#319B4B" />
            </View>
          )}
          <View
            style={[
              styles.statusLabel,
              progress >= 0.66 && styles.statusLabelActive,
            ]}
          >
            <Text style={styles.statusText}>Date and Time</Text>
          </View>
        </View>
        <View
          style={[
            styles.progress,progress >= 0.66 && 
            { width: `${progress * 33}%` },
          ]}
        />
        <View style={styles.status}>
          {progress >= 1 && (
            <View style={[styles.statusDot, {backgroundColor: '#ffffff', borderColor: '#319B4B'}]}>
              <Icon name="check" size={12} color="#319B4B" />
            </View>
          )}
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
