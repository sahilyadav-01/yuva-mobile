import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { reportStatusThunk } from "../../../../store/reducers/Section9Slice";
import { checkPermission } from "../../../../utils/utils";
import { ALERT, REPORT_STATUS1, ALERT_TEXT1, REPORT_STATUS2, REPORT_STATUS3, FILE_NAME, LOGGEDIN, LOGIN_SCREEN } from "../../constant";

export const useHraHome = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    let { reportStatus, reportDownload } = useSelector(state => state.section9,);
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
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
        dispatch(reportStatusThunk({ jwt })).then(() => { });
    };
    useEffect(() => {
        const timer = setInterval(() => {
            fetchReport();
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const onPressRightIcon = () => {
        if (loggedIn !== LOGGEDIN) {
            navigation.navigate({ LOGIN_SCREEN });
        }
        //Drawer logic to be implemented in the else block here
    };

    return {
        onPressRightIcon,
        onDisplay,
        loggedIn,
    };
};