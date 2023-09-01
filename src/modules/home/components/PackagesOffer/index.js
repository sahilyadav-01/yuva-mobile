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

const PackagesOffer = props => {
  const {
    bannerData: {data: bannerData},
  } = props;
  const data = bannerData?.data ?? null;
  const style = styles();
  const renderItem = () => {
    return (
      <ImageBackground
        resizeMode="stretch"
        source={PNG.Banner3}
        style={style.imageBackgroundStyle}>
        <View style={style.container}>
          <Text style={style.headingText}>Monsoon Package</Text>
          <View style={{height: 8}} />
          <Text numberOfLines={3} style={style.descriptionText}>
            Embrace the Monsoon with our Exclusive package - Check for illnesses
            common in Monsoon to ensure good health & reduce your risks Embrace
            the Monsoon with our Exclusive package - Check for illnesses common
            in Monsoon to ensure good health & reduce your risks
          </Text>
          <View style={{height: 8}} />
          <Text style={style.priceText}>Rs 900/-</Text>
          <View style={{height: 4}} />
          <TouchableOpacity style={style.buttonContainer}>
            <Text style={[style.descriptionText]}>Book Now</Text>
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
