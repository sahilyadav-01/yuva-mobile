import React from 'react';
import {View,Text} from 'react-native';
import {styles as style} from './style';

const styles = style();

const PriceBreakdown = props => {
  const data = [
    {key: 'Price', value: '1'},
    {key: 'Discount', value: '11'},
    {key: 'Order Amount', value: '111'},
    {key: 'Collection Charges', value: '0',description:'Applicable for Diagnostic Tests*'},
    {key: 'Total', value: '1111'},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Order Summary</Text>
      {data.map((item)=><View style={styles.rowView}>
        <View style={{justifyContent:'center'}}>
        <Text style={[styles.priceText,{marginTop:2}]}>{item.key}</Text>
        {item?.description ? <Text style={styles.priceText}>{item?.description}</Text> : null}
        </View>
        <Text style={styles.priceText}>{item.value}</Text>
      </View>)}
    </View>
  );
};

export default PriceBreakdown;
