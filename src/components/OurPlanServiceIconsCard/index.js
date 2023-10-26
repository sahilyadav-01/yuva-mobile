import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import { GREEN, RED } from '../../styles/colors';

const OurPlanServiceIconsCard = ({name, icon, text, iconProps:props, available}) => {
  return (
    <View style={styles.touchableOpacityContainerStyle}>
        <View style={styles.headView}>
        <Text style={{ ...styles.head, color: available ? GREEN : RED }} numberOfLines={2}>{text}</Text>
        </View>
         <View style={styles.subTopContainerStyle}>
          {icon(props)}
          <Text style={styles.subBottomContainerStyle}>{name}</Text>
      </View>
      </View>
  );
};

export default OurPlanServiceIconsCard;