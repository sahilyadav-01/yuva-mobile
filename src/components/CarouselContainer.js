import React, {useRef, useState} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const CarouselContainer = props => {
  const {isIndexed, children, includeMockData} = props;
  const data = [
    {id: 1, text: 'text1'},
    {id: 1, text: 'text2'},
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const {userAppointments} = useSelector(state => state?.appointment);
   const wp = Dimensions.get('screen').width;

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
      totalItem: userAppointments.length ?? 10,
    });
  };
  return (
    <View className="flex items-center justify-center mt-2 mx-4 my-4">
      <FlatList
        renderItem={renderItem}
        data={includeMockData ? [0,0,0,0,0] : userAppointments} /* Need to change the mock data once API's are ready* */
        keyExtractor={item => item.id}
        // initialNumToRender={1.5}
        key={(item, index) => index}
        snapToAlignment={'start'}
        snapToInterval={wp - 10}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // onScrollEndDrag={onScrollEndDrag}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewabilityConfig}
      />
      {isIndexed && (
        <FlatList
          className="flex-row mt-[20px]"
          horizontal={true}
          data={new Array(userAppointments.length ?? 10)}
          renderItem={({item, index}) => {
            return (
              <View
                className="h-2 w-2 rounded-full ml-2"
                style={{
                  backgroundColor: index === activeIndex ? 'white' : 'grey',
                  borderColor: 'grey',
                  borderWidth: 2,
                }}></View>
            );
          }}
        />
      )}
    </View>
  );
};

export default CarouselContainer;
