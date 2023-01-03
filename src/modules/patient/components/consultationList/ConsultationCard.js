import React from 'react';
import { View, Text } from 'react-native';
import { COMPLETED } from '../../constant';
import { usePatient } from '../../hooks/usePatient';
import CalenderContainer from './CalenderContainer';
import Footer from './Footer';
import { styles } from './styles';

const ConsultationCard = (props) => {
  const date = '03-Jan-23';
  const time = '05:30 PM';
  const {onConsultPress, onDownloadPress } = usePatient();
  return (
    <View style={styles.consultationView}>
      <View style={styles.topSection}>
        <View style={styles.view1}>
        <Text style={styles.topHeaderLeft}>{COMPLETED}</Text>
        </View>
        <View style={styles.view1}>
          <Text style={styles.topHeaderRight}>{'Doctor X'}</Text>
          <Text style={styles.bottomHeader}>{'Orthopedician'}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.view1}>
          <Text style={styles.descriptionText}>Description of this consultation .</Text>
        </View>
        <View style={styles.view2}>
          <CalenderContainer date={date} time={time}/>
        </View>
      </View>
      <View>
        <Footer onConsultPress={onConsultPress} onDownloadPress={onDownloadPress}/>
      </View>
    </View>
  );
};

export default ConsultationCard;