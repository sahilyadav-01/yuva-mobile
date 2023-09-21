import React from 'react';
import {View, Text} from 'react-native';
import {CANCELLED, COMPLETED} from '../../constant';
import CalenderContainer from './CalenderContainer';
import Footer from './Footer';
import {styles} from './styles';
import {getCalendarValue} from '../../../../utils/utils';

const ConsultationCard = props => {
  const {onConsult, onDownload, item} = props;
  const {date, time} = getCalendarValue(item?.updatedAt);
  return (
    <View
      style={
        item?.chatStatus === 'FINISHED'
          ? styles.consultationView
          : [styles.consultationView, styles.cancelledView]
      }>
      <View style={styles.topSection}>
        <View style={styles.view1}>
          <Text
            style={
              item?.chatStatus === 'FINISHED'
                ? styles.topHeaderLeft
                : [styles.topHeaderLeft, styles.cancelledText]
            }>
            {item?.chatStatus === 'FINISHED' ? COMPLETED : CANCELLED}
          </Text>
        </View>
        <View style={styles.view1}>
          <Text
            style={
              item?.chatStatus === 'FINISHED'
                ? styles.topHeaderRight
                : [styles.topHeaderRight, styles.cancelledText]
            }>
            {item?.doctorName}
          </Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.view1}>
          <Text style={styles.descriptionText}>{item?.description}</Text>
        </View>
        <View style={styles.view1}>
          <Text
            style={
              item?.chatStatus === 'FINISHED'
                ? styles.bottomHeader
                : [styles.bottomHeader, styles.cancelledDegree]
            }>
            {item?.doctorDegree}
          </Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Footer onConsultPress={() =>onConsult(item)} />
        <View style={styles.view2}>
          <CalenderContainer date={date} time={time} />
        </View>
      </View>
    </View>
  );
};

export default ConsultationCard;
