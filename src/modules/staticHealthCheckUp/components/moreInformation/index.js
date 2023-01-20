import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {INFO} from '../../constant';

const MoreInformation = () => {
  return (
    <View style={styles.moreContainer}>
      <View style={styles.moreInfoContainer}>
        <Text style={styles.moreInfoText}>{INFO}</Text>
      </View>
    </View>
  );
};

export default MoreInformation;
