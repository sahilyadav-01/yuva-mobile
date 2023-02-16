import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header/index';
import {PNG} from '../../../assets';
import {
  FIND_HEALTH_CHECKUP,
  PACKAGE,
  ADV_BODY_CHECKUP1,
  ADV_BODY_CHECKUP2,
  PARAMETER,
  PARAM_1,
  PARAM_2,
  PARAM_3,
  INFO,
  PRICE,
  PRICE_1,
  PRICE_2,
  PRICE_3,
  BASIC_BODY_CHECKUP1,
  BASIC_BODY_CHECKUP2,
  YUVA,
  ACCURATE_REPORT,
  ACCURATE_REPORT_DESC,
  TRUSTED_LAB_DESC,
  TRUSTED_LAB,
  DISCOUNT_DESC,
  DISCOUNT,
  FREE_SAMPLE_DESC,
  FREE_SAMPLE,
  BOOK_LAB_TEST_DESC,
  BOOK_LAB_TEST,
  LAB_TEST_AT_DOOR_DESC,
  LAB_TEST_AT_DOOR,
} from './constant';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import Parameters from './components/paramCard/index';
import PriceCard from './components/priceCard';
import MoreInformation from './components/moreInformation';
import Description from './components/description';
const HealthCheckUP = ({navigation}) => {
  const {loggedIn} = useSelector(state => state.auth);
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //open drawer
    }
  };
  return (
    <View>
      <Header />
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
