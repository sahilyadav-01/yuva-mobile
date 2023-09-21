import validator from 'is_js';
import {Alert, Dimensions, PermissionsAndroid, Platform, Linking} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import DeviceInfo from 'react-native-device-info';
import { setProfileImage, uploadFamilyPic } from '../store/reducers/ProfileSlice';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
export const handleNetworkError = (status, message) => {
  if (!message) {
    if (status >= 500) Alert.alert('Error', 'Internal Server Error');
    else if (status === 403) Alert.alert('Error', 'Forbidden');
  } else Alert.alert('Error', message.toString());
};

export const isEmail = email => {
  let regEmail =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  let regMobile = /^[0-9]{10}$/;

  if (validator.empty(email)) {
    return false;
  }
  if (isNaN(email)) {
    if (regEmail.test(email) == false) {
      return false;
    } else {
      return true;
    }
  } else {
    if (regMobile.test(email) == false) {
      return false;
    } else {
      return true;
    }
  }

  // (email) => (validator.empty(email) || !validator.email(email)) ? false : true
};

export const isEmpty = password => (validator.empty(password) ? true : false);

//export const  SERVER ="ec2-35-154-255-122.ap-south-1.compute.amazonaws.com"

//DEVELOPMENT SERVER
export const SERVER = 'ec2-13-127-160-250.ap-south-1.compute.amazonaws.com';
export const REDIRECT_URL = 'http://ec2-13-127-160-250.ap-south-1.compute.amazonaws.com:8080/api/v1/yuva/paymentGateway/response';
export const CANCEL_URL = 'http://ec2-13-127-160-250.ap-south-1.compute.amazonaws.com:8082/cancelPayment'
export const PORT = ':8082';
export const PROTOCOL = 'http://';
export const PATH = ':8080/api/v1/yuva';

//UAT Server
// export const SERVER = 'ec2-43-205-141-26.ap-south-1.compute.amazonaws.com';
// export const REDIRECT_URL = 'http://ec2-43-205-141-26.ap-south-1.compute.amazonaws.com:8080/api/v1/yuva/paymentGateway/response';
// export const CANCEL_URL = 'http://ec2-43-205-141-26.ap-south-1.compute.amazonaws.com:8081/cancelPayment';
// export const PORT = ':8081';
// export const PROTOCOL = 'http://';
// export const PATH = ':8080/api/v1/yuva';

//PREPROD Server
// export const SERVER = 'ec2-3-7-71-9.ap-south-1.compute.amazonaws.com';
// export const REDIRECT_URL = 'http://ec2-3-7-71-9.ap-south-1.compute.amazonaws.com:8080/api/v1/yuva/paymentGateway/response';
// export const CANCEL_URL = 'http://ec2-3-7-71-9.ap-south-1.compute.amazonaws.com:8080/api/v1/yuva/paymentGateway/response'
// export const PORT = ':8081';
// export const PROTOCOL = 'http://';
// export const PATH = ':8080/api/v1/yuva';

// Production Server
// export const SERVER = 'yuvahealth.in';
// export const REDIRECT_URL = 'https://yuvahealth.in/api/v1/yuva/paymentGateway/response';
// export const CANCEL_URL = 'https://yuvahealth.in/api/v1/yuva/paymentGateway/response';
// export const PORT = '';
// export const PROTOCOL = 'https://';
// export const PATH = '/api/v1/yuva';


export const EMAIL_VALIDATION = 'Please enter a valid Email/Phone Number!';
export const PASSWORD_VALIDATION = 'Please enter a valid password !';

export const transforSubData = (
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  version,
) => {
  let data2 = {...s1, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7, ...s8, ...s9};
  let data3 = Object.keys(data2).map(k => {
    let o = {};
    o[k] = checkEmptyReplaceZero(data2[k]);
    return o;
  });
  return Object.keys(data3)
    .map(k => data3[k])
    .reduce(function (acc, x) {
      for (var key in x) acc[key] = x[key];
      return acc;
    }, {});
  let val1 = Object.keys(s1).map(k => {
    //return {"questionId":k, "sectionId":1, version:version, answer:checkEmptyReplaceZero(s1[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s1[k]);
    return 0;
  });

  let val2 = Object.keys(s2).map(k => {
    //return {"questionId":k, "sectionId":2, version:version, answer:checkEmptyReplaceZero(s2[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s2[k]);
  });

  let val3 = Object.keys(s3).map(k => {
    //return {"questionId":k, "sectionId":3, version:version, answer:checkEmptyReplaceZero(s3[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s3[k]);
  });

  let val4 = Object.keys(s4).map(k => {
    //return {"questionId":k, "sectionId":4, version:version, answer:checkEmptyReplaceZero(s4[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s4[k]);
  });

  let val5 = Object.keys(s5).map(k => {
    //return {"questionId":k, "sectionId":5, version:version, answer:checkEmptyReplaceZero(s5[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s5[k]);
  });

  let val6 = Object.keys(s6).map(k => {
    //return {"questionId":k, "sectionId":6, version:version, answer:checkEmptyReplaceZero(s6[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s6[k]);
  });

  let val7 = Object.keys(s7).map(k => {
    //return {"questionId":k, "sectionId":7, version:version, answer:checkEmptyReplaceZero(s7[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s7[k]);
  });

  let val8 = Object.keys(s8).map(k => {
    //return {"questionId":k, "sectionId":8, version:version, answer:checkEmptyReplaceZero(s8[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s8[k]);
  });

  let val9 = Object.keys(s9).map(k => {
    //return {"questionId":k, "sectionId":9, version:version, answer:checkEmptyReplaceZero(s9[k])}
    let o = {};
    o[k] = checkEmptyReplaceZero(s9[k]);
  });

  return [
    ...val1,
    ...val2,
    ...val3,
    ...val4,
    ...val5,
    ...val6,
    ...val7,
    ...val8,
    ...val9,
  ];
};

