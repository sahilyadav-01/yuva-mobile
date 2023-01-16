import React from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { PLACEHOLDER_TEXT_COLOR} from "../../../styles/colors" 
import { SEARCH } from './constants';
import { styles } from './styles';
const LabSearch = () => {

    return (
        <View style={styles.card}>
            <Searchbar
                style={styles.search}
                placeholder={SEARCH}
                theme={styles.theme}
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            />
        </View>
    )
}

export default LabSearch;
