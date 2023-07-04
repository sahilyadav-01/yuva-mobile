import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../../../components/Header';
import OnMood9Consult from '../consultation';
import {styles} from './style';
import DescriptionContainer from '../details';
import OnMood9Layers from '../onMood9Layers';
import Footer from '../footer';

const OnMood9Details = () => {
  const style = styles();
  return (
    <View style={style.contentContainer}>
      <Header title={'Mental Wellness'} showBackButton={true} />
      <ScrollView>
        <View style={style.contentContainer}>
          <OnMood9Consult/>
          <DescriptionContainer/>
          <OnMood9Layers/>
          <Footer/>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnMood9Details;
