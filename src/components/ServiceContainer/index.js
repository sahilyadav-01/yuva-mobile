import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import ServiceCard from '../ServiceCard'
import { styles } from './styles';
import {OPD,HRA,DIAGNOSTICS,Talk_TO_DOCTOR,OPD_CONSULTATION,HEALTH_RISK_ASSESSMENT,HEALTH_CHECKUP_PACKAGES,TALK_TO_DOCTOR_NAME,OPD_CONSULTATION_IMAGE,HEALTH_RISK_ASSESSMENT_IMAGE,HEALTH_CHECKUP_PACKAGES_IMAGE,TALK_TO_DOCTOR_IMAGE, SERVICE_HEADING} from './constant';
const ServiceContainer = ({ navigation }) => {
    return (
        <View style={styles.mainContainerStyle}>
            <View style={styles.subContainerStyle1}>
                <Text style={styles.serviceHeading}>{SERVICE_HEADING} </Text>
                <View style={styles.line} />
            </View>
            <View style={styles.subContainerStyle2}>
                <ServiceCard name={OPD_CONSULTATION} screenName={OPD} image={OPD_CONSULTATION_IMAGE} />
                <ServiceCard name={HEALTH_RISK_ASSESSMENT} screenName={HRA} image={HEALTH_RISK_ASSESSMENT_IMAGE} />
                <ServiceCard name={HEALTH_CHECKUP_PACKAGES}screenName={DIAGNOSTICS} image={HEALTH_CHECKUP_PACKAGES_IMAGE} />
                <ServiceCard name={TALK_TO_DOCTOR_NAME} screenName={Talk_TO_DOCTOR} image={TALK_TO_DOCTOR_IMAGE} />
            </View>
        </View>
    )
}

export default ServiceContainer
