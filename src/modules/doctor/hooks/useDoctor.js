import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  searchDoctorThunk,
  setTabBarVisible,
} from '../../../store/reducers/DoctorSlice';

export const useDoctor=()=>{
 
    const dispatch = useDispatch();
    const focused = useIsFocused();
    const navigation = useNavigation();
    const data  =  useSelector(state  =>  state.doctor.data)
    const [searchQuery, setSearchQuery] =useState('');
    useEffect(()=>{
        dispatch(searchDoctorThunk({search:""}))
    },[])
    const onChangeSearch = (query) => {
        setSearchQuery(query)
        if(query.length >  2){
            dispatch(searchDoctorThunk({search:'&search='+query}))
        } else if(query == ""){
            dispatch(searchDoctorThunk({search:""}))
        }
    }
    return {
onChangeSearch,
searchQuery,
data
    }
  };

  //   const dispatch = useDispatch();
  useEffect(() => {
    if (navigation.isFocused()) {
      dispatch(setTabBarVisible(false));
    } else if (!navigation.isFocused()) {
      dispatch(setTabBarVisible(true));
    }
  }, [focused]);
  return {
    onChangeSearch,
    searchQuery,
    data,
  };
};
