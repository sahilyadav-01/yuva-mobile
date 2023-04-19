import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import CardButton from '../../components/CardButton';
import CartDetails from '../../components/CartDetails';
import CouponCard from '../../components/CouponCard';
import Header from '../../components/Header';
import PriceDetails from '../../components/PriceDetails';
import { CART_DETAILS, MY_CART, PRICE_DETAILS, ADD_NEW_MEMBER, ADD_MEMBER, SELECT_MEMBER, SAVE_DETAILS, MYSELF, EMPTY_CART } from './constants';
import { useCart } from './hooks/useCart';
import { styles } from './styles';
import DependentsModal from '../../components/Modal/DependentsModal';
import Dependents from '../profile/components/dependents';
import AddMembersModal from '../../components/Modal/AddMembersModal';
import { getWindowDimensions } from '../../utils/utils';

const Cart = props => {
  const { cart, coupon, couponView, onPressCardButton, buttonText, onSaveDetailsPress,onAddModalCrossPress, onRemove, userData, onModalCrossPress, onPressCheckBox, checkBoxStatus, addModalVisible, modalVisible, onAddMembersPress, relationsData, data } = useCart();
  const { itemDtoList, totalCost, amountToBePaid, totalDiscount } = cart || {};
  const { totalCost: appliedTotalCost, amountToBePaid: appliedAmountToBePaid, totalDiscount: appliedTotalDiscount, couponDiscount } = coupon || {};
  return (
    <>
      <Header title={MY_CART} showSearch={false} showBackButton={true} />
      <ScrollView style={styles.container}>
        <DependentsModal
          visible={modalVisible}
          onCrossPress={onModalCrossPress}
          heading={SELECT_MEMBER}
          primaryText={MYSELF}
          endText={ADD_MEMBER}
          data={data}
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
        {itemDtoList.length === 0 && <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>{EMPTY_CART}</Text>
          </View>}
        {itemDtoList.length > 0 && <View style={styles.bodyContainer}>
          <CartDetails
            data={itemDtoList}
            heading={CART_DETAILS}
            onRemove={onRemove}
          />
          <PriceDetails heading={PRICE_DETAILS} totalCost={totalCost} totalDiscount={totalDiscount} amountToBePaid={amountToBePaid} coupon={{ couponView, appliedAmountToBePaid, appliedTotalCost, appliedTotalDiscount, couponDiscount }} />
          {userData !== null && <Dependents hideShadow={true} dependents={[userData]} />}
          <CardButton
            text={buttonText}
            onPress={onPressCardButton}
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />
        </View>}
        {itemDtoList.length > 0 && <CouponCard />}
      </ScrollView>
    </>

  );
};

export default Cart;
