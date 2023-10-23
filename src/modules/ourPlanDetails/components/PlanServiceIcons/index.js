import React from "react";
import { View, FlatList } from "react-native";
import { usePlanServiceIcons } from "./hooks/usePlanServiceIcons";
import OurPlanServiceIconsCard from "../../../../components/OurPlanServiceIconsCard";
import { styles } from "./style";

const PlanServiceIcons = ({ data }) => {
  const { filteredServicesArray } = usePlanServiceIcons(data);
  const style = styles();

  const renderItem = (item) => {
    if (!item) {
      return null; 
    }
    return (
      <View style={style.servicesSubContainer}>
        <OurPlanServiceIconsCard
          key={item.item.name}
          name={item.item.name}
          text={item.item?.text ?? null}
          icon={item.item?.icon ?? null}
          iconProps={item.item?.props ?? null}
          available={item.item?.available}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={filteredServicesArray}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${index}`}
      numColumns={4}
    />
  );
};

export default PlanServiceIcons;