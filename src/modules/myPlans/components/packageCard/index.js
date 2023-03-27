import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {PNG} from '../../../../../assets';
import {AVAILABLE, BOOK_NOW, EXPIRY_DATE, PARAMETERS, USED} from './constant';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {usePackageCard} from './hooks/usePackageCard';
import {getPlanDate} from '../../../../utils/utils';
const PackageCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector(state => state.attribute);
  const bookNow = (plan, userVersion, uuid, version) => {
    navigation.navigate('Doctor', {
      plan: plan,
      userVersion: userVersion,
      uuid: uuid,
      version: version,
    });
  };
  const {programAndPlan} = usePackageCard();
  const renderItem = ({item, index}) => {
    return item.assignedAttributeResponseDto.map(i => {
      return (
        <ScrollView>
          <View style={styles.viewContainer} key={index}>
            <View style={styles.headView}>
              <Text style={styles.head}>{item.name}</Text>
            </View>
            <Text style={styles.expiry}>
              {EXPIRY_DATE}
              {getPlanDate(item.endDate)}
            </Text>

            <View style={styles.sideBySide}>
              <Image source={PNG.DOCTOR} style={styles.imageStyle} />
              <View style={styles.text1}>
                <Text style={styles.textColor}>{i.name}</Text>
                <Text style={styles.text2}>
                  {USED} {i.used} {AVAILABLE} {i.available}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                bookNow(item.plan, item.userVersion, item.uuid, item.version)
              }>
              <Text style={styles.textStyle}>{BOOK_NOW}</Text>
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
