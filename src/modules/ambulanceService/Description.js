import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

function Description(props) {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeading}>About Service</Text>
            <Text style={styles.descriptionText}>Under this service, we provide dedicated ambulances, manpower, and our in-house technology to assist with real-time tracking of these ambulances, the technology includes which includes dedicated applications for the drivers, paramedics, and call center executives, and customized dashboards for easy monitoring at the back end allowing smooth data sharing, helping us to provide better care for the patients.</Text>
        </View>
    );
}

export default Description;