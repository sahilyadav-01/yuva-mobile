
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bookTestThunk ,resetMesage} from '../../../../store/reducers/DiagnosticsSlice';
import { getRelations, getUserAddress } from '../../../../store/reducers/ProfileSlice';
import { getEpoch } from '../../../../utils/utils';
import { useNavigation } from '@react-navigation/core'
import { ALERT, BOOKED, OK, PLEASE_CHECK_ADDRESS, RESCHEDULEANDCANCEL } from '../constants';

export const useBookingConfirm = () => {
    const route = useRoute();
    const { Uuid, userVersion, version, plan } = route.params;
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selected, setSelected] = useState("");

    const [dataRelation, setDataRelation] = useState();
    const { packageDetails, testBooked, apiErrorMessage ,cityId} = useSelector(state => state.diagnostic);
    const { relationId, userAddress } = useSelector(state => state.profile);
    const [checked, setChecked] = useState(null);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const handleDate = date => {
        setDate(date);
    };
    const handleTime = time => {
        setTime(time);

    };
    useEffect(() => {
        dispatch(getRelations())
        dispatch(getUserAddress())

    }, [])
    useEffect(() => {
        if (relationId?.relativeResponseDto?.length > 0) {
            let newArray = relationId?.relativeResponseDto?.map((item) => {
                return { key: item.id, value: item.name + "  -  " + item.relation + "  (" + item.age + ")" }
            }
            )
            setDataRelation(newArray)
        } else {
            dispatch(getRelations())
        }
    }, [relationId])


    const bookTestScreen = () => {
        if (checked === null) {
            Alert.alert(ALERT, PLEASE_CHECK_ADDRESS);
        } else {
            const address = userAddress[checked]?.address;
            const pincode = userAddress[checked]?.pinCode;
            const contact= userAddress[checked]?.contactNumber;
            var data = {
                address: address,
                cityId: cityId[0]?.id,
                contactNumber:contact,
                packageUuid: [packageDetails?.packageUuid],
                patientId: null,
                pinCode: pincode,
                plan: plan,
                programOrPlanUuid: Uuid,
                relationId: selected,
                testId: [],
                timeSlot: getEpoch(date, time),
                userPlanVersion: userVersion,
                version: version
            };
            if (packageDetails) {
                dispatch(bookTestThunk({ data }))
            }
        }
       
    }
    useEffect(() => {
        if (testBooked?.message && !apiErrorMessage) {
            Alert.alert(ALERT, BOOKED, [{
                text: OK,
                onPress: () => { navigation.navigate(RESCHEDULEANDCANCEL ,testBooked) }
            }])
        }
        else if (apiErrorMessage && !testBooked) {
            Alert.alert(ALERT, apiErrorMessage, [{
                text: OK,
               
            }])
          
        }
    return ()=> dispatch(resetMesage())
    }, [testBooked,apiErrorMessage])
    
    return {
        packageDetails,
        handleDate,
        handleTime,
        date,
        time,
        setSelected,
        checked,
        setChecked,
        dataRelation,
        userAddress,
        bookTestScreen
    }
}