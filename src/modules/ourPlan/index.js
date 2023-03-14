import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import { getDimensions } from '../../utils/utils';
import PlanCard from './components/PlanCard';
import { OUR_PLANS, VIEW_ALL } from './constant';
import { useOurPlan } from './hooks/useOurPlan';
import { styles } from './styles';

const OurPlan = (props) => {
  const {isHomeScreen} = props;
  const {
    viewabilityConfigCallbackPairs,
    viewabilityConfig,
    onPressAll,
    popularPlan,
  } = useOurPlan();
  const { width } = getDimensions();

  const renderItem = ({item, index}) => {
    return(
      <PlanCard item={item} isHomeScreen={isHomeScreen}/>
    );
  }

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
      <FlatList 
        data={popularPlan}
        renderItem={renderItem}
        contentContainerStyle={styles.cardView}
        snapToAlignment={'start'}
        snapToInterval={width - 20}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default OurPlan;