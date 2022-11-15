import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HRASectionCard from "./HRASectionCard";
import { useNavigation } from "@react-navigation/core";
const HRASectionContainer = () => {
  const navigation = useNavigation();
  const goToSection1 = () => {
    navigation.navigate("section1");
  };
  return (
    <View className="ml-1 mt-[10px]">
      <Text className="text-bold text-base text-center">
        Complete the sections to get HRA Report
      </Text>

      {/* <View className="flex flex-row flex-wrap  px-[15px]">
                <HRASectionCard  icon="weight" name="General" disp="none" screenname="section1" bgColor="#F6FDF0" elipseColor="#F0FCE7" image="speedmeter"/>
                <HRASectionCard  icon="food-outline" name="Diet" disp="none" screenname="section2"  bgColor="#F9FCFF" elipseColor="#E8F3FE" image="diet"/>
                <HRASectionCard  icon="brain" name="Mental Risk" disp="none" screenname="section3"  bgColor="#FDFCEA" elispeColor="#F9F7E3" image="brain"/>

                <HRASectionCard  icon="beer-outline" name="Alcohol" inactive={true} screenname="section4" bgColor="#FDF1FF" elipseColor="#FBE4FF" image="alcohol"/>
                <HRASectionCard  icon="smoking" name="Smoking" inactive={true} screenname="section5" bgColor="#F9F6F0" elipseColor="#FEF9E8" image="smoking"/>
                <HRASectionCard  icon="seatbelt" name="Safety" inactive={true} screenname="section6" bgColor="#EBF7FF" elipseColor="#E9F6FF" image="safety"/>

                <HRASectionCard  icon="medical-bag" name="Medical Condition" inactive={true} screenname="section7" bgColor="#F8F8F8" elipseColor="#D9ECEE" image="medical"/>
                <HRASectionCard  icon="mother-heart" name="Hereditary" inactive={true} screenname="section8" bgColor="#F9FCFF" elipseColor="#E8F3FE" image="heredity"/>
                <HRASectionCard  icon="bed-outline" name="Sleep" inactive={true} screenname="section9" bgColor="#F6FFFC" elipseColor="#E9FFF8" image="sleep"/>
            </View> */}
      <View className="px-[10px]">
        <View className="flex flex-row justify-between">
          <HRASectionCard
            icon="weight"
            name="General"
            disp="none"
            screenname="section1"
            bgColor="#F6FDF0"
            elipseColor="#F0FCE7"
            image="speedmeter"
          />
          <HRASectionCard
            icon="food-outline"
            name="Diet"
            disp="none"
            screenname="section2"
            bgColor="#F9FCFF"
            elipseColor="#E8F3FE"
            image="diet"
          />
          <HRASectionCard
            icon="brain"
            name="Mental Risk"
            disp="none"
            screenname="section3"
            bgColor="#FDFCEA"
            elispeColor="#F9F7E3"
            image="brain"
          />
        </View>
        <View className="flex flex-row justify-between">
          <HRASectionCard
            icon="beer-outline"
            name="Alcohol"
            inactive={true}
            screenname="section4"
            bgColor="#FDF1FF"
            elipseColor="#FBE4FF"
            image="alcohol"
          />
          <HRASectionCard
            icon="smoking"
            name="Smoking"
            inactive={true}
            screenname="section5"
            bgColor="#F9F6F0"
            elipseColor="#FEF9E8"
            image="smoking"
          />
          <HRASectionCard
            icon="seatbelt"
            name="Safety"
            inactive={true}
            screenname="section6"
            bgColor="#EBF7FF"
            elipseColor="#E9F6FF"
            image="safety"
          />
        </View>
        <View className="flex flex-row justify-between">
          <HRASectionCard
            icon="medical-bag"
            name="Medical Condition"
            inactive={true}
            screenname="section7"
            bgColor="#F8F8F8"
            elipseColor="#D9ECEE"
            image="medical"
          />
          <HRASectionCard
            icon="mother-heart"
            name="Hereditary"
            inactive={true}
            screenname="section8"
            bgColor="#F9FCFF"
            elipseColor="#E8F3FE"
            image="heredity"
          />
          <HRASectionCard
            icon="bed-outline"
            name="Sleep"
            inactive={true}
            screenname="section9"
            bgColor="#F6FFFC"
            elipseColor="#E9FFF8"
            image="sleep"
          />
        </View>
      </View>
      <View className="flex items-center justify-center">
        <TouchableOpacity
          className="flex items-center justify-center h-[30px] w-[348px] bg-[#E68D36] rounded-[8px] mt-[15px]"
          onPress={goToSection1}
        >
          <Text className="text-[10px] text-white">Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HRASectionContainer;
