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
    const diagnosticState  =  useSelector(state  =>  state.diagnostic);
    const {userDetails} =  useSelector(state  =>  state.profile)
    const [searchQuery, setSearchQuery] =useState('');
    const [cityId, setCityId] = useState(null);
    const getCityId = () => {
      if(diagnosticState?.selectedCityId === '') {
        return userDetails?.cityId;
      }
      else {
        return diagnosticState?.cityId?.find((item)=>{return item?.name === diagnosticState?.selectedCityId})?.id
      }
    }
    useEffect(()=>{
      if(cityId!==null)
        dispatch(searchDoctorThunk({search:"",cityId}))
    },[cityId])

    useEffect(()=>{
      setCityId(getCityId());
    },[diagnosticState?.selectedCityId])

    useEffect(() => {
      if (navigation.isFocused()) {
        dispatch(setTabBarVisible(false));
      } 
    }, [focused]);
    const onChangeSearch = (query) => {
        setSearchQuery(query)
        if(query.length >  2 && cityId!==null){
            dispatch(searchDoctorThunk({search:'&search='+query.trim(),cityId}))
        } else if(query == "" && cityId!==null){
            dispatch(searchDoctorThunk({search:"",cityId}))
        }
    }
  return {
    onChangeSearch,
    searchQuery,
    data
  }
};