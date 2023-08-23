import React from "react";
import { View } from "react-native";
import ServiceCard from "../../../../components/ServiceCard";
import { styles } from './styles'
const Services = ({ renderservicesItem }) => {
    const style = styles();
    return (
        renderservicesItem.map(item => (
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
            </View>))
    );
}

export default Services;