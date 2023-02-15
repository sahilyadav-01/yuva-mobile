import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import HRASectionContainer from '../components/HRASectionContainer';
import Header from '../../../components/Header';
import { HRA_BANNER_TEXT } from "../constant";
import { styles } from './styles';
import { PNG } from '../../../../assets';

const HRAHome = () => {

  return (
    <>
      <Header isRightIcon={true} />
      <View style={styles.mainContainer}>
        <View>
          <ScrollView contentContainerStyle={{ paddingBottom: 300, }}>
            <View style={styles.topContainer}>
              <View style={styles.subTopContainer}>
                <View style={styles.parentTextContainer}>
                  <Text style={styles.textContainerStyle}>
                    {HRA_BANNER_TEXT}
                  </Text>
                </View>
                <View style={styles.imageContainerStyle}>
                  <Image source={PNG.HRA_SECTION_ICONS} style={styles.imageStyle} />
                </View>
              </View>
            </View>
            {/* <View style={styles.bottomContainer}>
              <DownloadButton onPress={onDisplay} />
            </View> */}
            <HRASectionContainer />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default HRAHome;
