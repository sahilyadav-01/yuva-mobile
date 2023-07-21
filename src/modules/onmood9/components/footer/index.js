import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './style';
import {PNG, SVG} from '../../../../../assets';

const Footer = () => {
  const style = styles();
  return (
    <View style={style.container}>
      <View style={style.bannerContainer}>
        <View style={style.itemContainer}>
          <Image
            source={PNG.YuvaBanner}
            style={style.imageContainer}
            resizeMode="contain"
          />
        </View>
        <View style={style.iconContainer}>
          <SVG.Handshake />
        </View>
        <View style={style.itemContainer}>
          <Image
            source={PNG.OnMood9Banner}
            style={style.imageContainer}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={[style.footerText, style.yuvaTextColor]}>
        Yuva Health{' '}
        <Text style={style.footerText}>
          in Partner with{' '}
          <Text style={[style.footerText, style.onMood9TextColor]}>
            Onmood9
          </Text>
          ...!
        </Text>
      </Text>
    </View>
  );
};

export default Footer;
