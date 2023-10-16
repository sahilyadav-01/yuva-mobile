import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {
  RUPEE,
  VIEW_DETAILS,
  VIEW_PLAN,
  YEAR,
} from './constants';
import {PNG} from '../../../../../assets';
import {useViewAllOurPlan} from './hooks/useViewAllOurPlan';
import {CONTAIN} from '../../../../styles/constants';
import Header from '../../../../components/Header';

const ViewAllOurPlan = () => {
  const {handlePress, selectedItems, popularPlan, onDetails} =
    useViewAllOurPlan();

  const renderItem = (item, index) => {
    const onPress = () => {
      handlePress(item?.index);
    };
    return (
      <View
        style={selectedItems.includes(item.index) && styles.PlanClickView}
        key={index}>
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
              <Text style={styles.radioButtonText}>
                {'  '}
                {1} {YEAR}
              </Text>
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
  return (
    <View>
      <Header showBackButton={true} title={VIEW_PLAN} />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        nestedScrollEnabled={true}>
        <View style={styles.ImageView}>
          <Image
            style={styles.ImageBanner}
            resizeMode={CONTAIN}
            source={PNG.Our_Plan_Banner}
          />
        </View>
        {popularPlan.length > 0 && (
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
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default ViewAllOurPlan;
