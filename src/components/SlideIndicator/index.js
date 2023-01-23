import React from 'react';
import {View, FlatList} from 'react-native';
import { styles } from './styles';
import { CYAN_BLUE, WHITE } from '../../styles/colors';


const SlideIndicator = (props) => {
  const {count, activeIndex} = props;
  const renderItem = ({item, index}) => {
    return (
      <View 
        style={[styles.indicator, {
          backgroundColor: index === activeIndex ? CYAN_BLUE : WHITE,
        }]} 
      />
    )
  }

  return (
    <FlatList 
      horizontal={true}
      data={new Array(count)}
      renderItem={renderItem}
      style={styles.container}
    />
  );
}

export default SlideIndicator;