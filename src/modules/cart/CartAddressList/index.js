import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import AddressItem from './AddressItem';
import Header from '../../../components/Header';
import {styles} from './styles';
import {SVG} from '../../../../assets';
import {useCartAddressList} from './hook/useCartAddressList';
import {useOurAddress} from '../../../components/hooks/useAddress';

const ListHeader = ({totalAddresses,onAddAddress}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>Select Address ({totalAddresses})</Text>
      <TouchableOpacity onPress={onAddAddress} style={styles.addAddressContainer}>
        <SVG.AddAddress />
        <Text style={styles.addAddressText}>Add New</Text>
      </TouchableOpacity>
    </View>
  );
};

const ItemSeparator = () => <View style={{height: 12}} />;

function CartAddressList(props) {
  const {ConfirmAddress,onAddAddress} = useCartAddressList();
  const {
    userAddress,
    checked,
    setChecked,
    AddNewAddress,
    userAttribute,
    userAddressListing,
  } = useOurAddress('CheckoutAddressList');
  
  return (
    <View style={styles.screenContainer}>
      <Header
        title={'Address'}
        showSearch={false}
        showBackButton={true}
        hideMenu={true}
        showCart={true}
      />
      <View style={styles.container}>
        <ListHeader totalAddresses={userAddressListing?.length} onAddAddress={onAddAddress} />
        <FlatList
          ItemSeparatorComponent={ItemSeparator}
          style={{flex: 1}}
          data={userAddressListing}
          renderItem={({item, index}) => (
            <AddressItem
              item={item}
              index={index}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        />
        <TouchableOpacity
          onPress={ConfirmAddress}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartAddressList;
