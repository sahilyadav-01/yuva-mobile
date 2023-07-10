import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../../components/Header';
import { HEADER_TITLE } from '../EmrmHome/constants';
import SelectList from 'react-native-dropdown-select-list';
import CalendarIcon from 'react-native-vector-icons/Feather';
import UploadIcon from 'react-native-vector-icons/Feather';
import DropDownIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { CYAN_BLUE, DARK_GRAY, PALE_GRAY } from '../../../styles/colors';
import { DD_MM_YYYY, KEYBOARD_TYPE_VALUE } from './constants';
import { useEmrmCreateRecord } from './hooks/useEmrmCreateRecord';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DocumentPicker from 'react-native-document-picker';
import { getDateText } from '../../../utils/utils';


const EmrmCreateRecord = () => {
    const { dropDownData, setSelectedDocumentType, picker, onConfirmDate, closePicker, openPicker, date, healthCenterName, onChangeTextInput, handleDocumentPick } = useEmrmCreateRecord();
    console.log("picker", date)
    return (
        <>
            <Header title={HEADER_TITLE} isScreen={true} hideMenu={false} showBackButton={true} />
            <View style={styles.mainContainStyle}>
                <Text style={styles.headingTextStyle} >{'Create  Medical Record'}</Text>
                <Text style={styles.inputTextStyle} >{'Type of Medical  Document'}</Text>
                <SelectList
                    setSelected={setSelectedDocumentType}
                    search={false}
                    data={dropDownData}
                    placeholder={'Consultation '}
                    placeholderTextColor={PALE_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: PALE_GRAY }}
                    dropdownTextStyles={{ color: DARK_GRAY }}
                    arrowicon={<DropDownIcon name="arrow-drop-down" style={styles.iconStyle} />}
                />
                <Text style={styles.inputTextStyle} >{'Date of Medical Document'}</Text>
                <TouchableOpacity onPress={openPicker}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder={'Date of Medical Document '}
                            placeholderTextColor={DARK_GRAY}
                            value={getDateText(date)}
                            editable={false}
                            style={{ color: CYAN_BLUE }}
                            onPressOut={openPicker}
                        />
                        {!date && <CalendarIcon name="calendar" style={styles.iconStyle} />}
                    </View>
                </TouchableOpacity>
                <DateTimePickerModal
                    date={new Date()}
                    isVisible={picker}
                    mode={'date'}
                    onCancel={closePicker}
                    onConfirm={onConfirmDate}
                />

                <Text style={styles.inputTextStyle} >{'Name of Health Center'}</Text>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType={KEYBOARD_TYPE_VALUE}
                    placeholder={'Hospital /Lab/ Clinic'}
                    placeholderTextColor={DARK_GRAY}
                    onChangeText={onChangeTextInput}
                    value={healthCenterName}
                />
                <Text style={styles.inputTextStyle} >{'Upload Documents'}</Text>
                <TouchableOpacity onPress={handleDocumentPick}>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType={KEYBOARD_TYPE_VALUE}
                    placeholder={'Upload Documents '}
                    placeholderTextColor={DARK_GRAY}
                    // onChangeText={onChangeTextInput}
                    // value={healthCenterName}
                    editable={false}
                />
                </TouchableOpacity>

                {/* <SelectList
                    // setSelected={setSelectedCity}
                    search={false}
                    // data={cityId}
                    placeholder={'Upload Documents '}
                    placeholderTextColor={PALE_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: PALE_GRAY }}
                    dropdownTextStyles={{ color: DARK_GRAY }}
                    arrowicon={<UploadIcon name="upload" style={styles.iconStyle} />}

                /> */}
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>{'Submit'}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
export default EmrmCreateRecord; 