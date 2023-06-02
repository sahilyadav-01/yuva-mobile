import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { PNG } from '../../../../assets';
import Header from '../../../components/Header';
import { COMMA, DEAR, HEADER_TITLE, SUBTEXT, SUBTEXT2, THANKS, WISHES, YOUR_PIN } from '../constants';
import { styles } from './styles';

const DetialsScreen = () => {
  return (
    <>
      <Header title={HEADER_TITLE} isScreen={true} hideMenu={false} showBackButton={true} />
      <View style={styles.messageView}>
        <ScrollView>
          <Image source={PNG.THANK_DESIGN} style={styles.imageStyle} />
          <View style={styles.secondView}>
            <Text style={styles.thankStyle}>
              {DEAR} {'Nishant'} {COMMA}
            </Text>
            <View style={styles.otpView}>
              <Text style={styles.otpDescriptionStyle}>{YOUR_PIN}</Text>
              <Text style={styles.otpStyle}>{'5500-5511-0668'}</Text>
            </View>
            <View style={styles.otpView}>
              <Text style={styles.subOtpDescriptionStyle}>{SUBTEXT}
                <Text style={styles.otpStyle}>{'5546'}</Text>
              </Text>
            </View>
            <Text style={styles.descriptionStyle}> {SUBTEXT2}</Text>
            <Text style={styles.thankStyle}>{THANKS}</Text>
            <Text style={styles.bottomTextStyle}>{WISHES}</Text>
          </View>
        </ScrollView>
      </View>

    </>
  );
};
export default DetialsScreen;