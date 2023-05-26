import React from 'react';
import { View } from 'react-native';
import { ProgramCard } from './ProgramCard';
import { ProgramFooter } from './ProgramFooter';

const MyProgram = ({item}) => {
  return (
    <View >
      <ProgramCard item={item} />
      <ProgramFooter item={item}/>
    </View>
  );
};

export default MyProgram;