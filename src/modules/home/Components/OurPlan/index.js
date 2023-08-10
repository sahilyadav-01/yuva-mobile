import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {styles} from './style';
import {OUR_PLANS, SUB_HEADING, VIEW_ALL, VIEW_DETAILS} from './constant';
import {PNG} from '../../../../../assets';
import {useOurPlan} from './hooks/useOurPlan';

const OurPlan = props => {
  const {handlePress, DATA, selectedItems} = useOurPlan();

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
              <Text style={styles.radioButtonText}>{item?.item?.title}</Text>
            </View>
            <View style={styles.PlanYear}>
              <Text style={styles.radioButtonText}>{item?.item?.year}</Text>
            </View>
            <View style={styles.PlanYear}>
              <Text style={styles.radioButtonText}>{item?.item?.rupee}</Text>
            </View>
          </View>
        </View>
        {selectedItems.includes(item.index) && (
          <TouchableOpacity>
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

        <TouchableOpacity>
          <Text style={styles.LandingPageText2}>{VIEW_ALL}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subHeadingView}>
        <Text style={styles.subHeadingText}>{SUB_HEADING}</Text>
      </View>
      <View style={styles.ImageView}>
        <Image style={styles.ImageBanner} source={PNG.Our_Plan_Banner} />
      </View>
      <View style={styles.PlanView}>
        <Image style={styles.ImageBanner2} source={PNG.OurPlanRadioButton} />
        <View style={styles.TextImage}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default OurPlan;
