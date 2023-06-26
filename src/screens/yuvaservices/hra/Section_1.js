import React from 'react'
import {SafeAreaView } from 'react-native'
import Section1 from '../../../modules/hra/Section1';

const Section_1 = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Section1 userData={props?.route?.params?.userData ?? null} name={props?.route?.params?.name} id={props?.route?.params?.id}/>
    </SafeAreaView>
  )
}

export default Section_1;
