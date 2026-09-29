import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CYAN_BLUE} from '../../../../styles/colors';
import {CONSULT_AGAIN} from '../../constant';
import {styles} from './styles';

const Footer = props => {
  const {onConsultPress, onDownloadPress} = props;

  return (
    <View style={styles.footerView}>
      <TouchableOpacity style={styles.consultView} onPress={onConsultPress}>
        <Icon name={'clock-time-four-outline'} color={CYAN_BLUE} size={14} />
        <Text style={styles.consultText}>{CONSULT_AGAIN}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
