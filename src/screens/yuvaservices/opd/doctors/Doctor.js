import React from 'react'
import { SafeAreaView} from 'react-native'
import { styles } from "../../../styles"
import DoctorScreen from '../../../../modules/opd/doctor/components'



const Doctor = () => {

    return (
        <SafeAreaView  style={styles.container} >
            <DoctorScreen />
        </SafeAreaView>
    )
}

export default Doctor
