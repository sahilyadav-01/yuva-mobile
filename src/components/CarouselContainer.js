import React, {useRef, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {getDimensions} from '../utils/utils';
const CarouselContainer = (props) => {
  const {includeMockData,isIndexed, children} = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const {userAppointments} = useSelector(state => state?.appointment);
  const {width} = getDimensions();

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems?.length === 1) {
      setActiveIndex(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100,
  };
  const renderItem = ({ item, index }) => {
    return React.cloneElement(children, {
      item,
      index,
      totalItem: userAppointments.length ?? 10,
    });
  };

  const render = ({item, index}) => {
    return (
      <View
        className="h-2 w-2 rounded-full ml-2"
        style={{
          backgroundColor: index === activeIndex ? 'white' : 'grey',
          borderColor: 'grey',
          borderWidth: 2,
        }}></View>
    );
  };
  return (
    <View className="flex items-center justify-center mt-2 mx-4 my-4">
      <FlatList
        renderItem={renderItem}
        data={
          includeMockData ? [0, 0, 0, 0, 0] : userAppointments
        } /* Need to change the mock data once API's are ready* */
        keyExtractor={item => item.id}
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
          data={new Array(userAppointments.length ?? 10)}
          renderItem={render}
        />
      )}
    </View>
  );
};

export default CarouselContainer;
