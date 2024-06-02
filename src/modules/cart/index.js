import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import CartDetails from '../../components/CartDetails';
import Header from '../../components/Header';
import {
  CART_DETAILS,
  MY_CART,
  ADD_NEW_MEMBER,
  ADD_MEMBER,
  SELECT_MEMBER,
  SAVE_DETAILS,
  MYSELF,
  EMPTY_CART,
  ADD_RELATIVE,
  RELATIONSHIP,
} from './constants';
import {useCart} from './hooks/useCart';
import {styles} from './styles';
import DependentsModal from '../../components/Modal/DependentsModal';
import AddMembersModal from '../../components/Modal/AddMembersModal';

const Cart = props => {
  const {
    cart,
    onPressCardButton,
    buttonText,
    onSaveDetailsPress,
    onAddModalCrossPress,
    onRemove,
    onModalCrossPress,
    onPressCheckBox,
    checkBoxStatus,
    addModalVisible,
    modalVisible,
    onAddMembersPress,
    relationsData,
    data,
    relationsModalVisible,
    onRelationModalCrossPress,
    onAddRelativePress,
    onSaveRelationsPress,
    relativesData,
    loading,
  } = useCart();
  const {itemDtoList} = cart || {};
  return (
    <View style={styles.screenContainer}>
      <Header title={MY_CART} showSearch={false} showBackButton={true} hideMenu={true} showCart={true}/>
      <View style={styles.container}>
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
          showRelatives={true}
          relativesText={ADD_RELATIVE}
          onAddRelative={onAddRelativePress}
        />
        <AddMembersModal
          heading={ADD_NEW_MEMBER}
          onCrossPress={onAddModalCrossPress}
          modalVisible={addModalVisible}
          onSaveDetailsPress={onSaveDetailsPress}
          relationsData={relationsData}
          buttonText={SAVE_DETAILS}
        />
         <AddMembersModal
          heading={ADD_RELATIVE}
          onCrossPress={onRelationModalCrossPress}
          modalVisible={relationsModalVisible}
          onSaveDetailsPress={onSaveRelationsPress}
          relationsData={relativesData}
          buttonText={SAVE_DETAILS}
          headingText={RELATIONSHIP}
        />
        {itemDtoList.length === 0 && !loading && <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>{EMPTY_CART}</Text>
          </View>}
        {itemDtoList.length > 0 &&  !loading && <View style={styles.bodyContainer}>
          <CartDetails
            data={itemDtoList}
            heading={CART_DETAILS}
            onRemove={onRemove}
          />
        </View>}
        {itemDtoList.length > 0 &&<TouchableOpacity onPress={onPressCardButton} style={styles.buttonContainer}>
          <Text style={styles.textStyle}>{buttonText}</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

export default Cart;
