import React, { useEffect } from 'react'
import { View, Text, ScrollView ,FlatList} from 'react-native'
import MyPlanCard from '../../../components/MyPlanCard'


const MyPlans = () => {
  const mockData=[{}]
const RenderItem=({item,index})=>{
  return <MyPlanCard
  name={item}
  />
}

    return (
 <View >
         <FlatList
         renderItem={RenderItem}
         data={mockData}
         keyExtractor={(item) => item.id}
         />
            </View>
    )
}

export default MyPlans;
