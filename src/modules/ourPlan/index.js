import React from 'react';
import {View} from 'react-native';
import PlanCard from './components/PlanCard';
import { LEFT, RIGHT } from './constant';
import { useOurPlan } from './hooks/useOurPlan';
import { styles } from './styles';

const OurPlan = () => {
  const {
    onContainerPress,
    leftItem,
    rightItem,
    mainItem,
  } = useOurPlan();
 
  const mainView = () => {
    return (
      <View style={styles.mainViewContainer}>
        <PlanCard item={mainItem}/>
      </View>
    );
  }
  const sideView = (direction) => {
    const onPress = () => onContainerPress(direction);
    const item = direction === LEFT ? leftItem: rightItem;
    return (
        <View style={[styles.sideViewContainer, direction === LEFT? styles.leftCard: styles.rightCard]}>
          <PlanCard item={item} direction={direction} onContainerPress={onPress}/>
        </View>
    );
  }
  return (
    <View style={styles.parentView}>
      <View style={styles.container}>
        {sideView(LEFT)}
        {mainView()}
        {sideView(RIGHT)}
      </View>
    </View>
  );

};

export default OurPlan;