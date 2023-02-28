import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ADD_MEMBERS, EDIT_PROFILE, SAVE_DETAILS} from '../../constant';
import styles from './style';
import {WHITE} from '../../../../styles/colors';
import {SVG} from '../../../../../assets';

const ButtonContainer = ({edit, addMemberToList, addMembers, editDetails, updateUserData, profileLocked}) => {
  const {saveButtonText, addIconStyle} =
    styles({disabled: false});
  return edit ? (
    <>
      <TouchableOpacity disabled={profileLocked} onPress={updateUserData} style={styles({disabled: profileLocked}).saveDetailsButton}>
        <Text style={saveButtonText}>{SAVE_DETAILS}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={addMemberToList}
        disabled={addMembers || profileLocked}
        style={styles({disabled: addMembers || profileLocked}).addMembersButton}>
        <SVG.PlusIcon />
        <View style={{width: 12}} />
        <Text style={saveButtonText}>{ADD_MEMBERS}</Text>
      </TouchableOpacity>
    </>
  ) : (
    <TouchableOpacity disabled={profileLocked} onPress={editDetails} style={styles({disabled: profileLocked}).addMembersButton}>
      <SVG.Edit style={addIconStyle} color={WHITE} />
      <Text style={saveButtonText}>{EDIT_PROFILE}</Text>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
