import React from 'react';
import {View,Text} from 'react-native';
import {styles as style} from './style';
import { useSelector } from 'react-redux';

const styles = style();

const PriceBreakdown = ({plan,priceBreakup}) => {
  const {cart:{totalCost,amountToBePaid,totalDiscount,processingCharge}} = useSelector(state=>state.cart)
  console.log('BBD',plan,priceBreakup?.amountToBePaid,amountToBePaid)
  const data = [
    {key: 'Price', value: plan ? priceBreakup?.price : totalCost},
    {key: 'Discount', value: plan ? priceBreakup?.totalDiscount :totalDiscount},
    {key: 'Collection Charges', value: processingCharge,description:'Applicable for Diagnostic Tests*'},
    {key: 'Total', value: plan ? priceBreakup?.amountToBePaid :amountToBePaid},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Order Summary</Text>
      {data.map((item)=><View style={styles.rowView}>
        <View style={{justifyContent:'center'}}>
        <Text style={[styles.priceText,{marginTop:2}]}>{item.key}</Text>
        {item?.description ? <Text style={styles.priceText}>{item?.description}</Text> : null}
        </View>
        <Text style={styles.priceText}>{`${item.value}`} /-</Text>
      </View>)}
    </View>
  );
};

export default PriceBreakdown;
