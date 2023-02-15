import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../../components/Header';
import { SECTION_10_HEADING, SECTION_10_SUB_HEADING1, SECTION_10_SUB_HEADING2 } from '../constant';
import { useSection10 } from './hooks/useSection10';
import { styles } from './styles';
import { SVG } from '../../../../assets';
import Timer from '../../../components/Timer';

const Section10 = () => {

  const { onResetEnable } = useSection10();

  return (
    <>
      <View style={styles.topContainer}>
        <Header isRightIcon={true} />
        <View style={styles.imageBackground}><SVG.HRA_END_IMG /></View>
        <Text style={styles.topContainerTextStyle}>{SECTION_10_HEADING}</Text>
        <Text style={styles.topContainerSubTextStyle}>{SECTION_10_SUB_HEADING1}</Text>
        <Text style={styles.topContainerSubTextStyle}>{SECTION_10_SUB_HEADING2}</Text>
        <View style={styles.bottomContainer}>
          <Timer interval={10} resetEnable={onResetEnable}
            HRA={true} />
        </View>
      </View>
    </>
  )
}

export default Section10