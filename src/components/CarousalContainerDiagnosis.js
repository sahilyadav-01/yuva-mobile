
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarouselItem from './CarouselItem';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from '../screens/styles';
import { UPCOMING } from '../styles/constants';
const CarouselContainerDiagnosis = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [upcoming,setUpcoming]=useState(false);
  
    const {caraouselData } = useSelector(state => state.diagnostic)
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
        return <CarouselItem diagnosticItem={item} index={index} totalItem={caraouselData?.length} />
    }
    useEffect(()=>{
        if(caraouselData.length>0){
            setUpcoming(true)
        }
        else{
            setUpcoming(false)
        }

    },[caraouselData])
    return (
       <View>
         {upcoming ?( 
         <View ><Text style={styles.carouselText}>{UPCOMING}</Text> 
        <View style={styles.carouselMain}>
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
                style={styles.flatlist}
                horizontal={true}
                data={new Array(caraouselData?.length)}
                renderItem={({ diagnosticItem, index }) => {
                    return <View className="h-2 w-2 rounded-full ml-2" style={{ backgroundColor: index === activeIndex ? 'white' : 'grey', borderColor: 'grey', borderWidth: 2 }}></View>
                }}
            />
        </View>
        </View> ):('')}
        </View>
    );
};

export default CarouselContainerDiagnosis;
