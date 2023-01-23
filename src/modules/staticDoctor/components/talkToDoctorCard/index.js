import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {DOCTOR, CHAT_WITH_DOCTOR, DESC, HEALTH_CONDITION} from '../../constant';
import {styles} from './styles';

const TalkToDoctorCard = () => {
  console.log(HEALTH_CONDITION, 'gdashgdj');
  const renderItem = ({key, item}) => {
    return (
      <View>
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
        <Text style={styles.title}>{CHAT_WITH_DOCTOR}</Text>
        <Text style={styles.description}>{DESC}</Text>
      </View>

      <View>
        <FlatList
          horizontal
          data={HEALTH_CONDITION}
          keyExtractor={index => `${index}`}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default TalkToDoctorCard;
