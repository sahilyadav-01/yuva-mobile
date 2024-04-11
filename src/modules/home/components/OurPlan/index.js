import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {OUR_PLANS, VIEW_ALL} from './constants';
import {useOurPlan} from './hooks/useOurPlan';
import PlanDescriptor from '../../../../components/PlanDescriptor';

const OurPlan = () => {
  const {handlePress,popularPlan,onDetails,onViewAll} = useOurPlan();
 
  return (
    <View style={styles.container}>
      <View style={styles.OurPlansHeaderStyle}>
        <Text style={styles.heading}>{OUR_PLANS} </Text>
        <Text onPress={onViewAll} style={styles.viewAll}>{VIEW_ALL}</Text>
      </View>
      <PlanDescriptor/>
      {popularPlan.length > 0 && 
      <View style={styles.planContainer}>
       {popularPlan.map((item,index)=>{
        if(index <= 2) {
          return (
            <View style={[styles.planItemContainer,index === 1 ? {...styles.planCenterContainer} : undefined]}>
              <Text style={[styles.planType,index === 1 ? {marginBottom: 12} : undefined]}>PLATINUM</Text>
              <Text numberOfLines={2} style={[styles.planText,index === 1 ? {marginBottom: 8} : undefined]}>{item?.name}</Text>
              <Text style={[styles.planType,index === 1 ? {marginBottom: 8} : undefined]}>₹ {item?.yearlyFinalCost}</Text>
              <TouchableOpacity onPress={() => {handlePress(index)
              onDetails()
              }} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Choose Plan</Text>
              </TouchableOpacity>
            </View>
          );
        }
       })}
        </View>
      }
       </View>
  );
};

export default OurPlan;