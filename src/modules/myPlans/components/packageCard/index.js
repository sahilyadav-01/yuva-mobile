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
import {AVAILABLE, BOOK_NOW, PARAMETERS, USED} from './constant';
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
            <Text style={styles.head}>{item.name}</Text>

            <Text style={styles.expiry}>{getPlanDate(item.endDate)}</Text>

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

  return (
    <FlatList
      data={programAndPlan}
      renderItem={renderItem}
      keyExtractor={index => `${index}`}
    />
  );
};

export default PackageCard;
