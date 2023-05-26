import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COMING_SOON} from './constant';
import Header from '../Header';
import {SVG} from '../../../assets';

const ComingSoon = () => {
  return (
    <View>
      <Header title={COMING_SOON} showBackButton={true} hideMenu={true} showCart={true} />
      <View style={styles.containerView1}>
        <View style={styles.containerView}>
          <View style={styles.notchDotStyle}>
            <View style={styles.notchStyle}></View>
            <View style={styles.dotStyle}></View>
          </View>
          <View style={styles.bottomNotchStyle}></View>
          <SVG.SeeYouSoon />
          <Text style={styles.textStyle}>{COMING_SOON}</Text>
        </View>
      </View>
    </View>
  );
};

export default ComingSoon;
