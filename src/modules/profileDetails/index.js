import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {useProfileDetails} from './hooks/useProfileDetails';
import {styles} from './style';
import {SVG} from '../../../assets';

const ProfileDetails = () => {
  const {data} = useProfileDetails();
  const {
    container,
    drawerContentContainer,
    textStyle,
    headingStyle,
    rowContainer,
    itemContainer,
    contentStyle,
  } = styles();
  return (
    <View style={container}>
      <Header
        showSearch={false}
        hideTitle={true}
        hideMenu={true}
        showBackButton={true}
      />
      <View style={drawerContentContainer}>
        <ScrollView>
          <>
            <Text style={textStyle}>Profile Setting</Text>
            <View style={{height: 12}} />
            {data.map((item, index) => (
              <TouchableOpacity
                onPress={item?.onPress}
                style={[
                  itemContainer,
                  {marginBottom: index < data.length - 1 ? 12 : 0},
                ]}>
                {item?.Icon()}
                <View style={rowContainer}>
                  <View>
                    <Text style={headingStyle}>{item?.heading}</Text>
                    <Text style={contentStyle}>{item?.description}</Text>
                  </View>
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

export default ProfileDetails;
