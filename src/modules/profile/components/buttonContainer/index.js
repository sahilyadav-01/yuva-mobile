import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ADD_MEMBERS, EDIT_PROFILE, SAVE_DETAILS} from '../../constant';
import styles from './style';
import {WHITE} from '../../../../styles/colors';
import {SVG} from '../../../../../assets';

const ButtonContainer = ({
  edit,
  addMemberToList,
  addMembers,
  editDetails,
  updateUserData,
}) => {
  const {saveButtonText, addIconStyle} = styles({disabled: false});
  return edit ? (
    <>
      <TouchableOpacity
        onPress={updateUserData}
        style={styles({disabled: false}).saveDetailsButton}>
        <Text style={saveButtonText}>{SAVE_DETAILS}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={addMemberToList}
        disabled={addMembers}
        style={styles({disabled: addMembers}).addMembersButton}>
        <SVG.PlusIcon />
        <View style={{width: 12}} />
        <Text style={saveButtonText}>{ADD_MEMBERS}</Text>
      </TouchableOpacity>
    </>
  ) : (
    <TouchableOpacity
      onPress={editDetails}
      style={styles({disabled: false}).addMembersButton}>
      <SVG.Edit style={addIconStyle} color={WHITE} />
      <Text style={saveButtonText}>{EDIT_PROFILE}</Text>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
