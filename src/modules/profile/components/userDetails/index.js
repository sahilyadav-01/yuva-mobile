import React from 'react';
import { View, TouchableOpacity, TextInput, Image, Text, Pressable, Modal } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {
  DD_MM_YYYY,
  SELECT_GENDER,
  ADDRESS_1,
  CITY,
  PINCODE,
} from '../../constant';
import styles from './style';
import { BLACK, DARK_BLUE, GREEN, DARK_GRAY } from '../../../../styles/colors';
import { getDateText } from '../../../../utils/utils';
import { useUserDetails } from './hooks/useUserDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cross from 'react-native-vector-icons/Entypo';
import { CAMERA, GALLERY, SELECT } from './constants';
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
  changePincode,
  setSelectedCity,
  cityNames,
  profileGender
}) => {
  const { userImage, textInputStyle, separatorStyle, dropdownBoxStyle, userCoverImage, userPicture, UserIcon, coverIcon,
    modalView, modalTextView, modaltext, GalleryIcon, IconView, galleryTouch, CrossIcon } = styles({
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
  const { onImage,
    onCamera, modalVisible, setModalVisible,
    setCoverPhoto, setUserPhoto } = useUserDetails();

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
              <Text style={modaltext}>{SELECT}</Text>
              <View style={IconView}>
                <TouchableOpacity style={galleryTouch} onPress={onImage}>
                  <Icon name="view-gallery" size={36} color={BLACK} style={galleryTouch} />
                  <Text style={GalleryIcon}>{GALLERY}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCamera}>
                  <Icon name="camera" size={36} color={BLACK} style={galleryTouch} />
                  <Text style={GalleryIcon}>{CAMERA}</Text>
                </TouchableOpacity>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)} style={CrossIcon}>
                  <Cross name="cross" size={20} color={BLACK} />
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
        >{userDetails?.familyPicture &&
          <Image
            source={{ uri: userDetails?.familyPicture }}
            style={userCoverImage}
            resizeMode="cover"
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
            {userDetails?.profilePicture &&
              <Image
                source={{ uri: userDetails?.profilePicture }}
                style={userPicture}
                resizeMode="cover"
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
      {!edit || (edit && gender !== null && profileGender) ? (
        <TextInput
          value={gender}
          editable={false}
          style={textInputStyle}
          placeholder={SELECT_GENDER}
          placeholderTextColor={DARK_GRAY}
        />
      ) : (
        <>
          <SelectList
            setSelected={arg => setSelectedGender(arg, data)}
            search={false}
            data={data}
            placeholder={gender ?? SELECT_GENDER}
            placeholderTextColor={DARK_GRAY}
            boxStyles={dropdownBoxStyle}
            inputStyles={{color: DARK_BLUE} }
            dropdownTextStyles={{color:DARK_GRAY}}
          />
          <View style={separatorStyle} />
        </>
      )}
      {!edit || (edit && userDetails?.dob) ? (
        <TextInput
          value={getDateText(new Date(userDetails.dob))}
          editable={false}
          style={textInputStyle}
          placeholder={DD_MM_YYYY}
          placeholderTextColor={DARK_GRAY}
        />
      ) : (
        <TouchableOpacity onPress={openPicker}>
          <TextInput
            placeholder={DD_MM_YYYY}
            placeholderTextColor={DARK_GRAY}
            value={getDateText(date)}
            editable={false}
            style={textInputStyle}
            onPressOut={openPicker}
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
        placeholderTextColor={DARK_GRAY}
        value={!edit ? mockData.address ?? addressLine1 : addressLine1}
        editable={edit}
        style={textInputStyle}
        onChangeText={changeAddress}
        multiline={true}
      />
      {cityNames &&
        (!edit ? (
          <TextInput
            value={city}
            editable={false}
            style={textInputStyle}
            placeholder={CITY}
            placeholderTextColor={DARK_GRAY}
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
              placeholder={city ?? CITY}
              placeholderTextColor={DARK_GRAY}
              boxStyles={dropdownBoxStyle}
              inputStyles={cityNames ? {color: DARK_BLUE} : undefined}
              dropdownTextStyles={{color:DARK_GRAY}}
            />
            <View style={separatorStyle} />
          </>
        ))}
      <TextInput
        placeholder={PINCODE}
        placeholderTextColor={DARK_GRAY}
        value={!edit ? mockData.pinCode ?? pinCode : pinCode}
        editable={edit}
        style={{ ...textInputStyle, marginBottom: 32 }}
        onChangeText={changePincode}
      />
    </>
  );
};

export default UserDetails;