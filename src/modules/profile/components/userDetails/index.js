import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Image, Text, Alert, Pressable, Modal } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {
  DD_MM_YYYY,
  SELECT_GENDER,
  ADDRESS_1,
  CITY,
  PINCODE,
} from '../../constant';
import styles from './style';
import { BLACK, BLUE_GRAY, DARK_BLUE, GREEN } from '../../../../styles/colors';
import { getDateText } from '../../../../utils/utils';
import { useUserDetails } from './hooks/useUserDetails';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cross from 'react-native-vector-icons/Entypo';
const UserDetails = ({
  setSelectedGender,
  gender,
  openPicker,
  data,
  date,
  userDetails,
  edit,
  name,
  addressLine1,
  city,
  pinCode,
  changeName,
  changeAddress,
  changeCity,
  changePincode,
  setSelectedCity,
  cityNames,
}) => {
  const { userImage, textInputStyle, separatorStyle, dropdownBoxStyle, userCoverImage, userPicture, UserIcon, coverIcon,
    modalView, modalTextView, modaltext, GalleryIcon,IconView,galleryTouch ,CrossIcon} = styles({
      disabled: false,
    });
  const mockData = {
    email: userDetails.email,
    phoneNumber: userDetails.number,
    name: userDetails.name,
    organisation: userDetails.companyName,
    address: userDetails.address,
    city: userDetails.city,
    pinCode: userDetails.pinCode,
  };
  const dispatch = useDispatch();
  const { onImage,
    onCamera, profileImageCamera,modalVisible, setModalVisible,
       setCoverPhoto,setUserPhoto } = useUserDetails(dispatch);
  

  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={modalView}>
            < View style={modalTextView}>
              <Text style={modaltext}>Select</Text>
              <View style={IconView}>
                <TouchableOpacity style={galleryTouch} onPress={onImage}>
                  <Icon name="view-gallery" size={36} color={BLACK} style={galleryTouch}/>
                  <Text style={GalleryIcon}>Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCamera}>
                  <Icon name="camera" size={36} color={BLACK} style={galleryTouch}/>
                  <Text style={GalleryIcon}>Camera</Text>
                </TouchableOpacity>
                <Pressable
                onPress={() => setModalVisible(!modalVisible)}  style={CrossIcon}>
             <Cross name="cross" size={20} color={BLACK}/>
            </Pressable>
              </View>
            </View>
          </View>

        </Modal>

        <TouchableOpacity style={userCoverImage}
          onPress={() => {
            setModalVisible(true)
            setCoverPhoto(true)
            setUserPhoto(false)

          }}
        >{profileImageCamera &&
          <Image
            source={{ uri: profileImageCamera }}
            style={userCoverImage}
          />}
          <Icon name="image-plus" size={26} color={GREEN} style={coverIcon} />

        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={userImage}
            onPress={() => {
              setModalVisible(true)
              setCoverPhoto(false)
              setUserPhoto(true)
            }}
          >
            {profileImageCamera &&
              <Image
                source={{ uri: profileImageCamera }}
                style={userPicture}
              />}
            <Icon name="image-plus" size={20} color={GREEN} style={UserIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        value={mockData.email}
        editable={false}
        style={textInputStyle}
      />
      <TextInput
        value={mockData.phoneNumber}
        editable={false}
        style={textInputStyle}
      />
      {!edit ? (
        <TextInput
          value={gender}
          editable={false}
          style={textInputStyle}
          placeholder={SELECT_GENDER}
        />
      ) : (
        <>
          <SelectList
            setSelected={arg => setSelectedGender(arg, data)}
            search={false}
            data={data}
            placeholder={gender ?? SELECT_GENDER}
            boxStyles={dropdownBoxStyle}
            inputStyles={gender ? { color: DARK_BLUE } : undefined}
          />
          <View style={separatorStyle} />
        </>
      )}
      {!edit ? (
        <TextInput
          value={getDateText(new Date(userDetails.dob))}
          editable={false}
          style={textInputStyle}
          placeholder={DD_MM_YYYY}
        />
      ) : (
        <TouchableOpacity onPress={openPicker}>
          <TextInput
            placeholder={DD_MM_YYYY}
            value={getDateText(date)}
            editable={false}
            style={textInputStyle}
          />
        </TouchableOpacity>
      )}
      <TextInput
        onChangeText={changeName}
        value={name}
        style={textInputStyle}
        editable={edit}
      />
      {mockData.organisation && (
        <TextInput
          value={mockData.organisation}
          editable={false}
          style={textInputStyle}
        />
      )}
      <TextInput
        placeholder={ADDRESS_1}
        value={mockData.address ?? addressLine1}
        editable={edit}
        style={textInputStyle}
        onChangeText={changeAddress}
      />
      {cityNames &&
        (!edit ? (
          <TextInput
            value={city}
            editable={false}
            style={textInputStyle}
            placeholder={CITY}
          />
        ) : (
          <>
            <SelectList
              setSelected={arg => {
                setSelectedCity(arg, cityNames);
              }}
              search={false}
              data={cityNames.map(item => {
                return { ...item, value: JSON.parse(item.value).name };
              })}
              placeholder={CITY}
              boxStyles={dropdownBoxStyle}
              inputStyles={cityNames ? { color: DARK_BLUE } : undefined}
            />
            <View style={separatorStyle} />
          </>
        ))}
      <TextInput
        placeholder={PINCODE}
        value={mockData.pinCode ?? pinCode}
        editable={edit}
        style={{ ...textInputStyle, marginBottom: 32 }}
        onChangeText={changePincode}
      />
    </>
  );
};

export default UserDetails;
