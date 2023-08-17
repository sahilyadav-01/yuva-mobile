import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {useOurPlanDetails} from './hooks/useOurPlanDetails';
import {PNG} from '../../../assets';
import {BUY_NOW, RUPEE, YEAR} from './constants';

const OurPlanDetails = props => {
  const {planDetails, bookOurPlan, ourPlanData} = useOurPlanDetails(props);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        nestedScrollEnabled={true}>
        <View style={styles.CardView}>
          <View style={styles.ViewWidth}>
            <Text style={styles.nameText}>{ourPlanData?.name}</Text>
            <View style={styles.line} />
            <Text style={styles.AmountText}>
              {RUPEE}
              {ourPlanData?.yearlyFinalCost}
              {'/'}
              <Text style={styles.Year}>{YEAR}</Text>
            </Text>
            <View style={styles.BuyNow}>
              <TouchableOpacity onPress={bookOurPlan}>
                <Text style={styles.BuyNowText}>{BUY_NOW}</Text>
              </TouchableOpacity>
            </View>
          </View >
          <View style={styles.ImageView}>
            <Image source={PNG.planDetails} style={styles.Image}  resizeMode='contain' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OurPlanDetails;
