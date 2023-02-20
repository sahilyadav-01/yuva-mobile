import React from 'react'
import {SafeAreaView } from 'react-native'
import Section1 from '../../../modules/hra/Section1';

const section_1 = (props) => {
  return (
    <SafeAreaView >
      <Section1 userData={props?.route?.params?.userData ?? null} />
    </SafeAreaView>
  )
}

export default section_1;
