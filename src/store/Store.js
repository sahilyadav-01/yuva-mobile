import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer, {authInit} from './reducers/AuthSlice';
import section1, {section1Init} from './reducers/Section1Slice';
import section2, {section2Init} from './reducers/Section2Slice';
import section3, {section3Init} from './reducers/Section3Slice';
import section4, {section4Init} from './reducers/Section4Slice';
import section5, {section5Init} from './reducers/Section5Slice';
import section6, {section6Init} from './reducers/Section6Slice';
import section7, {section7Init} from './reducers/Section7Slice';
import section8, {section8Init} from './reducers/Section8Slice';
import section9, {section9Init} from './reducers/Section9Slice';
import doctor, {doctorInit} from './reducers/DoctorSlice';
import appointment, {appointmentInit} from './reducers/AppointmentSlice';
import diagnostic, {diagnosticInit} from './reducers/DiagnosticsSlice';
import talkToDoctor, {talkToDoctorInit} from './reducers/TalkToDoctorSlice';
import profile, {profileInit} from './reducers/ProfileSlice';
import programAndPlan, {
  programAndPlanInit,
} from './reducers/ProgramAndPlanSlice';
import popularTests, {popularTestsInit} from './reducers/PopularTestsSlice ';
import coupon, {couponInit} from './reducers/CouponSlice';
import lifestylePackage, {
  lifestylePackageInit,
} from './reducers/LifeStyleSlice';
import attribute, {attributeInit} from './reducers/AttributeSlice';
import hra, {hraInit} from './reducers/HRASlice';
import cart, { cartInit } from './reducers/CartSlice';
import downloadReport,{downloadInit} from './reducers/DownloadReportSlice';
import payment,{paymentInit} from './reducers/PaymentSlice';
import checkOut, { checkOutInit } from './reducers/CheckOutSlice';
import purchases, { purchasesInit } from './reducers/PurchasesSlice';
import pharmacy, {pharmacyInit} from './reducers/PharmacySlice';
import Emrm, { EmrmInit } from './reducers/EmrmSlice';
import maintainence, { maintainenceInit } from './reducers/MaintainenceSlice';

const storeInitialState = {
  auth: authInit,
  section1: section1Init,
  section2: section2Init,
  section3: section3Init,
  section4: section4Init,
  section5: section5Init,
  section6: section6Init,
  section7: section7Init,
  section8: section8Init,
  section9: section9Init,
  doctor: doctorInit,
  appointment: appointmentInit,
  diagnostic: diagnosticInit,
  talkToDoctor: talkToDoctorInit,
  profile: profileInit,
  programAndPlan: programAndPlanInit,
  popularTests: popularTestsInit,
  coupon:couponInit,
  attribute: attributeInit,
  hra: hraInit,
  lifestylePackage:lifestylePackageInit,
  cart: cartInit,
  downloadReport:downloadInit,
  payment: paymentInit,
  checkOut:checkOutInit,
  purchases: purchasesInit,
  pharmacy:pharmacyInit,
  Emrm: EmrmInit,
  maintainence: maintainenceInit,
};

const appReducer = combineReducers({
  auth: authReducer,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  doctor,
  appointment,
  diagnostic,
  talkToDoctor,
  profile,
  programAndPlan,
  attribute,
  hra,
  popularTests,
  coupon,
  lifestylePackage,
  cart,
  downloadReport,
  payment,
  checkOut,
  purchases,
  pharmacy,
  Emrm,
  maintainence
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logoutThunk/fulfilled') {
    return appReducer(storeInitialState, action);
  } else if (action.type === 'hra/resetHRA') {
    return appReducer(
      {
        ...state,
        section1: section1Init,
        section2: section2Init,
        section3: section3Init,
        section4: section4Init,
        section5: section5Init,
        section6: section6Init,
        section7: section7Init,
        section8: section8Init,
        section9: section9Init,
      },
      action,
    );
  }
  return appReducer(state, action);
};


const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export default store;