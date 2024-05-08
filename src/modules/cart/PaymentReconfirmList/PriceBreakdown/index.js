import React from 'react';
import {View,Text} from 'react-native';
import {styles as style} from './style';
import { useSelector } from 'react-redux';

const styles = style();

const PriceBreakdown = () => {
  const {cart:{totalCost,amountToBePaid,totalDiscount,processingCharge}} = useSelector(state=>state.cart)
  const data = [
    {key: 'Price', value: totalCost},
    {key: 'Discount', value: totalDiscount},
    {key: 'Collection Charges', value: processingCharge,description:'Applicable for Diagnostic Tests*'},
    {key: 'Total', value: amountToBePaid},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Order Summary</Text>
      {data.filter((item)=>item?.value > 0).map((item)=><View style={styles.rowView}>
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
