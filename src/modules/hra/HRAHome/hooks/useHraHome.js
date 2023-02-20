import { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { checkPermission } from "../../../../utils/utils";
import { ALERT, REPORT_STATUS1, ALERT_TEXT1, REPORT_STATUS2, REPORT_STATUS3, FILE_NAME, LOGGEDIN, LOGIN_SCREEN, SECTION_1 } from "../../constant";
import { continueHRAThunk } from "../../../../store/reducers/HRASlice";

export const useHraHome = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    let { reportStatus, reportDownload } = useSelector(state => state.section9,);
    const { continueHRA, continueHRAStatus, loading } = useSelector(state => state.hra);
    const focused = useIsFocused();
    const [renderData, setRenderData] = useState(false);
    useEffect(()=>{
        if(navigation.isFocused())
        dispatch(continueHRAThunk())
    },[focused]);

    useEffect(()=>{
        if(!loading && continueHRAStatus) setRenderData(true);
    },[loading,continueHRAStatus])
    useEffect(() => {
        const timer = setInterval(() => {
            fetchReport();
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    const onDisplay = () => {

        if (reportStatus === null) {
            Alert.alert(ALERT, REPORT_STATUS1, [
                {
                    text: ALERT_TEXT1,
                },
            ]);
            fetchReport();
        }

        if (reportStatus?.ready != null && !reportStatus.ready) {
            Alert.alert(ALERT, REPORT_STATUS2, [
                {
                    text: ALERT_TEXT1,
                },
            ]);
            fetchReport();
        }
        if (reportStatus?.ready != null && reportStatus.ready) {
            checkPermission(reportDownload, FILE_NAME);
        } else {
            Alert.alert(ALERT, REPORT_STATUS3, [
                {
                    text: ALERT_TEXT1,
                },
            ]);
        }
    };
    const fetchReport = () => {
        //dispatch(reportStatusThunk());
    };

    const goToSection1 = () => navigation.navigate(SECTION_1)

    return {
        onDisplay,
        continueHRA,
        goToSection1,
        renderData
    };
};