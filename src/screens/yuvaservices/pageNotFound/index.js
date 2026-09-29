import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SVG} from '../../../../assets';
import {styles} from './styles';
import {
  BOTTOM_TEXT1,
  BOTTOM_TEXT2,
  HEADING_TEXT1,
  HEADING_TEXT2,
} from './constant';
import Header from '../../../components/Header';

const PageNotFound = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route?.params || {};
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <Header showBackButton={true} hideMenu={true} showCart={true} />
      <View style={styles.topViewStyle}>
        <Text style={styles.textStyleTop1}>
          {data ?? HEADING_TEXT1}
          <Text style={styles.textStyleTop2}>{HEADING_TEXT2}</Text>
        </Text>
      </View>
      <View style={styles.middleViewStyle}>
        <SVG.PageNotFound />
      </View>
      <TouchableOpacity style={styles.bottomViewStyle} onPress={onBackPress}>
        <View style={styles.bottomContainer}>
          <Text style={styles.textStyleBottom1}>
            {BOTTOM_TEXT1}
            <Text style={styles.textStyleBottom2}>{BOTTOM_TEXT2}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default PageNotFound;
