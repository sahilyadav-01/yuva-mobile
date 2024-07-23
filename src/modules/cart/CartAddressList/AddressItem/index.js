import React from 'react';
import {Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {styles} from './style';
import {SVG} from '../../../../../assets';
import {CYAN_BLUE, MARINER} from '../../../../styles/colors';

function AddressItem({item, index, checked, setChecked}) {
  return (
    <View style={styles.container}>
      <View style={styles.contactContainer}>
        <SVG.Phone />
        <Text style={styles.numberText}>{item?.contactNumber}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Checkbox.Android
          color={MARINER}
          uncheckedColor={CYAN_BLUE}
          status={checked === index ? 'checked' : 'unchecked'}
          onPress={() => {
            checked !== index ? setChecked(index) : setChecked(null);
          }}
        />
        <View style={styles.addressDetails}>
          <Text style={styles.addressType}>
            {item?.away || item?.saveAs === 'true' ? 'Away' : 'Home'}
          </Text>
          <Text style={styles.addressText}>{item?.address}</Text>
          <Text style={[styles.addressText, {marginTop: 4}]}>
            {item?.cityName}
          </Text>
          <Text style={[styles.addressText, {marginTop: 4}]}>
            {item?.pinCode}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default AddressItem;
