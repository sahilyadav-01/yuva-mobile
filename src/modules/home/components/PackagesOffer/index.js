import React, {useState} from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Text,
} from 'react-native';
import {styles} from './style';
import {GRAY, LIGHT_GREY, ORANGE} from '../../../../styles/colors';
import {PNG} from '../../../../../assets';

const PackagesOffer = ({data}) => {
  //   const [activeIndex, setActiveIndex] = useState(0);
  //   const onChange = ({nativeEvent}) => {
  //     const active = Math.floor(
  //       nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
  //     );
  //     setActiveIndex(active);
  //   };
  const style = styles();
  const renderItem = () => {
    return (
      <ImageBackground source={PNG.Banner3} style={style.imageBackgroundStyle}>
        <Text>Monsoon Package</Text>
        <View style={{height: 8}} />
        <Text style={{maxWidth: '70%'}}>
          Embrace the Monsoon with our Exclusive package - Check for illnesses
          common in Monsoon to ensure good health & reduce your risks
        </Text>
        <View style={{height: 8}} />
        <Text>Rs 900/-</Text>
        <View style={{height: 4}} />
        <TouchableOpacity
          style={{
            borderRadius: 6,
            paddingVertical: 6,
            paddingHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'red'
          }}>
          <Text>Book Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  return (
    <>
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
      {/* <View style={style.pointerContainer}>
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
      </View> */}
    </>
  );
};

export default PackagesOffer;
