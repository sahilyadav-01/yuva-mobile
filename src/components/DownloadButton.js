import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DownloadButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        className="flex-row justify-end items-center mt-2 ml-2 mr-[30px]  rounded border-black"
        onPress={onPress}>
        {/* <ArrowCircleLeftIcon className="h-5 w-5"/> */}
        <Icon
          name="download-box-outline"
          size={25}
          color="black"
        />
        <Text>Report</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DownloadButton;
