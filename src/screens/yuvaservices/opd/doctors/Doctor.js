import React from 'react'
import { SafeAreaView} from 'react-native'
import { styles } from "../../../styles"
import DoctorScreen from '../../../../modules/doctor'



const Doctor = () => {

    return (
        <SafeAreaView  style={styles.container} >
            <DoctorScreen />
        </SafeAreaView>
    )
}

export default Doctor
