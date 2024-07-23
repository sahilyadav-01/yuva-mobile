import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ImageContainer from './imageContainer';
import Header from '../../../../components/Header';
import {useViewAllOurPlan} from './hooks/useViewAllOurPlan';
import {styles} from './style';
import {LEARN_MORE, VIEW_PLAN} from './constants';
import {ALTO_SECONDARY, RED, WHITE} from '../../../../styles/colors';

const ViewAllOurPlan = () => {
  const {onPlanPress, allPlans, getData} = useViewAllOurPlan();

  const RenderItem = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.itemContainer,
          marginRight: (index + 1) % 3 === 0 ? 0 : 10,
          backgroundColor: item === 0 ? WHITE : ALTO_SECONDARY,
          borderColor: item === 0 ? WHITE : ALTO_SECONDARY,
        }}>
        {item !== 0 && (
          <>
            <Text numberOfLines={3} style={styles.heading}>
              {item?.name}
            </Text>
            {item?.description && (
              <Text numberOfLines={6} style={styles.descriptionText}>
                {item?.description}
              </Text>
            )}
            {item?.yearlyPrice > item?.yearlyFinalCost ? (
              <Text
                numberOfLines={1}
                style={[
                  styles.priceText,
                  {textDecorationLine: 'line-through', color: RED},
                ]}>
                {item?.yearlyPrice}/-
              </Text>
            ) : (
              <Text>{'  '}</Text>
            )}
            <Text numberOfLines={1} style={styles.priceText}>
              {item?.yearlyFinalCost}/- per year
            </Text>
          </>
        )}
        {item !== 0 && (
          <TouchableOpacity
            onPress={() => onPlanPress(index)}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{LEARN_MORE}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  if (allPlans?.data?.length > 0) {
    return (
      <>
        <Header showBackButton={true} title={VIEW_PLAN} />
        <View style={styles.container}>
          <ImageContainer />
          <FlatList
            numColumns={3}
            data={getData(allPlans?.data)}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={RenderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </>
    );
  }
};
export default ViewAllOurPlan;
