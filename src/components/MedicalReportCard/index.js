import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
const MedicalReportCard = ({
  reportId,
  hospitalName,
  documuntType,
  DocumentDate,
  UploadDate
}) => {

  return (
    <View style={styles.CompleteView}>
      <View style={styles.Top}>
        <Text style={styles.hospitalNameStyle}>{hospitalName}</Text>
        <Text style={styles.documuntTypeStyle}> {documuntType}</Text>
        <Text style={styles.documentDateStyle}>{DocumentDate}</Text>
        <Text style={styles.uploadDateStyle}>{UploadDate} </Text>
      </View>
      <TouchableOpacity style={styles.Button} >
        <Text style={styles.ButtonText}>{'Download Now'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MedicalReportCard;