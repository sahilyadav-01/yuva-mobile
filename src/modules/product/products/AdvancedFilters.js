import React, { useState } from 'react';
import {View,Text, FlatList} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { CYAN_BLUE, GREEN } from '../../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AdvancedFilters = () => {
    const [data,setData] = useState([{title:'Category',id:0,data:[{title:'Category 1',status:'unchecked'},{title:'Category 2',status:'unchecked'},{title:'Category 3',status:'unchecked'}]},{title:'Sub Categories',id:1,data:[{title:'Sub Category 1',status:'unchecked'},{title:'Sub Category 2',status:'checked'},{title:'Sub Category 3',status:'checked'}]},{title:'Brand',id:2,data:[{title:'Brand 1',status:'unchecked'},{title:'Brand 2',status:'unchecked'},{title:'Brand 3',status:'unchecked'}]}]);
    const onCheck = ({id,index}) => {
        let newData = data.map((item)=>{
            if(item.id === id) {
                return {...item,data:item.data.map((element,i)=>{
                    if(i === index) {
                        return {...element,status:element.status === 'checked' ? 'unchecked' : 'checked'}
                    }
                    return element;
                })}
            }
            else return item;
        })
        setData(newData);
    }
    return (
        <View style={{flex:1,paddingHorizontal:16,paddingBottom:16,justifyContent:'space-between',flexDirection:'column-reverse'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:16}}>
                        <TouchableOpacity style={{paddingVertical:8,paddingHorizontal:4,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'black'}}>
                            <Text>Apply Filter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingVertical:8,paddingHorizontal:4,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'black'}}>
                            <Text>Clear Filter</Text>
                        </TouchableOpacity>
                    </View>
            <View style={{flex:1,justifyContent:'space-between'}}>
            {data.map((element,i)=>{
                return (
                    <View style={{height:'33%'}}>
                    <Text>{element?.title}</Text>
                    <View style={{width:'100%',height:0.5,backgroundColor:'grey'}}/>
                    <FlatList style={{borderWidth:1}} data={element?.data} keyExtractor={(_,index)=>`filter-child-${i}-${index}`} renderItem={({item,index})=>{
                        return (
                            <View style={{marginLeft:4,flexDirection:'row',alignItems:'center'}}>
                                <Checkbox.Android color={GREEN} uncheckedColor={CYAN_BLUE} onPress={()=>onCheck({id:element?.id,index})} status={item?.status}/>
                                <Text style={{marginLeft:4}}>{item?.title}</Text>
                            </View>
                        );
                    }}/>
                    </View>
                );
            })}
            </View>
        </View>
    );
}

export default AdvancedFilters;