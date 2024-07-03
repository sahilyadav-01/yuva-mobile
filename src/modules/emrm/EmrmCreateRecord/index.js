import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Header from '../../../components/Header';
import {HEADER_TITLE} from '../EmrmHome/constants';
import SelectList from 'react-native-dropdown-select-list';
import CalendarIcon from 'react-native-vector-icons/Feather';
import UploadIcon from 'react-native-vector-icons/Feather';
import DropDownIcon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {CYAN_BLUE, DARK_GRAY, PALE_GRAY} from '../../../styles/colors';
import {
  BUTTON_TEXT,
  HEADING_TEXT,
  INPUT_FIELD_HEADING1,
  INPUT_FIELD_HEADING2,
  INPUT_FIELD_HEADING3,
  INPUT_FIELD_HEADING4,
  INPUT_FIELD_HEADING5,
  PLACEHOLDER1,
  PLACEHOLDER2,
  PLACEHOLDER3,
  PLACEHOLDER4,
  PLACEHOLDER5,
} from './constants';
import {useEmrmCreateRecord} from './hooks/useEmrmCreateRecord';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getDateText} from '../../../utils/utils';

const EmrmCreateRecord = () => {
  const {
    dropDownData,
    setSelectedDocumentType,
    picker,
    onConfirmDate,
    closePicker,
    openPicker,
    date,
    healthCenterName,
    medicalDocumentName,
    onChangeTextInput,
    onChangeDocumentName,
    handleDocumentPick,
    handleSubmit,
    fileName,
  } = useEmrmCreateRecord();
  return (
    <>
      <Header
        title={HEADER_TITLE}
        isScreen={true}
        hideMenu={false}
        showBackButton={true}
      />
      <ScrollView>
        <View style={styles.mainContainStyle}>
          <Text style={styles.headingTextStyle}>{HEADING_TEXT}</Text>
          <Text style={styles.inputTextStyle}>{INPUT_FIELD_HEADING1}</Text>
          <SelectList
            setSelected={setSelectedDocumentType}
            search={false}
            data={dropDownData}
            placeholder={PLACEHOLDER1}
            placeholderTextColor={PALE_GRAY}
            boxStyles={styles.textInputStyle}
            inputStyles={{color: PALE_GRAY}}
            dropdownTextStyles={{color: DARK_GRAY}}
            arrowicon={
              <DropDownIcon name="arrow-drop-down" style={styles.iconStyle} />
            }
          />
          <Text style={styles.inputTextStyle}>{INPUT_FIELD_HEADING2}</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder={PLACEHOLDER2}
            placeholderTextColor={DARK_GRAY}
            onChangeText={onChangeDocumentName}
            value={medicalDocumentName}
          />
          <Text style={styles.inputTextStyle}>{INPUT_FIELD_HEADING3}</Text>
          <TouchableOpacity onPress={openPicker}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={PLACEHOLDER3}
                placeholderTextColor={DARK_GRAY}
                value={getDateText(date)}
                editable={false}
                style={{color: CYAN_BLUE}}
                onPressOut={openPicker}
              />
              {!date && (
                <CalendarIcon name="calendar" style={styles.iconStyle} />
              )}
            </View>
          </TouchableOpacity>
          <DateTimePickerModal
            date={new Date()}
            isVisible={picker}
            mode={'date'}
            onCancel={closePicker}
            onConfirm={onConfirmDate}
            maximumDate={new Date()}
          />
          <Text style={styles.inputTextStyle}>{INPUT_FIELD_HEADING4}</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder={PLACEHOLDER4}
            placeholderTextColor={DARK_GRAY}
            onChangeText={onChangeTextInput}
            value={healthCenterName}
          />
          <Text style={styles.inputTextStyle}>{INPUT_FIELD_HEADING5}</Text>
          <TouchableOpacity onPress={handleDocumentPick}>
            <View style={styles.inputContainer}>
              <TextInput
                style={{color: DARK_GRAY}}
                placeholder={PLACEHOLDER5}
                placeholderTextColor={DARK_GRAY}
                value={fileName}
                editable={false}
              />
              {fileName === '' && (
                <UploadIcon name="upload" style={styles.iconStyle} />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>{BUTTON_TEXT}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default EmrmCreateRecord;
