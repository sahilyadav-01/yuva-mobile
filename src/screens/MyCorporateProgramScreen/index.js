import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';
import { MY_CORPORATE_PROGRAM } from './constants';
import { useMyCorporateProgram } from './hooks/useMyCorporateProgram';

const MyCorporateProgram = () => {
  const { myProgramUserData, renderItem } = useMyCorporateProgram(); 

  return (
    <View>
      <Header title={MY_CORPORATE_PROGRAM} showBackButton hideMenu />
      <View style={styles.container}>
        <FlatList
          data={myProgramUserData?.data?.userProgramResponseDtoList}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        />
      </View>
    </View>
  );
};

export default MyCorporateProgram;