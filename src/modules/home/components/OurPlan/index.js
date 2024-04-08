import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';
import {OUR_PLANS, RUPEE, VIEW_ALL, VIEW_DETAILS, YEAR} from './constants';
import {PNG, SVG} from '../../../../../assets';
import {useOurPlan} from './hooks/useOurPlan';
import DescriptionContainer from '../../../onmood9/components/details';
import PlanDescriptor from '../../../../components/PlanDescriptor';

const OurPlan = () => {
  const {handlePress,selectedItems,popularPlan,onDetails,onViewAll} = useOurPlan();
  const renderItem = (item, index) => {
    const onPress=()=>{
      handlePress(item?.index);
  }
    return (
      <View style={selectedItems.includes(item.index) && styles.PlanClickView} key={index}>
        <View style={styles.PlanContainer}>
          <TouchableOpacity
            style={[
              styles.radioOuterCircle,
              selectedItems.includes(item.index) &&
                styles.radioOuterCircleSelected,
            ]}
            onPress={onPress}>
            {selectedItems.includes(item.index) && (
              <View style={styles.radioInnerCircle} />
            )}
          </TouchableOpacity>
          <View style={styles.DetailsContainer}>
            <View style={styles.PlanText}>
              <Text style={styles.radioButtonText}>{item?.item?.name}</Text>
            </View>
            <View style={styles.PlanYear}>
              <Text style={styles.radioButtonText}>{'  '}{1}{' '}{' '}{YEAR}</Text>
            </View>
            <View style={styles.PlanPrice}>
              {item?.item?.yearlyPrice != item?.item?.yearlyFinalCost &&
            <Text style={styles.lineThrough}>{RUPEE}{item?.item?.yearlyPrice}</Text>
             }
              <Text style={styles.radioButtonText}>{RUPEE}{item?.item?.yearlyFinalCost}</Text>
            </View>
          </View>
        </View>
        {selectedItems.includes(item.index) && (
          <TouchableOpacity onPress={onDetails}>
            <View style={styles.expandedContent}>
              <Text style={styles.expandedContentText}>{VIEW_DETAILS}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const PlanItem = () => {
    <View>
      <Text style={{marginBottom:4}}>PLATINUM</Text>
      <Text style={{textAlign:'center',marginBottom:4}}>Yuva Family Comprehensive</Text>
      <Text style={{marginBottom:4}}>1200</Text>
      <TouchableOpacity style={{paddingHorizontal:12,paddingVertical:4,alignItems:'center',justifyContent:'center'}}>
        <Text>Choose Plan</Text>
      </TouchableOpacity>
    </View>
  }

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