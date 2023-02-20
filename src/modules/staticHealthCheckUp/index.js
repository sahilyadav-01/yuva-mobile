import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header/index';
import {
  FIND_HEALTH_CHECKUP,
  PACKAGE,
  ADV_BODY_CHECKUP1,
  ADV_BODY_CHECKUP2,
  PARAMETER,
  BASIC_BODY_CHECKUP1,
  BASIC_BODY_CHECKUP2,
  YUVA,
  HEALTH_CHECKUP_PACKAGE,
} from './constant';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import Parameters from './components/paramCard/index';
import PriceCard from './components/priceCard';
import MoreInformation from './components/moreInformation';
import Description from './components/description';
const HealthCheckUP = ({navigation}) => {
  
  return (
    <View>
      <Header showBackButton={true} title={HEALTH_CHECKUP_PACKAGE}/>
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headTitle}>{FIND_HEALTH_CHECKUP}</Text>

        <Text style={styles.title}>{PACKAGE}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{ADV_BODY_CHECKUP1}</Text>
          <Text style={styles.subtitleText}>{ADV_BODY_CHECKUP2}</Text>
        </View>
        <Text style={styles.headTitle}>{PARAMETER}</Text>
        <Parameters />
        <PriceCard />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{BASIC_BODY_CHECKUP1}</Text>
          <Text style={styles.subtitleText}>{BASIC_BODY_CHECKUP2}</Text>
        </View>
        <Text style={styles.headTitle}>{PARAMETER}</Text>
        <Parameters />
        <PriceCard />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{YUVA}</Text>
        </View>
        <Text style={styles.headTitle}>{PARAMETER}</Text>
        <Parameters />
        <MoreInformation />
        <PriceCard />
        <Description />
      </ScrollView>
    </View>
  );
};

export default HealthCheckUP;
