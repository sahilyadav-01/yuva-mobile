import React,{useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import opd from  '../../assets/opd.png'
import hra from  '../../assets/hra.png'
import diagnostics from  '../../assets/diagnostics.png'

const imageData = {
    "opd": opd,
    "hra":hra,
    "diagnostics":diagnostics
}

const ServiceCard = ({icon, name, inactive, disp, screenname, bgColor, elipseColor, image}) => {
    const navigation = useNavigation();
    const onpress= () =>{
        navigation.navigate(`${screenname}`)
    }

    return (
         <TouchableOpacity 
             className="w-[100px] h-[100px] mx-[10px] my-[20px] rounded shadow-inner"
             disable={true}
             onPress={onpress}>            
             <View 
                className={`flex justify-end h-[80px] w-full rounded-lg shadow-xl bg-[${bgColor}]`}
                style={{backgroundColor:bgColor}}
             >
                <View 
                className={`flex-row justify-center bg-[${elipseColor}] h-[53px] w-[100px] rounded-tr-full rounded-tl-full`}
                style={{backgroundColor:elipseColor}}
                >
                    <Image
                        
                        source = {imageData[`${image}`]}
                        className="h-[40px] w-[40px]"
                    />

                </View>
            </View>
            <View className="mt-[10px]">
                <Text 
                    className="text-xs text-center pb-2"
                    style={{color:"#1D2334"}}
                >{name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ServiceCard
