import validator from "is_js"

export const isEmail =
    (email) => (validator.empty(email) || !validator.email(email)) ? false : true

export const isEmpty =
    (password) => validator.empty(password) ? true : false;

//export const  SERVER ="ec2-35-154-255-122.ap-south-1.compute.amazonaws.com"

export const SERVER ="ec2-3-111-222-20.ap-south-1.compute.amazonaws.com"
//export const SERVER ="localhost"

export const EMAIL_VALIDATION = "Please enter a valid Email !"
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
    let retStatus = "Pending"
    switch (status) {
        case "CANCELLED":
            retStatus = "Cancelled"
            break;
        case "INITIATED":
            retStatus = "Pending"
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
    }
    return retStatus;
}

export const getDate = (timestamp) => {
    let date = Date.parse(timestamp?.split(".")[0])
    return new Date(date).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })
}

export const getTime = (timestamp) => {
    let time = Date.parse(timestamp?.split(".")[0])
    return new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

export const getEpoch = (date, time) => {
    const dtString = date.toISOString().slice(0, 10)
    const timeString = processTime(time)
    return Date.parse(dtString + " " + timeString)
}

const getOffsetTime = (time) => {
    let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    return (new Date(time.valueOf() + tzoffset)).toISOString().slice(0, -1).slice(11, 19);
}

const processTime = (time) => {
    return time.getHours() + ":" + time.getMinutes() + ":00"
}

export const getDateObject = (slot) => {
    let tstring = slot.split(".")[0];
    return new Date(tstring)
}

 export const granted =()=>{ PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
        title:'storage permsioon reuqired',
        message:'app need to acess ypu sotrage'
      }
    )}
