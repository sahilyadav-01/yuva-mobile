import validator from "is_js"
import { PermissionsAndroid } from "react-native";
import RNFetchBlob from "rn-fetch-blob";

export const isEmail = (email) => {

    let regEmail =
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    let regMobile = /^[0-9]{10}$/;

    if (validator.empty(email)) {
        return false
    }
    if (isNaN(email)) {
        if (regEmail.test(email) == false) {
            return false;
        }
        else {
            return true;
        }
    } else {
        if (regMobile.test(email) == false) {
            return false;
        }
        else {
            return true;
        }
    }

    // (email) => (validator.empty(email) || !validator.email(email)) ? false : true
}

export const isEmpty =
    (password) => validator.empty(password) ? true : false;

//export const  SERVER ="ec2-35-154-255-122.ap-south-1.compute.amazonaws.com"

export const SERVER = "ec2-3-111-222-20.ap-south-1.compute.amazonaws.com"
//export const SERVER ="localhost"

export const EMAIL_VALIDATION = "Please enter a valid Email/Phone Number!"
export const PASSWORD_VALIDATION = "Please enter a valid password !"

export const transforSubData = (s1, s2, s3, s4, s5, s6, s7, s8, s9, version) => {
    let data2 = { ...s1, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7, ...s8, ...s9 }
    let data3 = Object.keys(data2).map((k) => {
        let o = {}
        o[k] = checkEmptyReplaceZero(data2[k])
        return o;
    })
    return Object.keys(data3).map(k => data3[k]).reduce(function (acc, x) {
        for (var key in x) acc[key] = x[key];
        return acc;
    }, {});
    let val1 = Object.keys(s1).map(k => {
        //return {"questionId":k, "sectionId":1, version:version, answer:checkEmptyReplaceZero(s1[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s1[k])
        return 0;
    })

    let val2 = Object.keys(s2).map(k => {
        //return {"questionId":k, "sectionId":2, version:version, answer:checkEmptyReplaceZero(s2[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s2[k])
    })

    let val3 = Object.keys(s3).map(k => {
        //return {"questionId":k, "sectionId":3, version:version, answer:checkEmptyReplaceZero(s3[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s3[k])
    })

    let val4 = Object.keys(s4).map(k => {
        //return {"questionId":k, "sectionId":4, version:version, answer:checkEmptyReplaceZero(s4[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s4[k])
    })

    let val5 = Object.keys(s5).map(k => {
        //return {"questionId":k, "sectionId":5, version:version, answer:checkEmptyReplaceZero(s5[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s5[k])
    })

    let val6 = Object.keys(s6).map(k => {
        //return {"questionId":k, "sectionId":6, version:version, answer:checkEmptyReplaceZero(s6[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s6[k])
    })

    let val7 = Object.keys(s7).map(k => {
        //return {"questionId":k, "sectionId":7, version:version, answer:checkEmptyReplaceZero(s7[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s7[k])
    })

    let val8 = Object.keys(s8).map(k => {
        //return {"questionId":k, "sectionId":8, version:version, answer:checkEmptyReplaceZero(s8[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s8[k])
    })

    let val9 = Object.keys(s9).map(k => {
        //return {"questionId":k, "sectionId":9, version:version, answer:checkEmptyReplaceZero(s9[k])}
        let o = {}
        o[k] = checkEmptyReplaceZero(s9[k])
    })

    return [...val1, ...val2, ...val3, ...val4, ...val5, ...val6, ...val7, ...val8, ...val9]
}

const checkEmptyReplaceZero = (val) => {
    return val == '' ? 0 : parseFloat(val)
}

export const appointmentStatus = (status) => {
    let retStatus = "Initiated"
    switch (status) {
        case "CANCELLED":
            retStatus = "Cancelled"
            break;
        case "INITIATED":
            retStatus = "Initiated"
            break;
        case "CONFIRMED":
            retStatus = "Confirmed"
            break;
        case "RESCHEDULED":
            retStatus = "Rescheduled"
            break;
        case "COMPLETED":
            retStatus = "Completed"
            break;
        case "FINISHED":
            retStatus = "Finished"
            break;
    }
    return retStatus;
}

export const getDate = (timestamp) => {
    //  let date = Date.parse(timestamp?.split(".")[0])
    return new Date(timestamp).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })
}

export const getTime = (timestamp) => {
    // let time = Date.parse(timestamp?.split(".")[0])
    return new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

export const getEpoch = (date, time) => {
    const dtString = date.toISOString().slice(0, 10)
    const timeString = processTime(time)
    return Date.parse(dtString + "T" + timeString) - (5.5 * 60 * 60 * 1000)
}

const getOffsetTime = (time) => {
    let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    return (new Date(time.valueOf() + tzoffset)).toISOString().slice(0, -1).slice(11, 19);
}

const processTime = (time) => {
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    return addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":00";
    //  return `${time.getHours()}:${time.getMinutes()}:00`
}

// export const getDateObject = (slot) => {
//     let tstring = slot.split(".")[0];
//     return new Date(tstring)
// }

export const granted = () => {
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
        title: 'Storage Permission Required',
        message: 'App need to access you storage'
    }
    )
};

export const checkPermission = async (path, fileName) => {
    if (Platform.OS !== 'android') {
        downloadFile(path, fileName);
    } else {
        try {
            granted();
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                downloadFile(path, fileName);
            }
        } catch (error) {
        }
    }
};

const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
};

const downloadFile = (path, fileName) => {
    // path is the url from where it will download
    // fileName represents in which name the file will be stored in the device

    let ext = getExtention(path);
    ext = `${fileName}.${ext[0]}`;
    const { config, fs } = RNFetchBlob;
    let DownloadDir = fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${DownloadDir}/yuva/${ext}`,
        description: 'File',
        mime: 'application/pdf',
        showNotification: true,
      },
    };
    config(options)
      .fetch('GET', file_Url)
      .then(res => {
        // Alert after successful downloading;
        alert('File Downloaded Successfully.', JSON.stringify(res));
      });
  };

  export const getCalendarValue = (value) => {
    const date = getDate(value);
    const time = getTime(value);
    return {date, time};
  }