import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import { getDimensions } from '../../utils/utils';
import PlanCard from './components/PlanCard';
import { OUR_PLANS, SUB_HEADING, VIEW_ALL } from './constant';
import { useOurPlan } from './hooks/useOurPlan';
import { styles } from './styles';

const OurPlan = (props) => {
  const {isHomeScreen} = props;
  const {
    viewabilityConfigCallbackPairs,
    viewabilityConfig,
    onPressAll,
    popularPlan,
    activeIndex,
  } = useOurPlan();
  const { width } = getDimensions();

  const renderItem = ({item, index}) => {
    return(
      <PlanCard item={item} isHomeScreen={isHomeScreen} key={index}/>
    );
  };

  const renderItemIndex = ({item, index}) => {
    return (
      <View key={index} style={[styles.indexView,(index === activeIndex) && styles.activeIndexView ]} />
    );
  };

  if(!popularPlan) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.OurPlansHeaderStyle}>
        <Text style={styles.LandingPageText1}>{OUR_PLANS} </Text>
        <View style={styles.line} />
        {isHomeScreen &&
          <TouchableOpacity onPress={onPressAll}>
            <Text style={styles.LandingPageText2}>{VIEW_ALL}</Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.subHeadingView}>
        <Text style={styles.subHeadingText}>{SUB_HEADING}</Text>
      </View>
      <FlatList 
        data={popularPlan}
        renderItem={renderItem}
        contentContainerStyle={styles.cardView}
        snapToAlignment={'center'}
        snapToInterval={0.84* width}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewabilityConfig}
      />
      <FlatList
        data={new Array(popularPlan.length)}
        renderItem={renderItemIndex}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.indexContainer}
      />
    </View>
  );
};

export default OurPlan;