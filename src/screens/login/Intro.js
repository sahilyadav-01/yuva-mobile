import React, {useEffect} from 'react'
import { View, Image} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { initialLoad } from '../../store/reducers/AuthSlice'

const Intro = () => {
  const dispatch= useDispatch()
  const navigation = useNavigation()
  const loggedIn = useSelector(state => state.auth.loggedIn)

  useEffect(() => {
      dispatch(initialLoad())
  }, [])

  useEffect(() => {
      if(loggedIn == "loggedIn"){
        navigation.navigate("HomeScreen")
      }else if (loggedIn == "notLoggedIn"){
        navigation.navigate("Login")
      }
  }, [loggedIn])

  return (
    <View className="h-full justify-center items-center">
      <Image
        source = {require("../../../assets/splash_screen.png")}
        className="h-full w-full"
      />
    </View>
  )
}

export default Intro
