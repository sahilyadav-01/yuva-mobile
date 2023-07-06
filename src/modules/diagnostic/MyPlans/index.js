import React from 'react'
import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import MyPlanCard from '../../../components/MyPlanCard'
import { styles } from './styles'
import { useMyPlan } from './hooks/useMyPlan';
import { NO_PLAN } from './constants';

const MyPlans = () => {
  const { programAndPlan, bookingListError, bookingListLoading } = useMyPlan();
  const renderItem = ({ item, index }) => {
    return (<MyPlanCard
      key={index}
      item={item}
    />);
  }
  if(bookingListLoading) return <View style={styles.loaderContainer}><ActivityIndicator size={'large'}/></View>
  else if(!bookingListLoading && !bookingListError)
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
                keyExtractor={(item, index) => `${index}`}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
              />
            }
          </ScrollView>
        ) : <View style={styles.emptyContainer}><Text style={styles.textColor}>{NO_PLAN}</Text></View>}

      </View>
    </View>
  )
}

export default MyPlans;
