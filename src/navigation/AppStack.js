import React from 'react';
import BottomTabs from './BottomTabs';

const AppStack = Stack => {
  return (
    <>
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </>
  );
};

export default AppStack;
