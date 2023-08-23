import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const OurPlanServiceIconsCard = ({name, icon, text}) => {
  return (
    <View style={styles.touchableOpacityContainerStyle}>
      <View style={styles.subTopContainerStyle}>
        <View style={{position: 'absolute'}}>
          <Text style={styles.topText}>{text}</Text>
        </View>
        <View style={{zIndex:-999}}>
        {icon()}
        </View>
      </View>
      <Text style={styles.subBottomContainerStyle}>{name}</Text>
    </View>
  );
};

export default OurPlanServiceIconsCard;
