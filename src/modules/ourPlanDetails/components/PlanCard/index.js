import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {BUY_NOW, RUPEE, YEAR} from './constants';
import {usePlanCard} from './hooks/usePlanCard';
import {PNG} from '../../../../../assets';
const PlanCard = props => {
  const {ourPlanData, bookOurPlan} = usePlanCard(props);

  if (Object.keys(ourPlanData).length > 0) {
    return (
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
        </View>
        <View style={styles.ImageView}>
          <Image
            source={PNG.planDetails}
            style={styles.Image}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }
};

export default PlanCard;
