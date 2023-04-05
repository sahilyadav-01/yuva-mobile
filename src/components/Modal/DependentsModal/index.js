import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Modal from '../index';
import Dependent from './Dependent';
import {styles} from './style';
import BackCross from '../../GoBackCross';

function DependentsModal(props) {
  const {visible,heading,primaryText:primary,data,checkBoxStatus,onCheckBoxPress, onCrossPress, showAddMembersButton, onAddMembersPress, buttonText} = props;
  const {selectText, dependentContainer, listStyle, itemSeparatorStyle, primaryText, headingContainer, addMemberContainer, addMemberText} =
    styles();
  const listData = [0, ...data, 0];
  const renderDependent = ({item, index}) => (
    <Dependent item={item} index={index} key={index} length={listData.length} />
  );
  return (
    <Modal visible={visible} transparent={true}>
      <View style={headingContainer}>
        <Text style={selectText}>{heading}</Text>
      <BackCross size={20} onPress={onCrossPress}/>
      </View>
      <View style={dependentContainer}>
        <Text style={primaryText}>{primary}</Text>
        <Checkbox onPress={onCheckBoxPress} status={checkBoxStatus ?? 'unchecked'}/>
      </View>
      {data.length > 0 && <FlatList
        data={listData}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderDependent}
        ItemSeparatorComponent={() => <View style={itemSeparatorStyle} />}
        style={listStyle}
        bounces={false}
        nestedScrollEnabled={true}
      />}
      {showAddMembersButton && <TouchableOpacity onPress={onAddMembersPress} style={addMemberContainer}>
          <Text style={addMemberText}>{buttonText}</Text>
        </TouchableOpacity>}
    </Modal>
  );
}

export default DependentsModal;
