import {View, Text, Image} from 'react-native';
import React from 'react';
import {PNG} from '../../../../../assets';
import {CONSULTATION, TIP_1, TIP_2, TIP_3} from '../../constant';
import {styles} from './styles';

const Consultation = () => {
  return (
    <View>
      <Text style={styles.title}>{CONSULTATION}</Text>
      <View>
        <View style={styles.textDia}>
          <Image source={PNG.CIRCLE} />
          <Text style={styles.description1}>{TIP_1}</Text>
        </View>
        <Image style={styles.imgL1} source={PNG.LINE} />
        <View style={styles.textDia}>
          <Image source={PNG.CIRCLE} />
          <View style={styles.textView}>
            <Text style={styles.description1}>{TIP_2}</Text>
          </View>
        </View>
        <Image style={styles.imgL1} source={PNG.LINE} />
        <View style={styles.textDia}>
          <Image source={PNG.CIRCLE} />
          <Text style={styles.description1}>{TIP_3}</Text>
        </View>
      </View>
    </View>
  );
};

export default Consultation;
