import React from 'react'
import { SafeAreaView} from 'react-native'
import { styles } from '../../styles';
import AddNewAddress from '../../../modules/diagnostic/AddNewAddress';
const AddAddressScreen = () => {
    return (
        <SafeAreaView style={styles.margin}>
            <AddNewAddress/>
        </SafeAreaView>
    )
}

export default AddAddressScreen;
