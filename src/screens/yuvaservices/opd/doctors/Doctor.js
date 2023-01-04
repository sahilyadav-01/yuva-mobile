import React, { useEffect, useCallback } from 'react'
import { View, Text, TextInput,FlatList,ScrollView } from 'react-native'
import DoctorCard from '../../../../components/DoctorCard'
import { Searchbar } from 'react-native-paper';
import {searchDoctorThunk}  from './../../../../store/reducers/DoctorSlice'
import { useSelector, useDispatch } from 'react-redux';
import SearchLabel from '../../../../components/SearchLabel';
import { styles} from "../../../styles"



const Doctor = () => {



    /**
     *  Doctors state
     * */  
    const data  =  useSelector(state  =>  state.doctor.data)
    const {jwt}    =  useSelector(state => state.auth.user)
    const [searchQuery, setSearchQuery] = React.useState('');

    /**
     * Generic Hooks
     */
    const dispatch = useDispatch()

    /**
     * React Hooks
     */
    useEffect(()=>{
        dispatch(searchDoctorThunk({search:"", jwt}))
    },[])

    /**
     * handlers
     */

    const onChangeSearch = (query) => {
        setSearchQuery(query)
        if(query.length >  2){
            dispatch(searchDoctorThunk({search:'&search='+query, jwt}))
        } else if(query == ""){
            dispatch(searchDoctorThunk({search:"", jwt}))
        }
    }


 
    return (
        <View className="m-0" style={styles.container} >
            {/* <TextInput  className="mt-4 border-box shadow-md h-12" placeholder="Search for Doctors"/> */}
            <Searchbar
                style={{
                    backgroundColor:"#FAEADB",
                    color:"#52608E",
                    marginTop:10,
                    fontSize:12
                }}
                placeholder="Search for Doctor or Specialization"
                onChangeText={onChangeSearch}
                value={searchQuery}
                theme={{ colors: { text: "black" } }}
                placeholderTextColor="#1D2334"
                label={SearchLabel}
            />
            {/* Doctors */}
            {/* <View className="flex mt-8">
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator ={false}
                />
            </View>  */}
            <View  className=" mt-[20px]">
                <ScrollView
                    bounces={false}    
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom:60
                    }}
                    showsVerticalScrollIndicator={false}>
                    {   data.map((item)=>{
                        return <DoctorCard 
                            key={item.id}
                            doctorId={item.id}
                            name={item.name} 
                            specialization={item.speciality} 
                            address={item.address} 
                            rating={item.rating} 
                            exp={item.experience} 
                            img={item.img} 
                            qual={item.qual  == undefined ? "MBBS" : item.qual} 
                     />  
                    })

                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor
