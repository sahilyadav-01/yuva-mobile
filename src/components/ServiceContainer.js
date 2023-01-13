import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import ServiceCard from './ServiceCard'


const ServiceContainer = ({navigation}) => {
    return (
       <View className="mx-[30px] mt-[20px]">
           <View className="flex-row" style={{flexWrap:'wrap'}}>
                <ServiceCard  icon="stethoscope" name="Cashless OPD" disp="none" screenname="OPD" bgColor="#F4F9FC"  elipseColor="#D9ECEE" image="opd"/>
                <ServiceCard  icon="cards-heart-outline" name="Health Risk Assessment" disp="none" screenname="HRA" bgColor="#F9F0F0"  elipseColor="#FEE8E9" image="hra"/>
                <ServiceCard  icon="flask" name="Diagnostic & Health Package" disp="none" screenname="Diagnostics" bgColor="#F4F9FC"  elipseColor="#E9F6FF" image="diagnostics"/>
                <ServiceCard  icon="stethoscope" name="Talk to Doctor" disp="none" screenname="TalkToDoctor" bgColor="#F4F9FC"  elipseColor="#D9ECEE" image="opd"/>
            </View>
        </View>
    )
}

export default ServiceContainer