const checkEmptyReplaceZero = val => {
  return val == '' ? 0 : parseFloat(val);
};

export const appointmentStatus = status => {
  let retStatus = 'Initiated';
  switch (status) {
    case 'CANCELLED':
      retStatus = 'Cancelled';
      break;
    case 'INITIATED':
      retStatus = 'Initiated';
      break;
    case 'CONFIRMED':
      retStatus = 'Confirmed';
      break;
    case 'RESCHEDULED':
      retStatus = 'Rescheduled';
      break;
    case 'COMPLETED':
      retStatus = 'Completed';
      break;
    case 'FINISHED':
      retStatus = 'Finished';
      break;
  }
  return retStatus;
};
export const dignosticStatus = status => {
  let retStatus = '';
  switch (status) {
    case 'CANCELLED':
      retStatus = 'Cancelled';
      break;
    case 'INITIATED':
      retStatus = 'Awaiting For Confirmation';
      break;
    case 'CONFIRMED':
      retStatus = 'Booking Confirmed';
      break;
    case 'RESCHEDULED':
      retStatus = 'Rescheduled';
      break;
    case 'COMPLETED':
      retStatus = 'Report Awaited';
      break;
    case 'FINISHED':
      retStatus = 'Access your report from Download Section';
      break;
    default:
      retStatus = 'Awaiting For Confirmation';
  }
  return retStatus;
};

export const getDate = timestamp => {
  //  let date = Date.parse(timestamp?.split(".")[0])
  return new Date(timestamp).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
  });
};
export const getPlanDate = timestamp => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};
export const splitCustomId = customId => {
  return (
    customId.substr(0, 4) +
    '-' +
    customId.substr(4, 4) +
    '-' +
    customId.substr(8, 4)
  );
};

export const getTime = timestamp => {
  // let time = Date.parse(timestamp?.split(".")[0])
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getEpoch = (date, time) => {
  const dtString = date.toISOString().slice(0, 10);
  const timeString = processTime(time);
  if(Platform.OS === 'ios'){
    return Date.parse(dtString + 'T' + timeString)
  }
  else if(Platform.OS==='android'){
    return Date.parse(dtString + 'T' + timeString) - 5.5 * 60 * 60 * 1000;
  } 
};

const getOffsetTime = time => {
  let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  return new Date(time.valueOf() + tzoffset)
    .toISOString()
    .slice(0, -1)
    .slice(11, 19);
};

const processTime = time => {
  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
  return addZero(time?.getHours()) + ':' + addZero(time?.getMinutes()) + ':00';
  //  return `${time.getHours()}:${time.getMinutes()}:00`
};

// export const getDateObject = (slot) => {
//     let tstring = slot.split(".")[0];
//     return new Date(tstring)
// }
export const ImageGallery=(onSuccess,onError)=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
    includeBase64:true,
  }).then(onSuccess).catch(onError);
}
export const requestCameraPermission = async (onSuccess,onError) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          includeBase64:true,
        }).then(onSuccess).catch(onError);
    } else {
     Alert.alert("permission denied...!!!")
    }
  } catch (err) {
    console.warn(err);
  }
};
export const granted = () => {
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: 'Storage Permission Required',
      message: 'App need to access you storage',
    },
  );
};
const downloadFile = (filePath, fileName) => {
  // path is the url from where it will download
  // fileName represents in which name the file will be stored in the device
  let file_Url = filePath;
  let ext = getExtention(file_Url);
  ext = fileName;
  const {config, fs} = RNFetchBlob;
  const directory = Platform.OS === 'android' ? fs.dirs.DownloadDir : fs.dirs.DocumentDir;
  let options;
  if(Platform.OS === 'android') {
    if (Platform.OS === 'android') {
      options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: directory + '/yuva/' + ext,
          showNotification: true,
        },
      };
    
      if (ext === 'pdf') {
        options.addAndroidDownloads.description = 'PDF File';
        options.addAndroidDownloads.mime = 'application/pdf';
      } else if (ext === 'png') {
        options.addAndroidDownloads.description = 'PNG File';
        options.addAndroidDownloads.mime = 'image/png';
      }
      else if (ext === 'jpeg' || ext === 'jpg') {
        options.addAndroidDownloads.description = 'JPEG File';
        options.addAndroidDownloads.mime = 'image/jpeg';
      }
    }
    
  }
  else if(Platform.OS === 'ios') {
    options = {path:`${directory}/${fileName}`}
  }
  config(options)
    .fetch('GET', file_Url)
    .then(res => {
      // Alert after successful downloading;
      if(Platform.OS === 'android')
      alert('File Downloaded Successfully.', JSON.stringify(res));
      else if(Platform.OS === 'ios') 
        RNFetchBlob.ios.previewDocument(res.path());
    })
    .catch(err => {
      alert('Download Failed');
    });
};

