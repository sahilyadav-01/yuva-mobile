import React from "react";
import { View, Text, TouchableOpacity , Image } from "react-native";
import hraHome from '../../../../assets/HRA_HOME.png';
import { useNavigation } from "@react-navigation/core";
const HRASectionContainer = () => {
const navigation = useNavigation();
const goToSection1 = () => {
    navigation.navigate("section1");
  };
  return (
    <View className=" mx-[15px] mt-[24px] flex items-center justify-center">
      <View >
          <Image source={ hraHome }/>
      </View>
      <View style={{marginTop: 41,marginHorizontal:14 }}>
        <TouchableOpacity
          className="flex items-center justify-center h-[45px] w-[348px] bg-[#E68D36] rounded-[8px] mt-[15px]"
          onPress={goToSection1}
        >
          <Text
                style={{
                  fontWeight: '600',
              }} 
          className="text-[16px] text-white">Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HRASectionContainer;
