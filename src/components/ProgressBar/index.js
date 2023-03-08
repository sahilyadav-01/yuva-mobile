import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BLACK, GREEN, WHITE } from '../../styles/colors';
import { STATUS_TEXT1, STATUS_TEXT2, STATUS_TEXT3 } from './constant';
import { styles } from './styles';

const ProgressBar = ({ progress, showDateTimeSection }) => {

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.status}>
          {progress >= 0.33 ? (
            <View style={[styles.statusDot, { backgroundColor: WHITE, borderColor: GREEN }]}>
              <Icon name="check" size={12} color="#319B4B" />
            </View>
          ) : (
            <View style={[styles.statusDot, { backgroundColor: WHITE, borderColor: BLACK }]}>
              <Icon name="circle" size={12} color="#000000" />
            </View>
          )}
          <View
            style={[
              styles.statusLabel,
              progress >= 0.33 && styles.statusLabelActive,
            ]}
          >
            <Text style={styles.statusText}>{STATUS_TEXT1}</Text>
          </View>
        </View>
        {showDateTimeSection && (
          <>
            <View
              style={[
                styles.progress, progress >= 0.33 &&
                { width: `${progress * 33}%` },
              ]}
            />
            <View style={styles.status}>
              {progress >= 0.66 && (
                <View style={[styles.statusDot, { backgroundColor: WHITE, borderColor: GREEN }]}>
                  <Icon name="check" size={12} color="#319B4B" />
                </View>
              )}
              {progress < 0.66 && (
                <View style={[styles.statusDot, { backgroundColor: WHITE, borderColor: BLACK }]}>
                  <Icon name="circle" size={12} color="#000000" />
                </View>
              )}
              <View
                style={[
                  styles.statusLabel,
                  progress >= 0.66 && styles.statusLabelActive,
                ]}
              >
                <Text style={styles.statusText}>{STATUS_TEXT2}</Text>
              </View>
            </View>
            <View
              style={[
                styles.progress, progress >= 0.66 &&
                { width: `${progress * 33}%` },
              ]}
            />
          </>
        )}
        {!showDateTimeSection && (
          <View
            style={[
              styles.progress, progress >= 0.33 &&
              { width: `${progress * 80}%` },
            ]}
          />
        )}
        <View style={styles.status}>
          {progress >= 1 && (
            <View style={[styles.statusDot, { backgroundColor: WHITE, borderColor: GREEN }]}>
              <Icon name="check" size={12} color="#319B4B" />
            </View>
          )}
          {progress < 1 && (
            <View style={[styles.statusDot, { backgroundColor: WHITE, borderColor: BLACK }]}>
              <Icon name="circle" size={12} color="#000000" />
            </View>
          )}
          <View
            style={[
              styles.statusLabel,
              progress >= 1 && styles.statusLabelActive,
            ]}
          >
            <Text style={styles.statusText}>{STATUS_TEXT3}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
