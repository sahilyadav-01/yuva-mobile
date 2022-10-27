import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const DownloadButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        className="flex-row justify-end items-center mt-2 ml-2 mr-[30px]  rounded border-black"
        onPress={onPress}>
        {/* <ArrowCircleLeftIcon className="h-5 w-5"/> */}
        <MaterialCommunityIcons
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
