import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import { HEADER_TITLE } from '../EmrmHome/constants';
import { SEARCH, SUB_HEADDING_TEXT } from './constants';
import { styles } from './styles';
import Search from '../../../components/Search';
import { DARK_BLUE, DARK_GRAY } from '../../../styles/colors';
import { PNG } from '../../../../assets';
import SelectList from 'react-native-dropdown-select-list';
import { useEmrmListing } from './hooks/useEmrmListing';

const EmrmListing = () => {
    const { cityId, renderData } = useEmrmListing();
    const renderItem = ({ item, index }) => {
        return (
            <MedicalReportCard
                key={index}
                doctorId={item.id}
                name={item.name}
                specialization={item.speciality}
                address={item.address}
                rating={item.rating}
                exp={item.experience}
                img={item.img}
                qual={item.qual == undefined ? 'MBBS' : item.qual}
                plan={plan}
                userVersion={userVersion}
                uuid={uuid}
                version={version}
                hospital={item.hospital}
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
                    <Image source={PNG.EmrmAddIcon} style={styles.imageStyle} resizeMode='cover' />
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
                {/* <ScrollView>
                    <View>
                        <FlatList
                            renderItem={renderData}
                            data={data}
                            keyExtractor={(item, index) => `${index}`}
                            showsHorizontalScrollIndicator={false}
                            nestedScrollEnabled={true}
                        />
                    </View>
                </ScrollView> */}
            </View>
        </>
    );
};
export default EmrmListing;