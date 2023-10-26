import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {PROMOTIONAL_OFFER} from './constants';
import {usePromotionalBanner} from './hooks/usePromotionalBanner';

const PromotionalBanner = () => {
  const {onBannerPress, bannerData, getItemDetails} = usePromotionalBanner();
  const style = styles();
  const renderData = ({item,index}) => {
    const alternateItem = index%2 === 0;
    const itemDetails = getItemDetails(item);
    return (
      <TouchableOpacity
        onPress={() => onBannerPress(item)}
        style={styles(alternateItem).itemContainer}>
        <View style={{paddingVertical: 12}}>
          <Text numberOfLines={3} style={styles(alternateItem).text}>
            {item?.contentName}
          </Text>
        </View>
        {itemDetails?.showDescription && (
          <Text style={styles(alternateItem).text}>{itemDetails?.description}</Text>
        )}
        <View style={styles(alternateItem).buttonContainer}>
          <Text style={styles(alternateItem).buttonText}>{itemDetails?.buttonText}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  if (bannerData && bannerData.length > 0)
    return (
      <View style={style.container}>
        <Text style={style.heading}>{PROMOTIONAL_OFFER}</Text>
        <FlatList
          style={style.listStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={bannerData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderData}
          ItemSeparatorComponent={() => (
            <View style={style.itemSeparatorStyle} />
          )}
        />
      </View>
    );
};

export default PromotionalBanner;
