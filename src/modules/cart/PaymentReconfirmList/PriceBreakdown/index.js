import React from 'react';
import {View, Text} from 'react-native';
import {styles as style} from './style';
import {useSelector} from 'react-redux';

const styles = style();

const PriceBreakdown = ({plan, priceBreakup}) => {
  const {
    cart: {totalCost, amountToBePaid, totalDiscount, processingCharge},
  } = useSelector(state => state.cart);
  let data = [
    {key: 'Price', value: plan ? priceBreakup?.price : totalCost, id: 0},
    {
      key: 'Discount',
      value: plan ? priceBreakup?.totalDiscount : totalDiscount,
      id: 1,
    },
    {
      key: 'Collection Charges',
      value: processingCharge,
      description: 'Applicable for Diagnostic Tests*',
      id: 2,
    },
    {
      key: 'Total',
      value: plan ? priceBreakup?.amountToBePaid : amountToBePaid,
      id: 3,
    },
  ];
  data = plan ? data.filter(item => item.id !== 2) : data;
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Order Summary</Text>
      {data.map(item => (
        <View style={styles.rowView}>
          <View style={{justifyContent: 'center'}}>
            <Text style={[styles.priceText, {marginTop: 2}]}>{item.key}</Text>
            {item?.description ? (
              <Text style={styles.priceText}>{item?.description}</Text>
            ) : null}
          </View>
          <Text style={styles.priceText}>{`${item.value}`} /-</Text>
        </View>
      ))}
    </View>
  );
};

export default PriceBreakdown;
