import React from "react";
import { View } from "react-native";
import { usePlanServiceIcons } from "./hooks/usePlanServiceIcons";
import OurPlanServiceIconsCard from "../../../../components/OurPlanServiceIconsCard";
import { styles } from "./style";

const PlanServiceIcons = () => {
    const{renderservicesItem}=usePlanServiceIcons();
    const style = styles();
    return (
             renderservicesItem.map(item => (
            <View style={style.servicesSubContainer}>
                {item.map((i) => {
                    return (
                        <OurPlanServiceIconsCard
                            key={i.name}
                            name={i.name}
                            text={i?.text}
                            icon={i?.icon ?? null}
                        />
                    )
                })}
            </View>))

    );
}

export default PlanServiceIcons;