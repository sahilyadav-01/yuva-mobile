import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { styles as style } from './style';
import { HEADING_TEXT } from './constant';
import { useHome } from './hooks/useHome';
import Header from '../../components/Header';
import Services from './components/services';
import LifeStyle from './components/lifeStyle';

export const HomeScreen = () => {
  const { name, renderservicesItem, renderLifeStyleItem, onPackagePress } = useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header initial={name ?? null} showSearch={true} showLocation={true} />
      <ScrollView>
        <Services renderservicesItem={renderservicesItem} />
        <View style={styles.lifeStyPackagesMainContainer}>
          <Text style={styles.lifeStyPackagesTextContainer}>{HEADING_TEXT}</Text>
          <LifeStyle renderLifeStyleItem={renderLifeStyleItem} onPackagePress={onPackagePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};