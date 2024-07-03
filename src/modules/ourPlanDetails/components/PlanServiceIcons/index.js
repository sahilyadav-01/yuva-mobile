import React from "react";
import { View, FlatList } from "react-native";
import { usePlanServiceIcons } from "./hooks/usePlanServiceIcons";
import OurPlanServiceIconsCard from "../../../../components/OurPlanServiceIconsCard";
import { styles } from "./style";
import { getDimensions } from "../../../../utils/utils";

const PlanServiceIcons = ({ data }) => {
  const { filteredServicesArray } = usePlanServiceIcons(data);
  const style = styles();

  const renderItem = ({item,index}) => {
    if (!item) {
      return null; 
    }
    return (
      <View style={[style.servicesSubContainer,{marginRight:(index+1)%4 === 0 ? undefined : '5%'}]}>
        <OurPlanServiceIconsCard
          key={item.name}
          name={item.name}
          text={item?.text ?? null}
          icon={item?.icon ?? null}
          iconProps={item?.props ?? null}
          available={item?.available}
        />
      </View>
    );
  };
  return (
    <FlatList
      scrollEnabled={false}
      data={filteredServicesArray}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${index}`}
      numColumns={4}
    />
  );
};

export default PlanServiceIcons;