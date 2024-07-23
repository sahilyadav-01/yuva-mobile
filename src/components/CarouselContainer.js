import React, {useRef, useState} from 'react';
import {View, FlatList} from 'react-native';
import {getDimensions} from '../utils/utils';
const CarouselContainer = props => {
  const {isIndexed, children, data} = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const {width} = getDimensions();

  const onViewableItemsChanged = ({viewableItems}) => {
    if (viewableItems?.length === 1) {
      setActiveIndex(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100,
  };
  const renderItem = ({item, index}) => {
    return React.cloneElement(children, {
      item,
      index,
      totalItem: data?.length ?? 10,
    });
  };

  const render = ({item, index}) => {
    return (
      <View
        key={index}
        className="h-2 w-2 rounded-full ml-2"
        style={{
          backgroundColor: index === activeIndex ? 'white' : 'grey',
          borderColor: 'grey',
          borderWidth: 2,
        }}
      />
    );
  };
  return (
    <View className="flex justify-center mt-2 mx-4 my-4">
      <FlatList
        renderItem={renderItem}
        data={data}
        nestedScrollEnabled={true}
        keyExtractor={(item, index) => `${index}`}
        key={(item, index) => index}
        snapToAlignment={'start'}
        snapToInterval={width - 10}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewabilityConfig}
      />
      {isIndexed && (
        <FlatList
          className="flex-row mt-[20px]"
          horizontal={true}
          data={new Array(data?.length ?? 10)}
          renderItem={render}
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
        />
      )}
    </View>
  );
};

export default CarouselContainer;
