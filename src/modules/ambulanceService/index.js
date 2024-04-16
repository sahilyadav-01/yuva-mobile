import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../components/Header';
import ImageContainer from './ImageContainer';
import Description from './Description';
import ItemContainer from './ItemContainer';
import { styles } from './styles';

function AmbulanceScreen(props) {
    return (
        <>
        <Header title={'Ambulance Service'} isScreen={true} hideMenu={false} showBackButton={true} />
        <ScrollView>
        <View style={styles.container}>
       <ImageContainer/>
       <Description/>
       <ItemContainer/>
       </View>
       </ScrollView>
       </>
    );
}

export default AmbulanceScreen;