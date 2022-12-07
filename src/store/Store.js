import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';
import section1 from './reducers/Section1Slice';
import section2 from './reducers/Section2Slice';
import section3 from './reducers/Section3Slice';
import section4 from './reducers/Section4Slice';
import section5 from './reducers/Section5Slice';
import section6 from './reducers/Section6Slice';
import section7 from './reducers/Section7Slice';
import section8 from './reducers/Section8Slice';
import section9 from './reducers/Section9Slice';
import doctor from './reducers/DoctorSlice';
import appointment from './reducers/AppointmentSlice';
import diagnostic from './reducers/DiagnosticsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    section1: section1,
    section2: section2,
    section3: section3,
    section4: section4,
    section5: section5,
    section6: section6,
    section7: section7,
    section8: section8,
    section9: section9,
    doctor: doctor,
    appointment: appointment,
    diagnostic:diagnostic,
  },
});

export default store;
