import React from 'react';
import {View} from 'react-native';
import {styles as style} from './style';
import PlanDescriptor from '../../../../../components/PlanDescriptor';

function ImageContainer(props) {
    const styles = style();
    return (
        <View style={styles.container}>
            <PlanDescriptor/>
        </View>
    );
}

export default ImageContainer;