export const checkPermission = async (filePath, fileName) => {
  if(Platform.OS === 'android'){
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then(read=>{
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then(write=>{
    if(read && write){
      downloadFile(filePath, fileName);
    }
    else if(read && !write){
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    }
    else if(!read && write){
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    }
    else {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    }
    })
  })
}
else if(Platform.OS === 'ios') downloadFile(filePath, fileName);
};

const getExtention = filename => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

export const getCalendarValue = value => {
  const date = getDate(value);
  const time = getTime(value);
  return {date, time};
};

export const getDimensions = () => {
  const {width, height} = Dimensions.get('screen');
  return {width, height};
};

export const getWindowDimensions = () => {
  const {width, height} = Dimensions.get('window');
  return {width, height};
};

export const getMonthInText = arg => {
  const obj = [
    {month: '0', text: 'January'},
    {month: '1', text: 'February'},
    {month: '2', text: 'March'},
    {month: '3', text: 'April'},
    {month: '4', text: 'May'},
    {month: '5', text: 'June'},
    {month: '6', text: 'July'},
    {month: '7', text: 'August'},
    {month: '8', text: 'September'},
    {month: '9', text: 'October'},
    {month: '10', text: 'November'},
    {month: '11', text: 'December'},
  ];
  return obj.find(item => item.month === arg.toString()).text;
};

export const getDateText = date => {
  return (
    date &&
    `${date.getDate()} ${getMonthInText(date.getMonth())} ${date.getFullYear()}`
  );
};

export const getDateInFormat = (date, format) => {
  switch (format) {
    case 'dd/mm/yyyy':
      return (
        date && `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      );
    case 'dd mm':
      return date && `${date.getDate()} ${getMonthInText(date.getMonth())}`;
    case 'dd mm yy':
      return date && `${date.getDate()}-${getMonthInText(date.getMonth())} ${date.getFullYear()}`;
    case 'mm/yy':
      const year = date.getFullYear().toString();
      return date && `${date.getMonth() + 1}/${year.substring(year.length-2,year.length)}`;
    default:
      getDateText(date);
  }
};

export const getTimeInFormat = (date, format) => {
  switch (format) {
    case 'hh:mm:ss':
      return (
        date && `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    case 'hh:mm ': {
      return date && `${date.getHours()}:${date.getMinutes()}`;
    }
  }
};

export const getAge = date => {
  return (
    date &&
    `${parseInt(new Date().getFullYear()) - parseInt(date.getFullYear())}`
  );
};

export const getDeviceId = async () => {
  const deviceId = await DeviceInfo.getUniqueId();
  return deviceId || '';
};

export const onTermsConditionsPress = async () => {
  const canOpen = await Linking.canOpenURL('https://www.yuvahealth.in/terms-and-conditions');
  const storeUrl = Platform.OS === 'ios' ? 'https://apps.apple.com/in/app/google-chrome/id535886823' : 'market://details?id=com.android.chrome'
  if(canOpen){
    Linking.openURL('https://www.yuvahealth.in/terms-and-conditions');
  }
  else {
    Linking.openURL(storeUrl);
  }
}

export const onPrivacyPolicyPress = async () => {
  const canOpen = await Linking.canOpenURL('https://www.yuvahealth.in/privacy-policy');
  const storeUrl = Platform.OS === 'ios' ? 'https://apps.apple.com/in/app/google-chrome/id535886823' : 'market://details?id=com.android.chrome'
  if(canOpen){
    Linking.openURL('https://www.yuvahealth.in/privacy-policy');
  }
  else {
    Linking.openURL(storeUrl);
  }
}

export const onNeedHelpPress = async () => {
  const canOpen = await Linking.canOpenURL('https://www.yuvahealth.in/contact-us');
  const storeUrl = Platform.OS === 'ios' ? 'https://apps.apple.com/in/app/google-chrome/id535886823' : 'market://details?id=com.android.chrome';
  if(canOpen){
    Linking.openURL('https://www.yuvahealth.in/contact-us');
  }
  else {
    Linking.openURL(storeUrl);
  }
}

export const getPlatform = () => {
  if(Platform.OS === 'android') return {isIOS:false,isAndroid:true}
  else if(Platform.OS === 'ios') return {isIOS:true,isAndroid:false}
}

