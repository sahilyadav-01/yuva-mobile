import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../../../../components/Header';
import {CHECKOUT, CONFIRM_DETAILS, OUR_PLAN_ADDRESS} from './constants';
import {styles} from './styles';
import {useOurPlanAddress} from './hooks/useAddress';
import AddressList from '../../../../components/Address';

const OurPlanAddress = () => {
  const {AddressAdded, addressListing} = useOurPlanAddress();

  return (
    <SafeAreaView>
      <Header
        showBackButton={true}
        title={CHECKOUT}
        hideMenu={true}
        showCart={false}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        nestedScrollEnabled={true}>
        <AddressList isNavScreen={OUR_PLAN_ADDRESS} />
        <View>
          {addressListing?.length > 0 && (
            <TouchableOpacity
              onPress={AddressAdded}
              style={styles.touchableButton}>
              <Text style={styles.tobePaid}>{CONFIRM_DETAILS}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OurPlanAddress;
