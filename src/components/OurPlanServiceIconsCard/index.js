import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {GREEN, RED} from '../../styles/colors';

const OurPlanServiceIconsCard = ({
  name,
  icon,
  text,
  iconProps: props,
  available,
}) => {
  if (text !== null) {
    return (
      <View style={styles.touchableOpacityContainerStyle}>
        <View style={styles.iconStyle}>{icon(props)}</View>
        <Text style={styles.subBottomContainerStyle}>{name}</Text>
        <Text style={{...styles.head, color: available ? GREEN : RED}}>
          {text}
        </Text>
      </View>
    );
  }
};

export default OurPlanServiceIconsCard;
