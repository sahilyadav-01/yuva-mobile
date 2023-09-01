import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {PROMOTIONAL_OFFER} from './constants';
import { usePromotionalBanner } from './hooks/usePromotionalBanner';

const PromotionalBanner = props => {
    const {onBannerPress} = usePromotionalBanner();
  const {
    bannerData: {data: bannerData},
  } = props;
  const data = bannerData?.data ?? null;
  const style = styles();
  const renderData = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>onBannerPress(item)} style={style.itemContainer}>
        <Text numberOfLines={3} style={style.text}>
          {item.innerBannerName}
        </Text>
      </TouchableOpacity>
    );
  };
  if (bannerData === null || data === null || data.length === 0) return null;
  return (
    <View style={style.container}>
      <Text style={style.heading}>{PROMOTIONAL_OFFER}</Text>
      <FlatList
        style={style.listStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderData}
        ItemSeparatorComponent={() => <View style={style.itemSeparatorStyle} />}
      />
    </View>
  );
};

export default PromotionalBanner;
