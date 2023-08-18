import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SVG} from '../../../assets';
import Header from '../../components/Header';
import {useProfileDetails} from './hooks/useProfileDetails';
import {styles} from './style';

const ProfileDetails = () => {
  const {data} = useProfileDetails();
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
        hideTitle={true}
        hideMenu={true}
        showBackButton={true}
      />
      <View style={drawerContentContainer}>
        <ScrollView>
          <>
            <Text style={textStyle}>Profile Setting</Text>
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

export default ProfileDetails;
