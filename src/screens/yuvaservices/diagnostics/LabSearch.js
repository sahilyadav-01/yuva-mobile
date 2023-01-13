import React from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper';

const LabSearch = () => {

    return (
        <View className="m-2">
            <Searchbar
                style={{
                    backgroundColor: "#FAEADB",
                    color: "#52608E",
                    marginTop: 1,
                    marginBottom: -55,
                    fontSize: 5,
                }}
                placeholder="Search for Lab Services & Health Checkups "
                theme={{ colors: { text: "black" } }}
                placeholderTextColor="#1D2334"
            />
        </View>
    )
}

export default LabSearch;
