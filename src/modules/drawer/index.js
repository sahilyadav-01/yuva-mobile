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
        title="Menu"
        PrefixIcon={SVG.Back}
        hideTitle={true}
      />
      <View style={drawerContentContainer}>
        <ScrollView bounces={false}>
          <>
            <Text style={textStyle}>{name}</Text>
            <View style={{height: 4}} />
            {data.map((item, index) => (
              <TouchableOpacity onPress={item?.onPress} style={itemContainer}>
                {item?.Icon()}
                <View style={descriptionContainer}>
                  <Text style={headingStyle}>{item?.heading}</Text>
                  <View style={rowContainer}>
                    <Text style={contentStyle}>{item?.description}</Text>
                    <SVG.ArrowRight />
                  </View>
                  {index < data.length - 1 && <View style={separator} />}
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
