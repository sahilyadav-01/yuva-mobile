import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DOCTOR,
  CHAT_WITH_DOCTOR,
  DESC,
  HEALTH_CONDITION,
  GET_DOCTOR_NOW,
} from '../../constant';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
const TalkToDoctorCard = () => {
  const navigation = useNavigation();
  const onLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const renderItem = ({key, item}) => {
    return (
      <View key={index}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={item.iconName} style={styles.imageStyle} />
          </View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View>
        <Text style={styles.headTitle}>{DOCTOR}</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={onLogin}>
          <Text style={styles.title1}>{GET_DOCTOR_NOW} </Text>
        </TouchableOpacity>
        <Text style={styles.title}>{CHAT_WITH_DOCTOR}</Text>
        <Text style={styles.description}>{DESC}</Text>
      </View>

      <View>
        <FlatList
          horizontal
          data={HEALTH_CONDITION}
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default TalkToDoctorCard;
