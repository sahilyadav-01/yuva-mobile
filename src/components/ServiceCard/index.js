import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {PNG} from '../../../assets';

const imageData = {
  OPD_Consultation: PNG.OPD_Consultation,
  Health_Risk_Assessment: PNG.Health_Risk_Assessment,
  Health_Checkup_Packages: PNG.Health_Checkup_Packages,
  Talk_To_Doctor: PNG.Talk_To_Doctor,
};

const ServiceCard = ({name, screenname, image}) => {
  const navigation = useNavigation();
  const onpress = () => {
    navigation.navigate(`${screenname}`);
  };

  return (
    <TouchableOpacity
      style={styles.touchableOpacityContainerStyle}
      disable={true}
      onPress={onpress}>
      <View className={`flex justify-end h-[80px] w-full rounded-lg shadow-xl`}>
        <View
          className={`flex-row justify-center h-[53px] w-[100px] rounded-tr-full rounded-tl-full`}>
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

export default ServiceCard;
