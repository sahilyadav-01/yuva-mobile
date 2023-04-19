import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PNG} from '../../../../../assets';
import {AVAILABLE, BOOK_NOW, EXPIRY_DATE, USED} from './constant';
import {useNavigation} from '@react-navigation/native';
import {usePackageCard} from './hooks/usePackageCard';
import {getPlanDate} from '../../../../utils/utils';
import { NOT_AVAILABLE } from '../../../../components/constants';
import { AMBER, CYAN_BLUE, DEEP_RED, ORANGE, WHITE } from '../../../../styles/colors';
const PackageCard = () => {
  const navigation = useNavigation();
  const bookNow = (plan, userVersion, uuid, version, locked) => {
    if(!locked) {
      navigation.navigate('PurchaseScreen')
    }
    else {
    navigation.navigate('Doctor', {
      plan: plan,
      userVersion: userVersion,
      uuid: uuid,
      version: version,
    });
  }
  };
  const {programAndPlan} = usePackageCard();
  const renderItem = ({item, index}) => {
    return item.assignedAttributeResponseDto.map(i => {
      return (
        <ScrollView>
          <View style={styles.viewContainer} key={index}>
          <View style={styles.headViewContainer}>
            <View style={styles.headView}>
              <Text style={styles.head}>{item?.name.length > 26 ? item?.name.substring(0, 26) + '...' : item?.name}</Text>
            </View>
            <Text style={styles.expiry}>
              {EXPIRY_DATE}
              {getPlanDate(item.endDate)}
            </Text>
        </View>
            <View style={styles.sideBySide}>
              <Image source={PNG.DOCTOR} style={styles.imageStyle} />
              <View style={styles.text1}>
                <Text style={styles.textColor}>{i.name}</Text>
                <Text style={styles.text2}>
                  {USED} {i.used} {AVAILABLE} {i.available}
                </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.Available, { color: i.available === 0 ? DEEP_RED : CYAN_BLUE }]}>{i.available === 0 ? NOT_AVAILABLE : ''}</Text>
            </View>
            <TouchableOpacity
              style={[styles.buttonStyle,{backgroundColor: i.available===0 ?AMBER :ORANGE}]}  
              onPress={() =>
                bookNow(item.plan, item.userVersion, item.uuid, item.version, item.locked)
              } disabled={!i.available}>
              <Text style={[styles.textStyle, { color: i.available === 0 ? CYAN_BLUE : WHITE }]}>{BOOK_NOW}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    });
  };

  if(programAndPlan?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Active Plans left</Text>
        </View>
    );
  }
  return (
    <FlatList
      data={programAndPlan}
      renderItem={renderItem}
      keyExtractor={index => `${index}`}
    />
  );
};

export default PackageCard;
