import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { styles as style } from './style';
import { SVG } from '../../../assets';
import { CYAN_BLUE } from '../../styles/colors';
import LifeStyleCard from '../../components/LifeStyleCard';
import ServiceCard from '../../components/ServiceCard';
import { HEADING_TEXT } from './constant';
import { useHome } from './hooks/useHome';
import Header from '../../components/Header';

export const HomeScreen = () => {
  const { name, renderservicesItem, renderLifeStyleItem, onPackagePress } = useHome();
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
      <Header initial={name ?? null} showSearch={true} showLocation={true} />
      {/**Services */}
      {renderservicesItem.map(item => (
        <View style={styles.servicesSubContainer}>
          {item.map((i) => {
            return (
              <ServiceCard
                key={i.name}
                name={i.name}
                screenName={i.screenName}
                image={i.image}
                type={i?.type ?? null}
                icon={i?.icon ?? null}
              />
            )
          })}
        </View>))}
      {/**Services */}
      {/**lifeStyle packages */}
      <View style={styles.lifeStyPackagesMainContainer}>
        <Text style={styles.lifeStyPackagesTextContainer}>{HEADING_TEXT}</Text>
        {renderLifeStyleItem.map(item => (
          <View style={styles.lifeStyPackagesSubContainer}>
            {item.map((i) => {
              return (<LifeStyleCard
                key={i.name}
                name={i.name}
                image={i.image}
                enumName={i.enumName}
                onPackagePress={(enumName, name) => onPackagePress(enumName, name)}
              />)
            })}
          </View>))}
      </View>
      {/**lifeStyle packages */}
    </SafeAreaView>
  );
};