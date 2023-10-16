import React from "react";
import { SafeAreaView } from "react-native";
import SearchNetworkScreen from "../../../modules/searchNetworkScreen";
import { styles } from "../../styles";

const SearchNetworkHomeScreen = () => {
    return (
        <SafeAreaView style={styles.homeScreenContainer}>
            <SearchNetworkScreen />
        </SafeAreaView>
    )
}

export default SearchNetworkHomeScreen;