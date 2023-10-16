import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const OurPlanServiceIconsCard = ({name, icon, text}) => {
  return (
    <View style={styles.touchableOpacityContainerStyle}>
        <View style={styles.headView}>
          <Text style={styles.head} numberOfLines={2}>{text}</Text>    
        </View>
         <View style={styles.subTopContainerStyle}>
          {icon()}
          <Text style={styles.subBottomContainerStyle}>{name}</Text>
      </View>
      </View>
  );
};

export default OurPlanServiceIconsCard;


