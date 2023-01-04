import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { PNG } from '../../../../../assets';
import { styles } from './styles';

const HealthCard = (props) => {
  const {onHealthCardPress, selected, item} = props;
  const { iconName, name } = item?.item;

  return (
    <TouchableOpacity onPress={onHealthCardPress} style={styles.container}>
      { selected === item?.index && 
        <View style={styles.selected}>
          <Image source={PNG.CHECK_CIRCLE}/>
        </View>
      }
      <View style={styles.imageView}>
        <Image source={iconName} style={styles.imageStyle}/>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HealthCard;