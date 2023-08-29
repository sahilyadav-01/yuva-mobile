import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAppointmentThunk } from "../../../../../store/reducers/AppointmentSlice";

export const useAppointment = () => {
  const dispatch = useDispatch();
  const { userAppointments } = useSelector(state => state?.appointment);
  useEffect(() => {
    dispatch(allAppointmentThunk({ isActive: true }));
  }, []);
  return {
    userAppointments,
  };
};