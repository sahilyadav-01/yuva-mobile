import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Backbutton from '../components/Backbutton';
import {CurrentRenderContext, useNavigation} from '@react-navigation/native';
import Doctor from '../screens/yuvaservices/opd/doctors/Doctor';
import {Dropdown} from 'react-native-element-dropdown';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppointmentNav from './AppointmentNav';
// import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialTopTabNavigator();

const OPDNavigation = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const goBack = () => navigation.goBack();
  return (
    <View>
      <View className="flex-row items-center h-[62px] bg-[#1D2334] pl-[10px]">
        <Backbutton onPress={goBack} color="white" size={20} />
        <Text className="text-white text-center text-base ml-[20px]">OPD</Text>

        <View style={styles.outer}>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'white'}]}
            placeholderStyle={styles.placeholderStyle}
            // selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            // data={data}
            search
            // maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'location' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Icon
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="map-marker-outline"
                size={20}
              />
            )}
          />
        </View>

        {/* <view className="flex-end">
          <Text className="text-white text-center text-base mr-[100px]">
            location
          </Text>
        </view> */}
      </View>
      <Tab.Navigator
        className="flex"
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16, marginTop: 15},
          tabBarStyle: {color: '#1D2334', height: 70},
        }}>
        <Tab.Screen name="Doctor" component={Doctor} />
        <Tab.Screen name="Appointments" component={AppointmentNav} />
      </Tab.Navigator>
    </View>
  );
};

export default OPDNavigation;
const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    right: 0,

    bottom: 10,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    backgroundColor: 'white',

    height: 26,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,

    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
