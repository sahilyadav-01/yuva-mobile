import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import ServiceCard from '../ServiceCard'
import { SERVICE_HEADING } from './constant';
import { styles } from './styles';

const ServiceContainer = ({ navigation }) => {
    return (
        <View style={styles.mainContainerStyle}>
            <View style={styles.subContainerStyle1}>
                <Text style={styles.serviceHeading}>{SERVICE_HEADING} </Text>
                <View style={styles.line} />
            </View>
            <View style={styles.subContainerStyle2}>
                <ServiceCard name="OPD Consultation" screenname="OPD" image="OPD_Consultation" />
                <ServiceCard name="Health Risk Assessment" screenname="HRA" image="Health_Risk_Assessment" />
                <ServiceCard name="Health Checkup Packages" screenname="Diagnostics" image="Health_Checkup_Packages" />
                <ServiceCard name="Talk To Doctor" screenname="TalkToDoctor" image="Talk_To_Doctor" />
            </View>
        </View>
    )
}

export default ServiceContainer
