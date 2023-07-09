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
import EmptyList from './EmptyList';

const EmrmListing = () => {
    const { dropDownData, setSelectedDocumentType, onPressAddButton, medicalReportData } = useEmrmListing();
    const renderItem = ({ item, index }) => {
        if (!item) {
            return null;
        }
        return (
            <MedicalReportCard
                reportId={item.id}
                hospitalName={item.healthCenter}
                documuntType={item.documentType}
                DocumentDate={item.documentDate}
                UploadDate={item.uploadedDate}
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
                    setSelected={setSelectedDocumentType}
                    search={false}
                    data={dropDownData}
                    placeholder={'ALL'}
                    placeholderTextColor={DARK_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: DARK_BLUE }}
                    dropdownTextStyles={{ color: DARK_GRAY }}
                />
                {medicalReportData.length === 0 ? (
                    <EmptyList emptyText={'No Reports'} />
                ) : (
                    <ScrollView>
                        <View>
                            <FlatList
                                renderItem={renderItem}
                                data={medicalReportData}
                                keyExtractor={(item, index) => `${index}`}
                                showsHorizontalScrollIndicator={false}
                                nestedScrollEnabled={true}
                            />
                        </View>
                    </ScrollView>
                )}
            </View>
        </>
    );
};
export default EmrmListing;