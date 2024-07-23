import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SVG} from '../../../assets';
import Header from '../../components/Header';
import {useDrawer} from './hooks/useDrawer';
import {styles} from './style';

const Drawer = () => {
  const {data, name} = useDrawer();
  const {
    container,
    drawerContentContainer,
    textStyle,
    headingStyle,
    separator,
    rowContainer,
    itemContainer,
    descriptionContainer,
    contentStyle,
  } = styles();
  return (
    <View style={container}>
      <Header
        showSearch={false}
        title="Settings"
        PrefixIcon={SVG.Back}
        showBackButton={true}
      />
      <View style={drawerContentContainer}>
        <ScrollView bounces={false}>
          <>
            <Text style={textStyle}>General</Text>
            <View style={{height: 12}} />
            {data.map((item, index) => (
              <TouchableOpacity
                onPress={item?.onPress}
                style={[
                  itemContainer,
                  {marginBottom: index < data.length - 1 ? 12 : 0},
                ]}>
                <View style={{width: 25}}>{item?.Icon()}</View>
                <View style={rowContainer}>
                  <Text style={contentStyle}>{item?.heading}</Text>
                  <SVG.BackButton transform={[{rotate: '180deg'}]} />
                </View>
              </TouchableOpacity>
            ))}
          </>
        </ScrollView>
      </View>
    </View>
  );
};

export default Drawer;
