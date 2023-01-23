
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CarouselItem from './CarouselItem';
import { useSelector } from 'react-redux';
import { styles } from '../screens/styles';
import { UPCOMING } from '../styles/constants';
import { getDimensions } from '../utils/utils';

const CarouselContainerDiagnosis = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const { diagnosticCarouselData } = useSelector(state => state.diagnostic)
    const {width} = getDimensions();
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
    const renderIndex=({ diagnosticItem, index }) => {
            return <View className="h-2 w-2 rounded-full ml-2" style={{ backgroundColor: index === activeIndex ? 'white' : 'grey', borderColor: 'grey', borderWidth: 2 }} />
    }
   
    if(!diagnosticCarouselData)
    {
        return null;
    }
    return (
        <View>

                <View style={styles.lineJustify}>
                    <Text style={styles.carouselText}>{UPCOMING}</Text>

                <View  style={styles.line} ></View>
                </View>
                
            <View style={styles.carouselMain}>

                <FlatList
            
                    renderItem={renderItem}
                    data={diagnosticCarouselData}
                    keyExtractor={(item) => item.id}
                    snapToAlignment={"start"}
                    snapToInterval={width - 10}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // onScrollEndDrag={onScrollEndDrag} 
                    viewabilityConfigCallbackPairs={
                        viewabilityConfigCallbackPairs.current
                    }
                    viewabilityConfig={viewabilityConfig}
                />
                <FlatList
                    style={styles.flatlist}
                    horizontal={true}
                    data={new Array(diagnosticCarouselData?.length)}
                    renderItem={renderIndex}              
                />
            </View>

        </View>
    );
};

export default CarouselContainerDiagnosis;
