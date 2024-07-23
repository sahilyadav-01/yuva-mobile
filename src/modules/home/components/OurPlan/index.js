import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {OUR_PLANS, VIEW_ALL} from './constants';
import {useOurPlan} from './hooks/useOurPlan';
import PlanDescriptor from '../../../../components/PlanDescriptor';
import {fonts} from '../../../../styles/fonts';
import {
  BLACK,
  CYAN_BLUE,
  GREEN,
  MARINER,
  WHITE,
} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

const OurPlan = () => {
  const {handlePress, homePlans, onDetails, onViewAll} = useOurPlan();
  return (
    <View style={styles.container}>
      <View style={styles.OurPlansHeaderStyle}>
        <Text style={styles.heading}>{OUR_PLANS} </Text>
        <Text onPress={onViewAll} style={styles.viewAll}>
          {VIEW_ALL}
        </Text>
      </View>
      <PlanDescriptor />
      {homePlans.data.length > 0 && (
        <View style={styles.planContainer}>
          {homePlans.data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handlePress(index);
                  onDetails();
                }}
                style={{
                  elevation: index === 1 ? 15 : 0,
                  shadowOffset: index === 1 ? {width: 1, height: 1} : undefined,
                  shadowOpacity: index === 1 ? 0.3 : undefined,
                  zIndex: index === 1 ? 75 : 0,
                  paddingHorizontal: 8,
                  paddingVertical: 12,
                  backgroundColor: index === 1 ? WHITE : '#EEF5FF',
                  borderRadius: 12,
                  marginTop: 24,
                  width: '33.33%',
                }}>
                <View style={{height: 50}}>
                  <Text
                    numberOfLines={3}
                    style={{
                      fontFamily: fonts.family.monsterrant500,
                      fontSize: fonts.size.fontSize12,
                      color: BLACK,
                    }}>
                    {item?.name}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: fonts.family.montserrat400,
                    fontSize: fonts.size.fontSize6,
                    color: CYAN_BLUE,
                    marginVertical: 4,
                  }}>
                  Check Health Benefits
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.family.montserrat400,
                    fontSize: fonts.size.fontSize8,
                    color: BLACK,
                  }}>
                  ₹ {item?.price}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    handlePress(index);
                    onDetails();
                  }}
                  style={{
                    width: '38.5%',
                    marginVertical: 8,
                    backgroundColor: MARINER,
                    alignItems: CENTER,
                    justifyContent: CENTER,
                    borderRadius: 4,
                    paddingVertical: 4,
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.family.montserrat400,
                      fontSize: fonts.size.fontSize6,
                      color: WHITE,
                    }}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginTop: 8,
                    marginBottom: 4,
                    fontFamily: fonts.family.monsterrant500,
                    fontSize: fonts.size.fontSize6,
                    color: BLACK,
                  }}>
                  Key Features
                </Text>
                {item?.planServiceNameList.map(i => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 4,
                        alignItems: 'center',
                      }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          maxWidth: '55%',
                          fontFamily: fonts.family.monsterrant500,
                          fontSize: fonts.size.fontSize4,
                          color: BLACK,
                        }}>
                        {i.serviceName}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={{
                          maxWidth: '35%',
                          fontFamily: fonts.family.monsterrant500,
                          fontSize: fonts.size.fontSize4,
                          color: GREEN,
                        }}>
                        {i.shortDescription}
                      </Text>
                    </View>
                  );
                })}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default OurPlan;
