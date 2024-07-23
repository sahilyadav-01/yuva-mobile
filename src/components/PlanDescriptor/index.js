import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles as style} from './style';
import {PNG, SVG} from '../../../assets';

function PlanDescriptor() {
  const items = [
    {icon: 'PlanOPD', name: 'OPD Consultation'},
    {icon: 'PlanHRA', name: 'Health Risk Assessment'},
    {icon: 'PlanOnlineConsultation', name: 'Online Consultation'},
    {icon: 'PlanPharmacy', name: 'Pharmacy'},
    {icon: 'PlanCheckup', name: 'Full Body Health Checkup'},
    {icon: 'PlanAmbulance', name: 'Ambulance'},
  ];
  const styles = style();
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.planHeading}>Best Plan for Your Family</Text>
      <View style={styles.rowContainer}>
        <Image
          source={PNG.Plans}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <View>
          {items.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: index < items.length - 1 ? 4 : 0,
                }}>
                {SVG[item.icon]()}
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default PlanDescriptor;
