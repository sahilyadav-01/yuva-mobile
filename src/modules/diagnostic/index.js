import React from 'react';
import {View, SafeAreaView} from 'react-native';
import DiagnosticNav1 from '../../navigation/DiagnosticNav';
import {styles} from './styles';
import Header from '../../components/Header';
import {useDiagnostic} from './hooks/useDiagnostic';
import {MY_TESTS} from './constants';

const Diagnostic = () => {
  const {onPressRightIcon, loggedIn} = useDiagnostic();

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton={true} title={MY_TESTS} />
      <View style={styles.height}>
        <DiagnosticNav1 />
      </View>
    </SafeAreaView>
  );
};

export default Diagnostic;
