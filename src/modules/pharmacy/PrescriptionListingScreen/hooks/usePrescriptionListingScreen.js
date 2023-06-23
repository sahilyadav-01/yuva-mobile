import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPharmacyForUserThunk, patientPrescriptionThunk } from "../../../../store/reducers/PharmacySlice";

export const usePrescriptionListingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(
      patientPrescriptionThunk({ pageNo: 1, pageSize: 10, search }),
    );
  }, []);
  const { prescriptionData } = useSelector(state => state.pharmacy);
  const onPress = (item) => {
    if (item?.item?.prescriptionId) {
      dispatch(getAllPharmacyForUserThunk({ pageNo: 1, pageSize: 10, prescriptionId: item?.item?.prescriptionId }));
    }
    navigation.navigate('PharmacyListing',{prescriptionId: item?.item?.prescriptionId});
  };

  return {
    prescriptionData,
    onPress,
  }
}