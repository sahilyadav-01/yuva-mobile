
import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { CANCELLED, COMPLETED, CONFIRMED, DOWNLOAD_REPORT, FINISHED, INITIATED, PENDING, RESCHEDULED } from './constants';
import { PNG } from '../../../../assets';
import { downloadReportThunk } from '../../../store/reducers/DiagnosticsSlice';
import { useDispatch ,useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import * as FileSystem from 'react-native-fs';
const { StorageAccessFramework } = FileSystem;
import { granted } from '../../../utils/utils';
const AvailableBookingCard = ({
  name, id, packageName, imageUrl, packageUuid, nameBooking, status,attachmentId
}) => {
  const { jwt } = useSelector(state => state.auth.user)
  const dispatch=useDispatch();
  const navigation = useNavigation();
  const clicked = () => {
    navigation.navigate('BookingTestAndPackage', {
      id: id ? id : '',
      packageData: packageName ? { packageName, packageUuid } : '',
    });
  }
  const checkpermission = async () => {
    if (Platform.OS === 'android') {
      downloadFile()
    } else {
      try {
        granted();
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadFile();
        }
      } catch (error) {
      }
    }
  }
  const downloadFile = () => {
    let date = new Date()
    let file_Url ="https://yuva-pdf.s3.ap-south-1.amazonaws.com/https%3A/%2Fyuva-pdf.s3.amazonaws.com/1674035021498-YUVA_ERD.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230119T055941Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAXSO7RTFTJVQH5A7N%2F20230119%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=83eb0502b99c63b9d793612c73e43c9206d38fe1019b7a09c731e7939b6d3d35"
    let ext = getExtention(file_Url)
    ext = 'reportpdf.' + ext[0]
    const { config, fs } = RNFetchBlob
    let DownloadDir = fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: DownloadDir + '/foldername/' + ext,
        description: 'File',
        mime: 'application/pdf',
        showNotification: true,
       
      }
    }
    config(options)
      .fetch('GET', file_Url)
      .then(res => {
        // Alert after successful downloading;
        alert('File Downloaded Successfully.');
      })

  }
  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
  }
  const display = () => {
      checkpermission();
      // download();
  };
  const download=()=>{
    dispatch(downloadReportThunk({jwt,attachmentId}))
  }
  return (
    <View>
      <TouchableOpacity disabled={!name} onPress={clicked}>
        <View style={styles.cards}>
          <View style={styles.labTest}>
            <Image
              source={imageUrl}
              style={styles.image}
            />
            <View >
              {name ? (
                <View>
                  <Text style={styles.packageTest}>{name}</Text></View>
              ) : (
                <View style={styles.booking}>
                  <Text style={styles.packageTest}>{nameBooking}</Text>
                  <View >
                    {status === FINISHED ? (
                      <TouchableOpacity onPress={display}><Text style={styles.download}><Image source={PNG.DOWNLOAD}></Image>{DOWNLOAD_REPORT}</Text></TouchableOpacity>)
                      : (<View>
                        {status === INITIATED || status === RESCHEDULED || status === COMPLETED || status===CONFIRMED ? (<Text style={styles.download}>{PENDING}</Text>) : ("")}
                      </View>)}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AvailableBookingCard;



