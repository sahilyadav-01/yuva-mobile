
import { useNavigation } from '@react-navigation/core';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpoch } from "../../../../../utils/utils";
import { Alert } from 'react-native';
import { newAppointmentThunk, allAppointmentThunk,resetMessage } from "../../../../../store/reducers/AppointmentSlice";
import { getRelations } from '../../../../../store/reducers/ProfileSlice';

export const useNew=()=> {
    const [signupFlag, setSignupFlag] = useState(false);
    const [signupMessage, setSignupMessage] = useState();
    const [description, setDesciption] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [dataRelation,setDataRelation]=useState();

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
    const {jwt} = useSelector(state => state.auth.user);
    const { newMessage, appointmentDescription } = useSelector(state => state.appointment)
    const { doctorId, name, specialization } = useSelector(state => state.appointment.appointment);
    const {relationId}=useSelector(state=>state.profile);
    useEffect(() => {
        if (newMessage?.message) {
            setSignupFlag(true);
            setSignupMessage('Successfully Booked!');

        }
        else if (appointmentDescription?.description) {

            Alert.alert("Alert", "Description cannot be null/empty")
        }
        else if (appointmentDescription?.errorMessage) {

            Alert.alert("Alert", appointmentDescription?.errorMessage)
        }
        return () => dispatch(resetMessage())
    }, [newMessage, appointmentDescription])
    const newAppointment = () => {
        dispatch(
            newAppointmentThunk({
                description,
                epoch: getEpoch(date, time),
                doctorId,
                jwt,
                selected
            }),
        )
    };
    const onChangeDescription = txt => {
        setDesciption(txt);
    };
    const closeMessageBox = () => {
        setSignupFlag(false);
        dispatch(allAppointmentThunk({ jwt })).then(
            navigation.navigate('AppointmentHome'),
        );
    };
    const handleDate = date => {
        setDate(date);
    };
    const handleTime = time => {
        setTime(time);
        getEpoch(date, time);
    };
  useEffect(() => {
    if (relationId?.length > 0) {
        let newArray = relationId.map((item) => {
            return { key: item.id, value: item.name+"-"+item.relation+"("+item.age+")"}
        }
        )
        setDataRelation(newArray)
    } else {
        dispatch(getRelations({ jwt }))
    }   
}, [relationId])

    return {
        goBack,
        signupFlag,
        signupMessage,
        newAppointment,
        onChangeDescription,
        description,
        closeMessageBox,
        handleDate,
        handleTime,
        date,
        time,  
        setSelected,
        dataRelation
    }
};