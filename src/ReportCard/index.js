import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SVG} from '../../assets';

const ReportCard = props => {
  const {name, date} = props;
  return (
    <View style={styles.renderItemStyle}>
      <SVG.Pdf />
      <Text style={styles.reportTextStyle}>{name}</Text>
      <TouchableOpacity>
        <SVG.Download />
      </TouchableOpacity>
      <Text style={styles.dateStyle}>{date}</Text>
    </View>
  );
};

export default ReportCard;
