import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Modal from '../index';
import BackCross from '../../GoBackCross';
import {styles} from './style';
import MemberDetails from './MemberDetails';
import {useAddMemberModal} from './hooks/useAddMemberModal';

const AddMembersModal = props => {
  const {
    heading,
    onCrossPress,
    modalVisible,
    onSaveDetailsPress,
    relationsData,
    buttonText,
    headingText,
  } = props;
  const {data, onTextChange, getTextInputValue, onItemSelect, onSaveDetails} =
    useAddMemberModal(
      relationsData,
      onSaveDetailsPress,
      headingText,
      modalVisible,
    );
  const {
    headingContainer,
    selectText,
    listStyle,
    itemSeparatorStyle,
    buttonContainer,
    buttonTextStyle,
  } = styles();
  const RenderItem = ({item, index}) => {
    const value = getTextInputValue(item.heading)?.value;
    const type = getTextInputValue(item.heading)?.type;
    const keyboardType =
      getTextInputValue(item.heading)?.keyboardType ?? 'default';
    const listItem = {...item, value, type, keyboardType};
    return (
      <MemberDetails
        key={index}
        item={listItem}
        onChangeText={onTextChange}
        relationsData={relationsData}
        onItemSelect={onItemSelect}
      />
    );
  };
  return (
    <Modal visible={modalVisible} transparent={true}>
      <View style={headingContainer}>
        <Text style={selectText}>{heading}</Text>
        <BackCross size={20} onPress={onCrossPress} />
      </View>
      <FlatList
        style={listStyle}
        data={data}
        keyExtractor={(item, index) => `${index}`}
        bounces={false}
        ItemSeparatorComponent={() => <View style={itemSeparatorStyle} />}
        renderItem={RenderItem}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
      />
      <TouchableOpacity onPress={onSaveDetails} style={buttonContainer}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddMembersModal;
