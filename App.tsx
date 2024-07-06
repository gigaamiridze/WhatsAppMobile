import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation';
import { StatusBar } from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
