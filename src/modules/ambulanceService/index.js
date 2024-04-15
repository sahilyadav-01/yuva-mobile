import React from 'react';
import Header from '../../components/Header';
import ImageContainer from './ImageContainer';
import Description from './Description';
import { styles } from './styles';
import { View } from 'react-native';

function AmbulanceScreen(props) {
    return (
        <>
        <Header title={'Ambulance Service'} isScreen={true} hideMenu={false} showBackButton={true} />
        <View style={styles.container}>
       <ImageContainer/>
       <Description/>
       </View>
       </>
    );
}

export default AmbulanceScreen;