import React from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header';
import { HEADER_TITLE } from '../EmrmHome/constants';
import { SEARCH, SUB_HEADDING_TEXT } from './constants';
import { styles } from './styles';
import Search from '../../../components/Search';
import { DARK_BLUE, DARK_GRAY } from '../../../styles/colors';
import { PNG } from '../../../../assets';
import SelectList from 'react-native-dropdown-select-list';
import { useEmrmListing } from './hooks/useEmrmListing';
import MedicalReportCard from '../../../components/MedicalReportCard';

const EmrmListing = () => {
    const { cityId, medicalReport, onPressAddButton } = useEmrmListing();
    const renderItem = ({ item, index }) => {
        return (
            <MedicalReportCard
                hospitalName={item.hospitalName}
                documuntType={item.documuntType}
                DocumentDate={item.DocumentDate}
                UploadDate={item.UploadDate}
            />
        );
    };
    return (
        <>
            <Header title={HEADER_TITLE} isScreen={true} hideMenu={false} showBackButton={true} />
            <View style={styles.mainContainer}>
                <View style={styles.search}>
                    <Search
                        placeholder={SEARCH}
                        placeholderTextColor={DARK_GRAY}
                    // onChangeText={onChangeSearch}
                    // value={searchQuery}
                    />
                </View>
                <View style={styles.middleContainer}>
                    <TouchableOpacity onPress={onPressAddButton}><Image source={PNG.EmrmAddIcon} style={styles.imageStyle} resizeMode='cover' /></TouchableOpacity>
                    <Text style={styles.subHeadingTextStyle}>{SUB_HEADDING_TEXT}</Text>
                </View>
                <SelectList
                    // setSelected={setSelectedCity}
                    search={false}
                    data={cityId}
                    placeholder={'ALL'}
                    placeholderTextColor={DARK_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: DARK_BLUE }}
                    dropdownTextStyles={{ color: DARK_GRAY }}
                />
                <ScrollView>
                    <View >
                        <FlatList
                            renderItem={renderItem}
                            data={medicalReport}
                            keyExtractor={(item, index) => `${index}`}
                            showsHorizontalScrollIndicator={false}
                            nestedScrollEnabled={true}
                        />
                    </View>
                </ScrollView>
            </View>
        </>
    );
};
export default EmrmListing;