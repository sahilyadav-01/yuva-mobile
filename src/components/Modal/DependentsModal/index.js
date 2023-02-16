import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import { SVG } from '../../../../assets';
import { CYAN_BLUE } from '../../../styles/colors';
import Modal from '../index';
import Dependent from './Dependent';
import {styles} from './style';
import BackCross from '../../GoBackCross'

function DependentsModal(props) {
  const {visible,heading,primaryText:primary,data, endText, onButtonPress} = props;
  const {selectText, dependentContainer, listStyle, addMemberContainer, itemSeparatorStyle, primaryText} =
    styles();
  const listData = [0, ...data, 0];
  console.log(listData);
  const renderDependent = ({item, index}) => (
    <Dependent item={item} index={index} length={listData.length} />
  );
  return (
    <Modal visible={visible} transparent={true}>
      <View style={{marginTop:8,marginHorizontal:6,flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={selectText}>{heading}</Text>
      <BackCross size={20}/>
      </View>
      <View style={dependentContainer}>
        <Text style={primaryText}>{primary}</Text>
        <Checkbox status='unchecked'/>
      </View>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => index}
        renderItem={renderDependent}
        ItemSeparatorComponent={() => <View style={itemSeparatorStyle} />}
        style={listStyle}
      />
      
    </Modal>
  );
}

export default DependentsModal;
