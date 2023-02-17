import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  ACCURATE_REPORT,
  ACCURATE_REPORT_DESC,
  BOOK_LAB_TEST,
  BOOK_LAB_TEST_DESC,
  DISCOUNT,
  DISCOUNT_DESC,
  FREE_SAMPLE,
  FREE_SAMPLE_DESC,
  LAB_TEST_AT_DOOR,
  LAB_TEST_AT_DOOR_DESC,
  TRUSTED_LAB,
  TRUSTED_LAB_DESC,
} from '../../constant';
import {SVG} from '../../../../../assets';

const Description = () => {
  return (
    <View>
      <SVG.AccurateReport style={styles.ImageStyle} />
      <Text style={styles.subtitle}>{ACCURATE_REPORT}</Text>
      <Text style={styles.description}>{ACCURATE_REPORT_DESC}</Text>
      <SVG.TrustedLab style={styles.ImageStyle} />
      <Text style={styles.subtitle}>{TRUSTED_LAB}</Text>
      <Text style={styles.description}>{TRUSTED_LAB_DESC}</Text>
      <SVG.Discount style={styles.ImageStyle} />
      <Text style={styles.subtitle}>{DISCOUNT}</Text>
      <Text style={styles.description}>{DISCOUNT_DESC}</Text>
      <SVG.FreeSample style={styles.ImageStyle} />
      <Text style={styles.subtitle}>{FREE_SAMPLE}</Text>
      <Text style={styles.description}>{FREE_SAMPLE_DESC}</Text>
      <Text style={styles.subtitle}>{BOOK_LAB_TEST}</Text>
      <Text style={styles.description}>{BOOK_LAB_TEST_DESC}</Text>
      <Text style={styles.subtitle}>{LAB_TEST_AT_DOOR}</Text>
      <Text style={styles.description}>{LAB_TEST_AT_DOOR_DESC}</Text>
    </View>
  );
};

export default Description;
