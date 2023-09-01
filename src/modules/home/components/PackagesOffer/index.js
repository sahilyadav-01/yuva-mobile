import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Text,
} from 'react-native';
import {styles} from './style';
import {PNG} from '../../../../../assets';
import {usePackagesOffer} from './hooks/usePackagesOffer';
import {BOOK_NOW} from './constants';

const PackagesOffer = props => {
  const {onPackagePress} = usePackagesOffer();
  const {
    bannerData: {data: bannerData},
  } = props;
  const data = bannerData?.data ?? null;
  const style = styles();
  const renderItem = ({item}) => {
    return (
      <ImageBackground
        resizeMode="stretch"
        source={PNG.Banner3}
        style={style.imageBackgroundStyle}>
        <View style={style.container}>
          <Text style={style.headingText}>{item.innerBannerName}</Text>
          <View style={style.separator} />
          <Text numberOfLines={3} style={style.descriptionText}>
            {item.description}
          </Text>
          <View style={style.separator} />
          <Text style={style.priceText}>Rs 900/-</Text>
          <TouchableOpacity
            onPress={() => onPackagePress(item)}
            style={style.buttonContainer}>
            <Text style={[style.descriptionText, style.bookText]}>
              {BOOK_NOW}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  if (bannerData === null || data === null || data.length === 0) return null;
  return (
    <View>
      <FlatList
        pagingEnabled={true}
        key={(item, index) => index.toString()}
        keyExtractor={(item, index) => index.toString()}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 16}} />}
        style={style.listStyle}
        data={data}
        horizontal={true}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PackagesOffer;
