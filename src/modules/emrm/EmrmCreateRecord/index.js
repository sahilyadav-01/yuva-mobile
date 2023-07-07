import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../../components/Header';
import { HEADER_TITLE } from '../EmrmHome/constants';
import SelectList from 'react-native-dropdown-select-list';
import CalendarIcon from 'react-native-vector-icons/Feather';
import UploadIcon from 'react-native-vector-icons/Feather';
import DropDownIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { DARK_GRAY, PALE_GRAY } from '../../../styles/colors';
import { KEYBOARD_TYPE_VALUE } from './constants';

const EmrmCreateRecord = () => {
    return (
        <>
            <Header title={HEADER_TITLE} isScreen={true} hideMenu={false} showBackButton={true} />
            <View style={styles.mainContainStyle}>
                <Text style={styles.headingTextStyle} >{'Create  Medical Record'}</Text>
                <Text style={styles.inputTextStyle} >{'Type of Medical  Document'}</Text>
                <SelectList
                    // setSelected={setSelectedCity}
                    search={false}
                    // data={cityId}
                    placeholder={'Consultation '}
                    placeholderTextColor={PALE_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: PALE_GRAY }}
                    dropdownTextStyles={{ color: DARK_GRAY }}
                    arrowicon={<DropDownIcon name="arrow-drop-down" style={styles.iconStyle} />}
                />
                <Text style={styles.inputTextStyle} >{'Date of Medical Document'}</Text>
                <SelectList
                    // setSelected={setSelectedCity}
                    search={false}
                    // data={cityId}
                    placeholder={'Date of Medical Document '}
                    placeholderTextColor={PALE_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: PALE_GRAY }}
                    dropdownTextStyles={{ color: DARK_GRAY }}
                    arrowicon={<CalendarIcon name="calendar" style={styles.iconStyle} />}

                />
                <Text style={styles.inputTextStyle} >{'Name of Health Center'}</Text>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType={KEYBOARD_TYPE_VALUE}
                    placeholder={'Hospital /Lab/ Clinic'}
                    placeholderTextColor={DARK_GRAY}
                // editable={false}
                />
                <Text style={styles.inputTextStyle} >{'Upload Documents'}</Text>
                <SelectList
                    // setSelected={setSelectedCity}
                    search={false}
                    // data={cityId}
                    placeholder={'Upload Documents '}
                    placeholderTextColor={PALE_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: PALE_GRAY }}
                    dropdownTextStyles={{ color: DARK_GRAY }}
                    arrowicon={<UploadIcon name="upload" style={styles.iconStyle} />}

                />
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>{'Submit'}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
export default EmrmCreateRecord; 