import React from 'react';
import { View, Text, Image} from 'react-native';
import { TALK_TO_DOCTOR, WITHIN_FEW_MINS } from '../../constant';
import { styles } from './styles';
import {PNG} from '../../../../../assets';

const TalkToDoctorCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.textView}>
          <View style={styles.headerView}>
            <Text style={styles.header}>
              {TALK_TO_DOCTOR}
            </Text>
            </View>
            <View style={styles.descriptionView}>
            <Text style={styles.description}>
              {WITHIN_FEW_MINS}
            </Text>
          </View>
        </View>
        <View style={styles.imageView}>
          <Image source={PNG.AMICO}/>
        </View>
      </View>
    </View>
  );
};

export default TalkToDoctorCard;