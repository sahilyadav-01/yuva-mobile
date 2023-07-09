import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getDateInFormat } from '../../utils/utils';
import { DOCUMENT_DATE, UPLOAD_DATE } from './constants';
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
        <Text style={styles.documentDateStyle}>{DOCUMENT_DATE}{getDateInFormat(new Date(DocumentDate), 'dd mm yy')}</Text>
        <Text style={styles.uploadDateStyle}>{UPLOAD_DATE}{getDateInFormat(new Date(UploadDate), 'dd mm yy')} </Text>
      </View>
      <TouchableOpacity style={styles.Button} >
        <Text style={styles.ButtonText}>{'Download Now'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MedicalReportCard;