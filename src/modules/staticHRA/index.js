import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header/index';
import {styles} from './styles';
import HraCard from './components/hraCard';
import BenfitsCard from './components/benifitsCard';
import {useSelector} from 'react-redux';
const StaticHra = ({navigation}) => {
  const {
    user: {jwt},
    loggedIn,
  } = useSelector(state => state.auth);
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //open drawer
    }
  };
  return (
    <View>
      <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <HraCard />
        <BenfitsCard />
      </ScrollView>
    </View>
  );
};

export default StaticHra;
