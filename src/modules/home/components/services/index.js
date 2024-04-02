import React from "react";
import { View,Text } from "react-native";
import ServiceCard from "../../../../components/ServiceCard";
import { styles } from './styles'
const Services = ({ renderservicesItem }) => {
    const style = styles();
    return (
        <View style={style.container}>
            <View style={style.headingContainer}>
            <Text style={style.heading}>Services</Text>
            <Text style={style.viewAllText}>View All</Text>
            </View>
        {[renderservicesItem[0]].map(item => (
            <View style={style.servicesSubContainer}>
                {item.map((i) => {
                    return (
                        <ServiceCard
                            key={i.name}
                            name={i.name}
                            screenName={i.screenName}
                            icon={i?.icon ?? null}
                        />
                    )
                })}
            </View>))}
            </View>
    );
}

export default Services;