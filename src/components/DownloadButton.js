import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DownloadButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity
        className="flex-row justify-end items-center mt-2 rounded border-black"
        onPress={onPress}>
        {/* <ArrowCircleLeftIcon className="h-5 w-5"/> */}
        <View style={{
          flexDirection: 'row',
          color: '#E68D36',
          marginTop: 24,
          marginBottom: 24,
          padding: 10,
          backgroundColor: '#FFFFFF',
          borderColor: '#E68D36',
          borderRadius: 8,
          borderWidth: 1
        }}>
          <Icon
            style={{
              marginLeft: 10,
              marginTop: 4
            }}
            name="download" size={15} color="#E68D36" />
          <Text
            style={{
              marginLeft: 5,
              marginRight: 5,
              color: '#E68D36',
            }}
          > Download Report</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DownloadButton;
