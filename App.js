import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import IntroStackNav from './src/navigation/IntroStackNav';
import OPDNavigation from './src/navigation/OPDNavigation';
import NewAppointment from './src/screens/yuvaservices/opd/appointments/NewAppointment';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import HRANavigation from './src/navigation/HRANavigation';
import Section2 from './src/screens/yuvaservices/hra/Section2';
import LoginScreen from './src/screens/login/LoginScreen';
import {Provider} from 'react-redux';
import store from './src/store/Store';
import HRAHome from './src/screens/yuvaservices/hra/HRAHome';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          {/* <TailwindProvider> */}
          {/* <BottomTabs/> */}
          <IntroStackNav />
          {/* <OPDNavigation/> */}
          {/* <NewAppointment/> */}
          {/* <HRANavigation/> */}
          {/* <Section2/> */}
          {/* <HRAHome/> */}
          {/* </TailwindProvider> */}
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
