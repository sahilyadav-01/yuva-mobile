import React, { useEffect } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import MyPlanCard from '../../../components/MyPlanCard'
import { styles } from './styles'
import { useMyPlan } from './hooks/useMyPlan';
import { NO_PLAN } from './constants';

const MyPlans = () => {
  const { programAndPlan } = useMyPlan();
  const renderItem = ({ item, index }) => {
    return (<MyPlanCard
      key={item.id}
      item={item}
    />);
  }
  return (
    <View>
      <View >
        {programAndPlan?.length ? (
          <ScrollView
            bounces={false}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}>
            {programAndPlan &&
              <FlatList
                renderItem={renderItem}
                data={programAndPlan}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
              />
            }
          </ScrollView>
        ) : <Text style={styles.textColor}>{NO_PLAN}</Text>}

      </View>
    </View>
  )
}

export default MyPlans;
