import React, {act, useEffect, useRef, useState} from 'react';
import {TouchableOpacity, View, FlatList, Image} from 'react-native';
import {styles} from './style';
import {ANAKIVA, MARINER} from '../../../../styles/colors';
import {useOfferBanner} from './hooks/useOfferBanner';
import { getDimensions } from '../../../../utils/utils';

const OfferBanner1 = props => {
  const {width} = getDimensions()
  let flatlistRef = useRef(null);
  const {
    bannerData: {data: bannerData},
  } = props;
  const data = bannerData?.data ?? null;
  const {onBannerPress} = useOfferBanner();
  const [activeIndex, setActiveIndex] = useState(0);
  const onChange = ({nativeEvent}) => {
    const active = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setActiveIndex(active);
  };
  useEffect(()=>{
    if(data !== null && data?.length > 0){
    const timeout = setTimeout(()=>{
      flatlistRef?.current?.scrollToIndex({animated:true,index:activeIndex===data?.length-1?0:activeIndex+1})
      setActiveIndex(activeIndex===data?.length-1?0:activeIndex+1);
    },3000);
    return () => {
      clearTimeout(timeout);
    }
  }
  },[data,activeIndex])
  const style = styles();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={style.containerStyle}
        onPress={() => onBannerPress(item)}>
        <Image
          source={{uri: item.image}}
          style={style.imageBackgroundStyle}
        />
      </TouchableOpacity>
    );
  };

  if (bannerData === null || data === null || data.length === 0) return null;
  return (
    <>
      <FlatList
        ref={(ref)=>{flatlistRef.current = ref}}
        onMomentumScrollEnd={onChange}
        pagingEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={style.listStyle}
        data={data}
        horizontal={true}
        renderItem={renderItem}
        contentContainerStyle={style.containerStyle}
        getItemLayout={(data, index) => (
          {length: (width-32), offset: (width-32) * index, index}
        )}
      />
      <View style={style.pointerContainer}>
        {data.map((item, index) => (
          <View
            style={[
              style.pointerStyle,
              {
                backgroundColor: activeIndex === index ? MARINER : ANAKIVA,
                marginRight: index < data.length - 1 ? 8 : 0,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default OfferBanner1;
