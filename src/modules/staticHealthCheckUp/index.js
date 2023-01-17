import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import {
  HEALTH_CHECKUP,
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
const HealthCheckUP = () => {
  return (
    <View>
      <MainHeader />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headTitle}>{HEALTH_CHECKUP}</Text>
        <Text style={styles.title}>{PACKAGE}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{ADV_BODY_CHECKUP1}</Text>
          <Text style={styles.subtitleText}>{ADV_BODY_CHECKUP2}</Text>
        </View>
        <Text style={styles.headTitle}>{PARAMETER}</Text>
        <View>
          <Text style={styles.paramText}>{PARAM_1}</Text>
          <Text style={styles.paramText}>{PARAM_2}</Text>
          <Text style={styles.paramText}>{PARAM_3}</Text>
        </View>
        <View style={styles.moreContainer}>
          <View style={styles.moreInfoContainer}>
            <Text style={styles.moreInfoText}>{INFO}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.marketPrice}>
            <Text style={styles.mPriceText}>{PRICE}</Text>
            <Text style={styles.price}>{PRICE_2}</Text>
          </View>
          <View style={styles.offerPrice}>
            <Text style={styles.oPriceText}>{PRICE_1}</Text>
            <Text style={styles.price}>{PRICE_3}</Text>
          </View>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{BASIC_BODY_CHECKUP1}</Text>
          <Text style={styles.subtitleText}>{BASIC_BODY_CHECKUP2}</Text>
        </View>

        <Text style={styles.headTitle}>{PARAMETER}</Text>
        <View>
          <Text style={styles.paramText}>{PARAM_1}</Text>
          <Text style={styles.paramText}>{PARAM_2}</Text>
          <Text style={styles.paramText}>{PARAM_3}</Text>
        </View>
        <View style={styles.moreContainer}>
          <View style={styles.moreInfoContainer}>
            <Text style={styles.moreInfoText}>{INFO}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.marketPrice}>
            <Text style={styles.mPriceText}>{PRICE}</Text>
            <Text style={styles.price}>{PRICE_2}</Text>
          </View>
          <View style={styles.offerPrice}>
            <Text style={styles.oPriceText}>{PRICE_1}</Text>
            <Text style={styles.price}>{PRICE_3}</Text>
          </View>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{YUVA}</Text>
        </View>
        <Text style={styles.headTitle}>{PARAMETER}</Text>
        <View>
          <Text style={styles.paramText}>{PARAM_1}</Text>
          <Text style={styles.paramText}>{PARAM_2}</Text>
          <Text style={styles.paramText}>{PARAM_3}</Text>
        </View>
        <View style={styles.moreContainer}>
          <View style={styles.moreInfoContainer}>
            <Text style={styles.moreInfoText}>{INFO}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.marketPrice}>
            <Text style={styles.mPriceText}>{PRICE}</Text>
            <Text style={styles.price}>{PRICE_2}</Text>
          </View>
          <View style={styles.offerPrice}>
            <Text style={styles.oPriceText}>{PRICE_1}</Text>
            <Text style={styles.price}>{PRICE_3}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.subtitle}>{ACCURATE_REPORT}</Text>
            <Text style={styles.description}>{ACCURATE_REPORT_DESC}</Text>
          </View>

          <Text style={styles.subtitle}>{TRUSTED_LAB}</Text>
          <Text style={styles.description}>{TRUSTED_LAB_DESC}</Text>
          <Text style={styles.subtitle}>{DISCOUNT}</Text>
          <Text style={styles.description}>{DISCOUNT_DESC}</Text>
          <Text style={styles.subtitle}>{FREE_SAMPLE}</Text>
          <Text style={styles.description}>{FREE_SAMPLE_DESC}</Text>
          <Text style={styles.subtitle}>{BOOK_LAB_TEST}</Text>
          <Text style={styles.description}>{BOOK_LAB_TEST_DESC}</Text>
          <Text style={styles.subtitle}>{LAB_TEST_AT_DOOR}</Text>
          <Text style={styles.description}>{LAB_TEST_AT_DOOR_DESC}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HealthCheckUP;
