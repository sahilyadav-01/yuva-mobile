import { useSelector } from "react-redux";

export const useListingScreen = () => {
  const { pharmacyDataList } = useSelector(state => state.pharmacy);
  const data = pharmacyDataList;
  
  return {
    data,
  }
}