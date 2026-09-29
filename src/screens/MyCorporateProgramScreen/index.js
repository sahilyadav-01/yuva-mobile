import React from 'react';
import {View, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header';
import {MY_CORPORATE_PROGRAM} from './constants';
import {useMyCorporateProgram} from './hooks/useMyCorporateProgram';

const MyCorporateProgram = () => {
  const {programList, renderItem, onEndReached} = useMyCorporateProgram();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={MY_CORPORATE_PROGRAM} showBackButton hideMenu />
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={programList}
            keyExtractor={(item, index) => `${index}`}
            onEndReached={onEndReached}
            renderItem={renderItem}
            nestedScrollEnabled={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCorporateProgram;
