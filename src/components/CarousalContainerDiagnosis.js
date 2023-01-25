
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../screens/styles';
import { UPCOMING } from '../styles/constants';
import { getDimensions } from '../utils/utils';
import { useCarousalContainerDiagnosis } from './hooks/useCarousalContainerDiagnosis';

const CarouselContainerDiagnosis = () => {

    const { diagnosticCarouselData } = useSelector(state => state.diagnostic)
    const {width} = getDimensions();

const {   renderIndexData,
    renderItem,
    renderIndex,
    onViewableItemsChanged,
    viewabilityConfigCallbackPairs,
    viewabilityConfig}=useCarousalContainerDiagnosis();
  
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
                    data={renderIndexData}
                    renderItem={renderIndex}              
                />
            </View>

        </View>
    );
};

export default CarouselContainerDiagnosis;
