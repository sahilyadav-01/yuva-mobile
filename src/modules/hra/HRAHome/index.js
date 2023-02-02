import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import HRASectionContainer from '../components/HRASectionContainer';
import Header from '../../../components/Header';
import DownloadButton from '../components/DownloadButton';
import { LOGGEDIN, HRA_BANNER_TEXT } from "../constant";
import { styles } from './styles';
import { useHraHome } from './hooks/useHraHome';
import { PNG } from '../../../../assets';

const HRAHome = () => {
  const { loggedIn, onPressRightIcon, onDisplay } = useHraHome();

  return (
    <>
      <Header
        isLoggedIn={loggedIn === LOGGEDIN}
        onPressRightIcon={onPressRightIcon}
      />
      <View style={styles.mainContainer}>
        <View>
          <ScrollView contentContainerStyle={{ paddingBottom: 400, }}>
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
            <View style={styles.bottomContainer}>
              <DownloadButton onPress={onDisplay} />
            </View>
            <HRASectionContainer />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default HRAHome;
