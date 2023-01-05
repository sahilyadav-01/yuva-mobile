import React from 'react';
import { View, Text } from 'react-native';
import { COMPLETED } from '../../constant';
import CalenderContainer from './CalenderContainer';
import Footer from './Footer';
import { styles } from './styles';
import {getCalendarValue} from '../../../../utils/utils';

const ConsultationCard = (props) => {
  const {onConsult, onDownload, item } = props;
  const onDownloadPress = () => {
    onDownload(item?.prescriptionFilepath);
  };
  const {date, time} = getCalendarValue(item?.createdAt);
  return (
    <View style={styles.consultationView}>
      <View style={styles.topSection}>
        <View style={styles.view1}>
        <Text style={styles.topHeaderLeft}>{COMPLETED}</Text>
        </View>
        <View style={styles.view1}>
          <Text style={styles.topHeaderRight}>{item?.doctorName}</Text>
          <Text style={styles.bottomHeader}>{item?.doctorDegree}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.view1}>
          <Text style={styles.descriptionText}>{item?.description}</Text>
        </View>
        <View style={styles.view2}>
          <CalenderContainer date={date} time={time}/>
        </View>
      </View>
      <View>
        <Footer onConsultPress={onConsult} onDownloadPress={onDownloadPress}/>
      </View>
    </View>
  );
};

export default ConsultationCard;