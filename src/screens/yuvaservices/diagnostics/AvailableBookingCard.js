
import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { COMPLETED, CONFIRMED, DOWNLOAD_REPORT, FILE_DOWNLOADED, FINISHED, INITIATED, PENDING, RESCHEDULED } from './constants';
import { PNG } from '../../../../assets';
import RNFetchBlob from 'rn-fetch-blob';
import * as FileSystem from 'react-native-fs';
const { StorageAccessFramework } = FileSystem;
import { granted } from '../../../utils/utils';
const AvailableBookingCard = ({
  name, id, packageName, imageUrl, packageUuid, nameBooking, status,filePath,fileName
}) => {
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
    let file_Url =filePath
    let ext = getExtention(file_Url)
    ext =fileName
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
        alert(FILE_DOWNLOADED);
      })

  }
  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
  }
  const display = () => {
      checkpermission();
  };
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



