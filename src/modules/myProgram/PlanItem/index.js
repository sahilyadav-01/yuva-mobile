import React from 'react';
import { ProgramCard } from './ProgramCard';
import { ProgramFooter } from './ProgramFooter';

const MyProgram = ({item}) => {
  return (
      <>
        <ProgramCard item={item} />
        <ProgramFooter item={item} />
      </>
  );
};

export default MyProgram;