import React, {useState} from 'react';
import {TouchableOpacity, ImageBackground, View, FlatList} from 'react-native';
import {styles} from './style';
import {GRAY, LIGHT_GREY, ORANGE} from '../../../../styles/colors';
import { PNG } from '../../../../../assets';

const OfferBanner1 = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onChange = ({nativeEvent}) => {
    const active = Math.floor(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setActiveIndex(active);
  };
  const style = styles();
  const renderItem = () => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={PNG.Banner1}
          style={style.imageBackgroundStyle}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        onMomentumScrollEnd={onChange}
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
