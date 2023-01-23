import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {DOCTOR, CHAT_WITH_DOCTOR, DESC, TALKDOCTOR} from '../../constant';
import {styles} from './styles';
const TalkToDoctorCard = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageViews}>
        <View>
          <Image source={item.image} />
          <Text style={styles.imageName}>{item.imageName}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View>
        <Text style={styles.headTitle}>{DOCTOR}</Text>
        <Text style={styles.title}>{CHAT_WITH_DOCTOR}</Text>
        <Text style={styles.description}>{DESC}</Text>
      </View>

      <View>
        <FlatList
          horizontal
          data={TALKDOCTOR}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default TalkToDoctorCard;
