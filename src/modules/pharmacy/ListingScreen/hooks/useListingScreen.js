import { useState } from "react";
import { useSelector } from "react-redux";

export const useListingScreen = () => {
  const [search, setSearch] = useState('');
  const { pharmacyDataList } = useSelector(state => state.pharmacy);
  const data = pharmacyDataList;
  const onSearch = arg => {
     setSearch(arg.trim());
  };
  return {
    data,
    onSearch
  }
}