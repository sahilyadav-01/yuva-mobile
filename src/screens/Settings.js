import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux'
import { logoutThunk } from '../store/reducers/AuthSlice'


const Settings = () => {

    /**
     * Hooks
     */
    const dispatch = useDispatch()
    const navigation  = useNavigation()

    /**
     * State
     */
    const loggedIn = useSelector(state => state.auth.loggedIn)

    /**
     * Internal functions
     */
    const logoff = () => {
        dispatch(logoutThunk())
    }

    /**
     * React hooks
     */

    useEffect(()=>{
        if(loggedIn  != "loggedIn"){
            navigation.navigate("Login")
        }
    },[loggedIn])

    return (
        <View className="flex h-full justify-center items-center">
            <TouchableOpacity onPress={logoff} className="flex justify-center w-[100px] h-[40px] bg-gray-300 rounded">
                <Text className="text-center">Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings
