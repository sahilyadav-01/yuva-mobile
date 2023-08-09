import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { styles as style } from './style';
import { SVG } from '../../../assets';
import { CYAN_BLUE, DARK_GRAY } from '../../styles/colors';

export const HomeScreen = () => {
  const styles = style();
  return (
    <SafeAreaView style={styles.container}>
     <View style={{paddingHorizontal:16,backgroundColor:'white',paddingVertical:16,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <Text>Header</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <SVG.LocationOn fill={CYAN_BLUE}/>
    <SelectList 
             data={[{key:'0',value:'Banglore'},{key:'1',value:'BangloreBangloreBangloreBangloreBanglore'},{key:'2',value:'Delhi'}]}
             placeholder={'Select City'}
             search={false}
             setSelected={()=>{}}
             boxStyles={{paddingVertical:0,paddingHorizontal:0,borderWidth:0,alignItems:'center',justifyContent:'center'}}
             inputStyles={styles.inputStyles}
             dropdownStyles={{position:'absolute',width:100,right:0.5}}
             dropdownTextStyles={styles.inputStyles}
           />
    <View style={{width:8}}/>
    <SVG.SearchIcon/>
    </View>
     </View>
    </SafeAreaView>
  );
};

