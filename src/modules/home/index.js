import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { styles as style } from './style';
import { SVG } from '../../../assets';
import { CYAN_BLUE } from '../../styles/colors';
import { iteratorSymbol } from 'immer/dist/internal';
import { usehome } from './hooks/useHome';
import LifeStyleCard from '../../components/LifeStyleCard';
import ServiceCard from '../../components/ServiceCard';
import { HEADING_TEXT } from './constant';


export const HomeScreen = () => {
  const styles = style();
  const { renderservicesItem, renderLifeStyleItem, onPackagePress } = usehome();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 16, backgroundColor: 'white', paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Header</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <SVG.LocationOn fill={CYAN_BLUE} />
          <SelectList
            data={[{ key: '0', value: 'Banglore' }, { key: '1', value: 'BangloreBangloreBangloreBangloreBanglore' }, { key: '2', value: 'Delhi' }]}
            placeholder={'Select City'}
            search={false}
            setSelected={() => { }}
            boxStyles={{ paddingVertical: 0, paddingHorizontal: 0, borderWidth: 0, alignItems: 'center', justifyContent: 'center' }}
            inputStyles={styles.inputStyles}
            dropdownStyles={{ position: 'absolute', width: 100, right: 0.5 }}
            dropdownTextStyles={styles.inputStyles}
          />
          <View style={{ width: 8 }} />
          <SVG.SearchIcon />
        </View>
      </View>
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
              return ( <LifeStyleCard
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

