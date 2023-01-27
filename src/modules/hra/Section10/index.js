import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../../../components/Header';
import { LOGGEDIN, SECTION_10_HEADING, SECTION_10_SUB_HEADING } from '../constant';
import { useSection10 } from './hooks/useSection10';
import { styles } from './styles';

const Section10 = () => {

  const { loggedIn, onPressRightIcon } = useSection10();

  return (
    <SafeAreaView>
       <View style={styles.topContainer}>
      <Header
        isLoggedIn={loggedIn === LOGGEDIN}
        onPressRightIcon={onPressRightIcon}
      />
     
        <Text style={styles.topContainerTextStyle}>{SECTION_10_HEADING}</Text>
        <Text style={styles.topContainerSubTextStyle}>{SECTION_10_SUB_HEADING}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Section10
