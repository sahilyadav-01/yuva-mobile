import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { Divider, ActivityIndicator} from 'react-native-paper';
import Backbutton from '../../components/Backbutton';
import { useDispatch, useSelector } from 'react-redux';
import AlertBox from '../../components/AlertBox';
import {signupThunk} from './../../store/reducers/AuthSlice'
import MessageBox from '../../components/MessageBox';

const Signup = () => {
    
    /**
     * state
     */
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signupFlag, setSignupFlag] = useState(false)
    const [signupMessage, setSignupMessage] = useState()

    const {loading} = useSelector(state => state.auth.loading)
    
    /**
     * Hooks
     */
    const navigation  = useNavigation();
    const dispatch = useDispatch();

    /**
     * call back functions
     */
    const goBack = ()=> {
        navigation.navigate("Login")
    }

    const signup = () => {
        //dispatch  thunk
       
        dispatch(signupThunk({name, email, password})).then(()=>{
            setSignupMessage("Succesfully Signed up!")
            setSignupFlag(true)
        }).catch((e)=>{
            console.log("error")
        })
       
    }

    const onChangeName = (e) => {
        setName(e)
    }

    const onChangeEmail = (e) => {
        setEmail(e)
    }

    const onChangePassword = (e) => {
        setPassword(e)
    }

    const closeMessageBox = () =>{
        setSignupFlag(false)
        navigation.navigate("Login")
    }


    return (
        <SafeAreaView className="flex h-full">

            <Backbutton onPress={goBack}/>

            {/* Top Section */}
            <View className="h-[75px] mt-[40px] mr-[20px] ml-[20px]">
                <View className="flex-row justify-between">
                    <View className="flex-row">
                        <Image
                    
                            source = {require("../../../assets/yuva_logo-2.png")}
                            className="h-[60px] w-[50px]"
                        />
                        <View className="flex ml-2 items-end">
                            {/* <View className="h-[40px] w-[120px] bg-gray-500"></View> */}
                            <Image
                                source = {require("../../../assets/yuva_text.png")}
                                className="h-[40px] w-[120px]"
                                resizeMode="contain"
                            />
                            <View className=""></View>
                            <Image
                                source = {require("../../../assets/HEALTH.png")}
                                className="h-[15px] w-[70px] mt-2"
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View className="flex items-end justify-end">
                        <Text className="text-bold text-lg">USER SIGNUP</Text>
                        <Divider style={{backgroundColor:'#52608E'}} className="h-1 w-14 rounded mt-0.5"/>
                    </View>
                </View>
            </View>

            {/* SignUP Screen */}
            <View className="flex h-full mt-[60px]">
                <TextInput 
                    style={{backgroundColor:"#f5f9fa"}} 
                    className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl border-b-2 pl-2" 
                    placeholder="Name"
                    onChangeText={onChangeName}
                />
                <TextInput 
                    style={{backgroundColor:"#f5f9fa"}} 
                    className="h-[50px] mr-[30px] ml-[30px] mt-{40px} rounded shadow-2xl border-b-2 pl-2" 
                    placeholder="Email"
                    onChangeText={onChangeEmail}
                />
                <TextInput 
                    style={{backgroundColor:"#f5f9fa"}} 
                    className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl mt-{40px} border-b-2 pl-2" 
                    placeholder="Password"
                    type="password"
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity 
                    onPress={signup}
                    style={{backgroundColor:"#52608E"}} 
                    className="mt-[45px] mr-[30px] ml-[30px] rounded">
                    {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                        <Text className="text-center pt-[15px] pb-[15px] text-white">Sign up</Text>
                    {/* </View> */}
                </TouchableOpacity>

                {/* Loading indicator */}
                {/* <ActivityIndicator animating={loading}/> */}

                {/* Handle input  errors */}
                {/* <AlertBox showDialog={error} hideDialog={disbaleAlert} message={errorMessage}/> */}
                <MessageBox head="Message" showDialog={signupFlag} hideDialog={closeMessageBox} message={signupMessage}/>

            </View>

        </SafeAreaView>
    )
}

export default Signup
