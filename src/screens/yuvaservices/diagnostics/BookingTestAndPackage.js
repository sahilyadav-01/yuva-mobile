import React, { useEffect }  from 'react';
import {View, Text, Image,ScrollView} from 'react-native';
import YuvaStatusBar from '../../../components/YuvaStatusBar'
import MainHeader from '../../../components/MainHeader';
import BookingCard from './BookingTestAndPackageCard';


const BookingTestAndPackage = () => {
 
  return (
  
    
       
 <View className="m-2">
 <View className="h-[500px] mt-[20px]">
 <YuvaStatusBar />
    <View>
        <MainHeader />
        </View>
     <ScrollView
         bounces={false}
         contentContainerStyle={{
             flexGrow: 1,
             paddingBottom:300
         }}
         showsVerticalScrollIndicator={false}>
         {bookedData && bookedData.map((item) => {
             if (item.packageName !== null) {
                 return <BookingCard
                     name={item?.packageName}
                 />
             } else {

                 return <BookingCard name={item?.testName} />

             }
         })
         }
     </ScrollView>

 </View>
</View>

  );
};

export default BookingTestAndPackage;
