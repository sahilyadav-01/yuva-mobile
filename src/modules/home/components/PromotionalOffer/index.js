import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {PROMOTIONAL_OFFER} from './constants';
import { usePromotionalBanner } from './hooks/usePromotionalBanner';

const PromotionalBanner = props => {
    const {onBannerPress,bannerData} = usePromotionalBanner(props.bannerData);
  
  
  const style = styles();
  const renderData = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>onBannerPress(item)} style={style.itemContainer}>
        <View style={{paddingVertical: 12}}>
        <Text numberOfLines={3} style={style.text}>
          {item.contentName}
        </Text>
        </View>
        <Text style={style.text}>Get Free Diet chart</Text>
        <View style={style.buttonContainer}>
          <Text style={style.buttonText}>Book Now</Text>
        </View>
      </TouchableOpacity>
    );
  };
  if (typeof bannerData?.data?.data !== 'object') return null;
  console.log('BD',bannerData)
  return (
    <View style={style.container}>
      <Text style={style.heading}>{PROMOTIONAL_OFFER}</Text>
      <FlatList
        style={style.listStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bannerData.data.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderData}
        ItemSeparatorComponent={() => <View style={style.itemSeparatorStyle} />}
      />
    </View>
  );
};

export default PromotionalBanner;
