import React from 'react';
import {View, Text, Image} from 'react-native';
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
  name,
  bgColor,
  elipseColor,
  image,
}) => {

  return (
    <View
      className="w-[100px] h-[100px] mx-[5px] my-[10px] rounded shadow-inner"
     >
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
    </View>
  );
};

export default HRASectionCard;
