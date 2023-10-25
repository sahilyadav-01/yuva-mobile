import React, {useState} from 'react';
import {TouchableOpacity, View, FlatList, Image} from 'react-native';
import {styles} from './style';
import {GRAY, ORANGE} from '../../../../styles/colors';
import {useOfferBanner} from './hooks/useOfferBanner';

const OfferBanner1 = props => {
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
        onMomentumScrollEnd={onChange}
        pagingEnabled={true}
        key={(item, index) => index.toString()}
        keyExtractor={(item, index) => index.toString()}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={style.listStyle}
        data={data}
        horizontal={true}
        renderItem={renderItem}
        contentContainerStyle={style.containerStyle}
      />
      <View style={style.pointerContainer}>
        {data.map((item, index) => (
          <View
            style={[
              style.pointerStyle,
              {
                backgroundColor: activeIndex === index ? ORANGE : GRAY,
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
