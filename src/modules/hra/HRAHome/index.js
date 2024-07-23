import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import HRASectionContainer from '../components/HRASectionContainer';
import Header from '../../../components/Header';
import {HEALTH_RISK_ASSESSMENT, HRA_BANNER_TEXT} from '../constant';
import {styles} from './styles';
import {PNG, SVG} from '../../../../assets';
import {useHraHome} from './hooks/useHraHome';
import Loader from '../../../components/Loader';

const HRAHome = () => {
  const {continueHRA, goToSection1, renderData} = useHraHome();
  if (!renderData) {
    return <Loader extraStyles={styles.loaderContainer} />;
  }
  return (
    <>
      <Header title={HEALTH_RISK_ASSESSMENT} showBackButton={true} />
      <View style={styles.mainContainer}>
        <View>
          <ScrollView contentContainerStyle={{paddingBottom: 300}}>
            <View style={styles.topContainer}>
              <View style={styles.subTopContainer}>
                <View style={styles.parentTextContainer}>
                  <Text style={styles.textContainerStyle}>
                    {HRA_BANNER_TEXT}
                  </Text>
                </View>
                <View style={styles.imageContainerStyle}>
                  <Image
                    source={PNG.HRA_SECTION_ICONS}
                    style={styles.imageStyle}
                  />
                </View>
              </View>
            </View>
            {continueHRA && (
              <TouchableOpacity
                onPress={goToSection1}
                style={styles.continueButtonContainer}>
                <SVG.Run />
                <Text style={styles.continueText}>Continue</Text>
              </TouchableOpacity>
            )}
            <HRASectionContainer />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default HRAHome;
