import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BOTTOM_TEXT, ICON_NAME} from './constant';
import {styles} from './styles';

const DownloadButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.touchableOpacityContainer}
        onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Icon name={ICON_NAME} style={styles.iconContainer} />
          <Text style={styles.textStyle}> {BOTTOM_TEXT}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DownloadButton;
