import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import ServiceCard from './ServiceCard'


const ServiceContainer = ({navigation}) => {
    return (
       <View className="mx-[30px] mt-[20px]">
           <View className="flex-row">
                <ServiceCard  icon="stethoscope" name="OPD" disp="none" screenname="OPD" bgColor="#F4F9FC"  elipseColor="#D9ECEE" image="opd"/>
                <ServiceCard  icon="cards-heart-outline" name="HRA" disp="none" screenname="HRA" bgColor="#F9F0F0"  elipseColor="#FEE8E9" image="hra"/>
                <ServiceCard  icon="flask" name="Diagnostics" disp="none" screenname="Diagnostics" bgColor="#F4F9FC"  elipseColor="#E9F6FF" image="diagnostics"/>
            </View>
            {/* <View className="flex-row">
                <ServiceCard  icon="weight-lifter" name="Professional Services" inactive={true} screenname="ProfessionalServices"/>
                <ServiceCard  icon="medical-bag" name="Pharmacy" inactive={true} screenname="ProfessionalServices"/>
                <ServiceCard  icon="ambulance" name="Emergency Services" inactive={true} screenname="ProfessionalServices"/>
            </View> */}
        </View>
    )
}

export default ServiceContainer
