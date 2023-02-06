import React from 'react'
import { View, Text } from 'react-native'
import ServiceCard from '../ServiceCard'
import { styles } from './styles';
import { OPD, HRA, DIAGNOSTICS, Talk_TO_DOCTOR, OPD_CONSULTATION, HEALTH_RISK_ASSESSMENT, HEALTH_CHECKUP_PACKAGES, TALK_TO_DOCTOR_NAME, OPD_CONSULTATION_IMAGE, HEALTH_RISK_ASSESSMENT_IMAGE, HEALTH_CHECKUP_PACKAGES_IMAGE, TALK_TO_DOCTOR_IMAGE, SERVICE_HEADING, MY_HEALTH_CHECKUP, MY_HEALTH_CHECKUP_IMAGE } from './constant';
const ServiceContainer = () => {
    return (
        <View style={styles.mainContainerStyle}>
            <View style={styles.subContainerStyle1}>
                <Text style={styles.serviceHeading}>{SERVICE_HEADING} </Text>
                <View style={styles.line} />
            </View>
            <View style={styles.subContainerStyle2}>
                <ServiceCard name={OPD_CONSULTATION} screenName={OPD} image={OPD_CONSULTATION_IMAGE} />
                <ServiceCard name={HEALTH_RISK_ASSESSMENT} screenName={HRA} image={HEALTH_RISK_ASSESSMENT_IMAGE} />
                <ServiceCard name={MY_HEALTH_CHECKUP} screenName={'ProfessionalServices'} image={MY_HEALTH_CHECKUP_IMAGE} />
                <ServiceCard name={TALK_TO_DOCTOR_NAME} screenName={Talk_TO_DOCTOR} image={TALK_TO_DOCTOR_IMAGE} />
                <ServiceCard name={HEALTH_CHECKUP_PACKAGES} screenName={DIAGNOSTICS} image={HEALTH_CHECKUP_PACKAGES_IMAGE} />

            </View>
        </View>
    )
}

export default ServiceContainer
