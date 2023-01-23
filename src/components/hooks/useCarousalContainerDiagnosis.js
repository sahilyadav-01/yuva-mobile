
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CarouselItem from '../CarouselItem';
import { View} from 'react-native';

export const useCarousalContainerDiagnosis = () => {

    const { diagnosticCarouselData } = useSelector(state => state.diagnostic)
    const renderIndexData = new Array(diagnosticCarouselData?.length)
    const [activeIndex, setActiveIndex] = useState(0);
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
        return <CarouselItem diagnosticItem={item} index={index} totalItem={diagnosticCarouselData?.length} />
    }
    const renderIndex = ({ diagnosticItem, index }) => {
        return <View className="h-2 w-2 rounded-full ml-2" style={{ backgroundColor: index === activeIndex ? 'white' : 'grey', borderColor: 'grey', borderWidth: 2 }} />
    }
    return {
        renderIndexData,
        renderItem,
        renderIndex,
        onViewableItemsChanged,
        viewabilityConfigCallbackPairs,
        viewabilityConfig
    }
}