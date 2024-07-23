import React from 'react';
import {View} from 'react-native';
import {FooterContainer} from './FooterContainer';
import {CardContainer} from './CardContainer';

const PlanItem = ({item, index}) => {
  return (
    <View>
      <CardContainer item={item} />
      <FooterContainer item={item} />
    </View>
  );
};

export default PlanItem;
