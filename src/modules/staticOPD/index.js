import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import OpdCard from './components/opdCard';
import SpecialityCard from './components/specialityCard';
import Header from '../../components/Header/index';
import {useSelector} from 'react-redux';
const CashlessOPD = ({navigation}) => {
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
      <Header />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <OpdCard />
        <SpecialityCard />
      </ScrollView>
    </View>
  );
};

export default CashlessOPD;
