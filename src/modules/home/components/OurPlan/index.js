import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image,ImageBackground} from 'react-native';
import {styles} from './style';
import {OUR_PLANS, RUPEE, SUB_HEADING, VIEW_ALL, VIEW_DETAILS, YEAR} from './constants';
import {PNG} from '../../../../../assets';
import {useOurPlan} from './hooks/useOurPlan';
import { CONTAIN } from '../../../../styles/constants';

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
            <View style={styles.PlanYear}>
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
  return (
    <View style={styles.container}>
      <View style={styles.OurPlansHeaderStyle}>
        <Text style={styles.LandingPageText1}>{OUR_PLANS} </Text>
        <View style={styles.line} />

        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.LandingPageText2}>{VIEW_ALL}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subHeadingView}>
        <Text style={styles.subHeadingText}>{SUB_HEADING}</Text>
      </View>
      <View style={styles.ImageView}>
        <Image style={styles.ImageBanner} resizeMode={CONTAIN} source={PNG.Our_Plan_Banner} />
      </View>
      {popularPlan.length >0 && 
      <View style={styles.PlanView}>
      <ImageBackground
      source={PNG.OurPlanRadioButton}
      style={styles.ImageBanner2} 
      resizeMode="cover">
        <View style={styles.TextImage}>
          <FlatList
            data={popularPlan}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        </ImageBackground>
      </View>}
       </View>
  );
};

export default OurPlan;