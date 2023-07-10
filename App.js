import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import IntroStackNav from './src/navigation/IntroStackNav';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/store/Store';
import {useApp} from './useApp';

export default function App() {
  const {showContent} = useApp();
  return (
    <Provider store={store}>
      <PaperProvider>
        {showContent && (
          <NavigationContainer>
            <IntroStackNav />
          </NavigationContainer>
        )}
      </PaperProvider>
    </Provider>
  );
}
