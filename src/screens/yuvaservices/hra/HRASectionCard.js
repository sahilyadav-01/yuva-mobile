import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {useNavigation} from '@react-navigation/native';
import speedmeter from '../../../../assets/speedmeter.png';
import brain from '../../../../assets/brain.png';
import diet from '../../../../assets/diet.png';
import heredity from '../../../../assets/heredity.png';
import medical from '../../../../assets/medical.png';
import safety from '../../../../assets/safety.png';
import sleep from '../../../../assets/sleep.png';
import smoking from '../../../../assets/smoking.png';
import alcohol from '../../../../assets/alcohol.png';

const imageData = {
  speedmeter: speedmeter,
  brain: brain,
  diet: diet,
  heredity: heredity,
  medical: medical,
  safety: safety,
  sleep: sleep,
  smoking: smoking,
  alcohol: alcohol,
};

const HRASectionCard = ({
  icon,
  name,
  inactive,
  disp,
  screenname,
  bgColor,
  elipseColor,
  image,
}) => {
  const navigation = useNavigation();
  const onpress = () => {
    navigation.navigate(`${screenname}`);
  };

  return (
    // <TouchableOpacity
    //     style={{backgroundColor:"#f5f9fa", borderColor:"#52608E"}}
    //     className="w-{80px} h-{80px}  border-b-4 border-r-4  border-t-1 shadow-2xl my-3 mx-5 rounded shadow-inner"
    //     disable={true}
    //     onPress={onpress}
    // >
    //     {/* <MaterialCommunityIcons style={{display:disp}} name="lock-outline" size={16} color="black" />            */}
    //     <View className="w-20 h-20 flex items-center justify-center">
    //         <MaterialCommunityIcons name={icon} size={26} color="black"/>
    //         <Text className="text-xs text-center pb-2 mt-1">{name}</Text>
    //     </View>
    // </TouchableOpacity>

    <TouchableOpacity
      className="w-[100px] h-[100px] mx-[5px] my-[10px] rounded shadow-inner"
      disable={true}
      onPress={onpress}>
      <View
        className={`flex justify-end h-[80px] w-full rounded-lg shadow-xl bg-[${bgColor}]`}
        style={{backgroundColor: bgColor}}>
        <View
          className={`flex-row justify-center bg-[${elipseColor}] h-[53px] w-[100px] rounded-tr-full rounded-tl-full`}
          style={{backgroundColor: elipseColor}}>
          <Image source={imageData[`${image}`]} className="h-[40px] w-[40px]" />
        </View>
      </View>
      <View className="mt-[10px]">
        <Text className="text-xs text-center pb-2" style={{color: '#1D2334'}}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HRASectionCard;
