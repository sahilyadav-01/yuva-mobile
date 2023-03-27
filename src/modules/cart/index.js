import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import CardButton from '../../components/CardButton';
import CartDetails from '../../components/CartDetails';
import CouponCard from '../../components/CouponCard';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import PriceDetails from '../../components/PriceDetails';
import { LIGHT_GREEN } from '../../styles/colors';
import { CART_DETAILS, MY_CART, PRICE_DETAILS, COUPON_APPLIED_SUCCESS, ADD_NEW_MEMBER, ADD_MEMBER, SELECT_MEMBER, SAVE_DETAILS, MYSELF } from './constants';
import { useCart } from './hooks/useCart';
import { styles } from './styles';
import DependentsModal from '../../components/Modal/DependentsModal';
import Dependents from '../profile/components/dependents';
import AddMembersModal from '../../components/Modal/AddMembersModal';

const Cart = props => {
  const { cart, coupon, couponView, onPressCardButton, crossAction, buttonText, onSaveDetailsPress,onAddModalCrossPress, onRemove, userData, onModalCrossPress, onPressCheckBox, checkBoxStatus, addModalVisible, modalVisible, data, onAddMembersPress, relationsData } = useCart();
  const { itemDtoList, totalCost, amountToBePaid, totalDiscount, couponViewCart } = cart || {};
  const { totalCost: appliedTotalCost, amountToBePaid: appliedAmountToBePaid, totalDiscount: appliedTotalDiscount } = coupon || {};
  return (
    <>
      <Header title={MY_CART} showSearch={false} showBackButton={true} />
      <ScrollView style={styles.container}>
        {(couponViewCart || couponView) && itemDtoList.length > 0 && <View style={[styles.descStyle, { backgroundColor: LIGHT_GREEN }]}>
          <View>
            <Text style={styles.appliedStyle}>{COUPON_APPLIED_SUCCESS}</Text>
          </View>
          <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={crossAction}>
              <Icon name="x" style={styles.crossStyle} />
            </TouchableOpacity>
          </View>
        </View>
        }
        <DependentsModal
          visible={modalVisible}
          onCrossPress={onModalCrossPress}
          heading={SELECT_MEMBER}
          primaryText={MYSELF}
          endText={ADD_MEMBER}
          data={[]}
          onCheckBoxPress={onPressCheckBox}
          checkBoxStatus={checkBoxStatus}
          showAddMembersButton
          buttonText={ADD_NEW_MEMBER}
          onAddMembersPress={onAddMembersPress}
        />
        <AddMembersModal
          heading={ADD_NEW_MEMBER}
          onCrossPress={onAddModalCrossPress}
          modalVisible={addModalVisible}
          onSaveDetailsPress={onSaveDetailsPress}
          relationsData={relationsData}
          buttonText={SAVE_DETAILS}
        />
        <View style={styles.bodyContainer}>
          <CartDetails
            data={itemDtoList}
            heading={CART_DETAILS}
            onRemove={onRemove}
          />
          <PriceDetails heading={PRICE_DETAILS} totalCost={totalCost} totalDiscount={totalDiscount} amountToBePaid={amountToBePaid} coupon={{ couponView, appliedAmountToBePaid, appliedTotalCost, appliedTotalDiscount }} />
          {userData !== null && <Dependents hideShadow={true} dependents={[userData]} />}
          <CardButton
            text={buttonText}
            onPress={onPressCardButton}
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />
        </View>
        <CouponCard />
      </ScrollView>
    </>

  );
};

export default Cart;
