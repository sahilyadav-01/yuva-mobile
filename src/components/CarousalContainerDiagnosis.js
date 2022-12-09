
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarouselItem from './CarouselItem';
import { useSelector, useDispatch } from 'react-redux';
const CarouselContainerDiagnosis = () => {

    const [activeIndex, setActiveIndex] = useState(0);
  
    const { bookedData ,caraouselData } = useSelector(state => state.diagnostic)
    const wp = Dimensions.get('screen').width;

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems?.length === 1) {
            setActiveIndex(viewableItems[0]?.index);
        }
    };
    const viewabilityConfigCallbackPairs = useRef([
        { onViewableItemsChanged },
    ]);

    const viewabilityConfig = {
        waitForInteraction: true,
        itemVisiblePercentThreshold: 100
    }
    const renderItem = ({ item, index }) => {
        return <CarouselItem item={item} index={index} totalItem={caraouselData?.length} />
    }
    return (
        <View className="flex items-center justify-center mt-2 mx-4 my-4">
            <FlatList
                renderItem={renderItem}
                data={caraouselData}
                keyExtractor={(item) => item.id}
                snapToAlignment={"start"}
                snapToInterval={wp - 10}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // onScrollEndDrag={onScrollEndDrag} 
                viewabilityConfigCallbackPairs={
                    viewabilityConfigCallbackPairs.current
                }
                viewabilityConfig={viewabilityConfig}
            />
            <FlatList
                className="flex-row mt-[20px]"
                horizontal={true}
                data={new Array(caraouselData?.length)}
                renderItem={({ item, index }) => {
                    return <View className="h-2 w-2 rounded-full ml-2" style={{ backgroundColor: index === activeIndex ? 'white' : 'grey', borderColor: 'grey', borderWidth: 2 }}></View>
                }}
            />
        </View>
    );
};

export default CarouselContainerDiagnosis;
