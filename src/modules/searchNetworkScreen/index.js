import React from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
import SelectList from 'react-native-dropdown-select-list';
import { BUTTON_TEXT, DISPLAY_TEXT, HEADING_TEXT, PLACEHOLDER_TEXT1, PLACEHOLDER_TEXT2, PLACEHOLDER_TEXT3, PLACEHOLDER_TEXT4, SUBHEADING_TEXT1, SUBHEADING_TEXT2, SUBHEADING_TEXT3 } from "./constant";
import { DARK_BLUE, DARK_GRAY } from "../../styles/colors";
import { useSearchNetworkScreen } from "./hook/useSearchNetworkScreen";
import { SVG } from "../../../assets";
import { onViewMapPress } from "../../utils/utils";
import EmptyList from "./EmptyList";

const SearchNetworkScreen = () => {
    const { providerData, networkTypeData, planTypeData,setSelectedDocumentType,
        setSelectedPlanType, setSelectedCityNamesType, cityNamesData, filterCheck, searchQuery, onEndReached, onChangeSearch } = useSearchNetworkScreen();
    const renderItem = (item, index) => {
        return (
            <View style={styles.CompleteView}>
                <TouchableOpacity onPress={() => { onViewMapPress(item?.item?.mapUrl) }} style={styles.Top}>
                    <Text style={styles.cardNameStyle} numberOfLines={2}>{item.item.name}</Text>
                    <View style={styles.rowView}>
                        <View>
                        <Text style={styles.cardAddressStyle}>{item.item.address}</Text>
                        <View style={styles.subTextStyle}>
                        <SVG.SEARCH_NETWORK_CALL_ICON />
                        <Text style={styles.textStyle}>{item.item.number}</Text>
                    </View>
                        </View>
                        <SVG.SEARCH_NETWORK_LOCATION_ICON />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    const headerItem = (searchQuery, networkTypeData, planTypeData, cityNamesData) => {
        return (
            <>
                <Text style={styles.subHeadingStyle}>
                    {SUBHEADING_TEXT1}
                    <Text style={styles.subHeading2Style}>{SUBHEADING_TEXT2}</Text>
                    {SUBHEADING_TEXT3}
                </Text>
                <View style={styles.searchConatiner}>
                    <SVG.SEARCH_NETWORK_SEARCH_ICON />
                    <TextInput
                        style={styles.searchTextInputStyle}
                        placeholder={PLACEHOLDER_TEXT1}
                        placeholderTextColor={DARK_GRAY}
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <SelectList
                    setSelected={setSelectedDocumentType}
                    search={false}
                    data={networkTypeData}
                    placeholder={PLACEHOLDER_TEXT2}
                    placeholderTextColor={DARK_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{color:DARK_GRAY}}
                    dropdownTextStyles={styles.selectInput}
                />
                {filterCheck ? (
                    <SelectList
                        setSelected={setSelectedPlanType}
                        search={false}
                        data={planTypeData}
                        placeholder={PLACEHOLDER_TEXT3}
                        placeholderTextColor={DARK_GRAY}
                        boxStyles={styles.textInputStyle}
                        inputStyles={{ color: DARK_GRAY }}
                        dropdownTextStyles={styles.selectInput}
                    />
                ) : null}
                <SelectList
                    setSelected={setSelectedCityNamesType}
                    search={false}
                    data={cityNamesData}
                    placeholder={PLACEHOLDER_TEXT4}
                    placeholderTextColor={DARK_GRAY}
                    boxStyles={styles.textInputStyle}
                    inputStyles={{ color: DARK_GRAY }}
                    dropdownTextStyles={styles.selectInput}
                />
                <Text style={styles.suggestions}>Suggestions</Text>
            </>
        )
    }
    return (
        <>
            <Header isScreen={true} hideMenu={false} showBackButton={true} title={'Search'} />
            <View style={styles.mainContainer}>
                <FlatList
                    ListHeaderComponent={headerItem(searchQuery, networkTypeData, planTypeData, cityNamesData)}
                    style={{ flex: 1 }}
                    renderItem={renderItem}
                    data={( providerData)}
                    keyExtractor={(item, index) => `${index}`}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                />
                {!(providerData.length > 0) && (
                    <EmptyList emptyText={DISPLAY_TEXT} />
                )}
            </View>
        </>
    );
};
export default SearchNetworkScreen;