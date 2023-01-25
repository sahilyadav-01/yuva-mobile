import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector} from 'react-redux';
import Header from '../../../components/Header';

const Section10 = () => {
    const navigation = useNavigation()
    const {loggedIn} = useSelector(state => state.auth);
    const onPressRightIcon = () => {
        if (loggedIn !== 'loggedIn') {
          navigation.navigate('LoginScreen');
        } else {
           //The logic for opening the drawer should be added here
        }
      };

    return (
        <SafeAreaView>
                 <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
            <View className="h-full mx-[30px] my-[20px] ">
                <Text style={{ marginTop:106,fontWeight: '600' }} className="text-center text-xl text-[#E68D36]">YOUR RESPONSE HAS BEEN COLLECTED</Text>
                <Text style={{ marginTop:30,fontWeight: '500' }} className="text-center leading-2 text-[14px] text-[#44576A]">You can access your report again from the My Report section under Profile.</Text>
            </View>
        </SafeAreaView>
    )
}

export default Section10
