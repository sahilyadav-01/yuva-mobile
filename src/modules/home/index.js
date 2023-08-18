import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles as style} from './style';
import {useHome} from './hooks/useHome';
import Header from '../../components/Header';

export const HomeScreen = () => {
  const {name} = useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header initial={name ?? null} showSearch={true} showLocation={true}/>
    </SafeAreaView>
  );
};
