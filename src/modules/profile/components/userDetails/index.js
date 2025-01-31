import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  Pressable,
  Modal,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {
  DD_MM_YYYY,
  SELECT_GENDER,
  ADDRESS_1,
  CITY,
  PINCODE,
} from '../../constant';
import styles from './style';
import {BLACK, DARK_BLUE, GREEN, DARK_GRAY} from '../../../../styles/colors';
import {getDateText} from '../../../../utils/utils';
import {useUserDetails} from './hooks/useUserDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cross from 'react-native-vector-icons/Entypo';
import {CAMERA, GALLERY, SELECT, VERIFIED, VERIFY} from './constants';
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
  profileGender,
  onPickerPress,
}) => {
  const Picker = edit ? TouchableOpacity : View;
  const {
    userImage,
    textInputStyle,
    separatorStyle,
    dropdownBoxStyle,
    userCoverImage,
    userPicture,
    UserIcon,
    coverIcon,
    modalView,
    modalTextView,
    modaltext,
    GalleryIcon,
    IconView,
    galleryTouch,
    CrossIcon,
    verifyStyle,
    inputStyle,
  } = styles({
    disabled: false,
  });
  const mockData = {
    name: userDetails.name,
    organisation: userDetails.companyName,
    address: userDetails.address,
    city: userDetails.city,
    pinCode: userDetails.pinCode,
  };
  const {
    onImage,
    onCamera,
    modalVisible,
    setModalVisible,
    setCoverPhoto,
    setUserPhoto,
    onVerifyPhone,
    onVerifyEmail,
    email,
    phoneNumber,
    onChangeEmail,
    onChangeNumber,
    emailVerified,
    numberVerified,
    editable,
    getDateOfBirth,
  } = useUserDetails(userDetails, edit);
  return (
    <>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={modalView}>
            <View style={modalTextView}>
              <Text style={modaltext}>{SELECT}</Text>
              <View style={IconView}>
                <TouchableOpacity style={galleryTouch} onPress={onImage}>
                  <Icon
                    name="view-gallery"
                    size={36}
                    color={BLACK}
                    style={galleryTouch}
                  />
                  <Text style={GalleryIcon}>{GALLERY}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCamera}>
                  <Icon
                    name="camera"
                    size={36}
                    color={BLACK}
                    style={galleryTouch}
                  />
                  <Text style={GalleryIcon}>{CAMERA}</Text>
                </TouchableOpacity>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  style={CrossIcon}>
                  <Cross name="cross" size={20} color={BLACK} />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={userCoverImage}
          onPress={() => {
            setModalVisible(true);
            setCoverPhoto(true);
            setUserPhoto(false);
          }}>
          {userDetails?.familyPicture && (
            <Image
              source={{uri: userDetails?.familyPicture}}
              style={userCoverImage}
              resizeMode="cover"
            />
          )}
          <Icon name="image-plus" size={26} color={GREEN} style={coverIcon} />
        </TouchableOpacity>
        {/* //TODO(Harshit Duggal): KYC VERIFICATION MODAL
        // 1. Click to open modal
        // 2. Show one dropdown (Select your document), 2nd input box with validation of aadhar number , pan number & check if dl erification is also there.
        // 3. Upload file.
        // 4. Send for verification. */}
        <View>
          <Text >Kyc Verify</Text>
        </View>
        <View>
          <TouchableOpacity
            style={userImage}
            onPress={() => {
              setModalVisible(true);
              setCoverPhoto(false);
              setUserPhoto(true);
            }}>
            {userDetails?.profilePicture && (
              <Image
                source={{uri: userDetails?.profilePicture}}
                style={userPicture}
                resizeMode="cover"
              />
            )}
            <Icon name="image-plus" size={20} color={GREEN} style={UserIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        value={email}
        editable={editable}
        style={textInputStyle}
        onChangeText={onChangeEmail}
        placeholderTextColor={DARK_GRAY}
        placeholder={'Email'}
      />
      {edit &&
        email?.length > 0 &&
        !(userDetails?.email == email) &&
        !emailVerified && (
          <Text style={verifyStyle} onPress={onVerifyEmail}>
            {VERIFY}
          </Text>
        )}
      {edit && emailVerified && (
        <Text style={[verifyStyle, {color: GREEN}]}>{VERIFIED}</Text>
      )}
      <TextInput
        value={phoneNumber}
        editable={edit}
        style={textInputStyle}
        onChangeText={onChangeNumber}
        placeholderTextColor={DARK_GRAY}
        placeholder={'Mobile Number'}
      />
      {edit &&
        phoneNumber?.length === 10 &&
        !(userDetails?.number == phoneNumber) &&
        !numberVerified && (
          <Text style={verifyStyle} onPress={onVerifyPhone}>
            {VERIFY}
          </Text>
        )}
      {edit && numberVerified && (
        <Text style={[verifyStyle, {color: GREEN}]}>{VERIFIED}</Text>
      )}
      {!edit || (edit && gender !== null && profileGender) ? (
        <TextInput
          value={gender}
          editable={false}
          style={textInputStyle}
          placeholder={SELECT_GENDER}
          placeholderTextColor={DARK_GRAY}
        />
      ) : (
        <SelectList
          setSelected={arg => setSelectedGender(arg, data)}
          search={false}
          data={data}
          placeholder={gender ?? SELECT_GENDER}
          placeholderTextColor={BLACK}
          boxStyles={dropdownBoxStyle}
          inputStyles={inputStyle}
          dropdownTextStyles={inputStyle}
        />
      )}
      {!edit || (edit && userDetails?.dob) ? (
        <Picker onPress={onPickerPress}>
          <TextInput
            value={getDateOfBirth(edit, userDetails?.dob, date)}
            editable={false}
            style={textInputStyle}
            placeholder={DD_MM_YYYY}
            placeholderTextColor={DARK_GRAY}
            onPressOut={onPickerPress}
          />
        </Picker>
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
                return {...item, value: JSON.parse(item.value).name};
              })}
              placeholder={city ?? CITY}
              placeholderTextColor={DARK_GRAY}
              boxStyles={dropdownBoxStyle}
              inputStyles={cityNames ? inputStyle : undefined}
              dropdownTextStyles={inputStyle}
            />
          </>
        ))}
      <TextInput
        placeholder={PINCODE}
        placeholderTextColor={DARK_GRAY}
        value={!edit ? mockData.pinCode ?? pinCode : pinCode}
        editable={edit}
        style={{...textInputStyle, marginBottom: 24}}
        onChangeText={changePincode}
      />
    </>
  );
};

export default UserDetails;
