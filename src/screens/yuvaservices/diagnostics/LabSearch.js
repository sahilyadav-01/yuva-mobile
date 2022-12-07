import React from 'react'
import { View,Text } from 'react-native'
import { Searchbar } from 'react-native-paper';




const LabSearch = () => {

const onChangeSearch=()=>{
    
}
 
    return (
        <View className="m-2">
    
       
            <Searchbar
                style={{
                    backgroundColor:"#FAEADB",
                    color:"#52608E",
                    marginTop:10,
                    fontSize:5,
                }}
                placeholder="Search for Lab Services & Health Checkups "
                //onChangeText={onChangeSearch}
                //value={searchQuery}
                theme={{ colors: { text: "black" } }}
                placeholderTextColor="#1D2334"
                //label={SearchLabel}
            />
        </View>
    )
}

export default LabSearch;
